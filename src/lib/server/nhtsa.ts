import { createServerFn } from "@tanstack/react-start";

export interface VinDecode {
  vin: string;
  valid: boolean;
  errorText: string;
  year: string;
  make: string;
  model: string;
  trim: string;
  series: string;
  vehicleType: string;
  bodyClass: string;
  engineDisplacement: string;
  engineCylinders: string;
  engineHP: string;
  fuelType: string;
  driveType: string;
  transmissionStyle: string;
  gvwr: string;
  manufacturer: string;
  plantCountry: string;
  plantCity: string;
  plantState: string;
}

export interface RecallItem {
  component: string;
  summary: string;
  consequence: string;
  remedy: string;
  date: string;
  campaignNumber: string;
}

export interface ComplaintItem {
  component: string;
  summary: string;
  date: string;
  crashFlag: boolean;
  fireFlag: boolean;
}

function pick(row: Record<string, string>, key: string) {
  const v = row[key];
  if (!v || v === "Not Applicable" || v === "N/A") return "";
  return v;
}

export const decodeVin = createServerFn({ method: "POST" })
  .validator((input: { vin: string }) => input)
  .handler(async ({ data }): Promise<VinDecode> => {
    const vin = data.vin.trim().toUpperCase();
    const empty: VinDecode = {
      vin,
      valid: false,
      errorText: "Invalid VIN",
      year: "",
      make: "",
      model: "",
      trim: "",
      series: "",
      vehicleType: "",
      bodyClass: "",
      engineDisplacement: "",
      engineCylinders: "",
      engineHP: "",
      fuelType: "",
      driveType: "",
      transmissionStyle: "",
      gvwr: "",
      manufacturer: "",
      plantCountry: "",
      plantCity: "",
      plantState: "",
    };
    if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) return empty;
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${encodeURIComponent(vin)}?format=json`,
    );
    if (!res.ok) return { ...empty, errorText: `NHTSA error ${res.status}` };
    const json = (await res.json()) as { Results?: Record<string, string>[] };
    const row = json.Results?.[0];
    if (!row) return { ...empty, errorText: "No decode results" };
    const errorCode = pick(row, "ErrorCode");
    const valid = errorCode === "0" || errorCode.startsWith("0,") || !!pick(row, "Make");
    return {
      vin,
      valid,
      errorText: valid ? "" : pick(row, "ErrorText") || "Could not decode VIN",
      year: pick(row, "ModelYear"),
      make: pick(row, "Make"),
      model: pick(row, "Model"),
      trim: pick(row, "Trim"),
      series: pick(row, "Series"),
      vehicleType: pick(row, "VehicleType"),
      bodyClass: pick(row, "BodyClass"),
      engineDisplacement: pick(row, "DisplacementL"),
      engineCylinders: pick(row, "EngineCylinders"),
      engineHP: pick(row, "EngineHP"),
      fuelType: pick(row, "FuelTypePrimary"),
      driveType: pick(row, "DriveType"),
      transmissionStyle: pick(row, "TransmissionStyle"),
      gvwr: pick(row, "GVWR"),
      manufacturer: pick(row, "Manufacturer"),
      plantCountry: pick(row, "PlantCountry"),
      plantCity: pick(row, "PlantCity"),
      plantState: pick(row, "PlantState"),
    };
  });

export const lookupRecalls = createServerFn({ method: "POST" })
  .validator((input: { make: string; model: string; year: string }) => input)
  .handler(async ({ data }) => {
    const q = `make=${encodeURIComponent(data.make)}&model=${encodeURIComponent(data.model)}&modelYear=${encodeURIComponent(data.year)}`;
    const [recallsRes, complaintsRes] = await Promise.all([
      fetch(`https://api.nhtsa.gov/recalls/recallsByVehicle?${q}`),
      fetch(`https://api.nhtsa.gov/complaints/complaintsByVehicle?${q}`),
    ]);
    const recallsJson = recallsRes.ok ? ((await recallsRes.json()) as { results?: Record<string, string>[] }) : { results: [] };
    const complaintsJson = complaintsRes.ok
      ? ((await complaintsRes.json()) as { results?: Record<string, string | boolean>[] })
      : { results: [] };

    const recalls: RecallItem[] = (recallsJson.results ?? []).slice(0, 8).map((r) => ({
      component: String(r.Component ?? ""),
      summary: String(r.Summary ?? ""),
      consequence: String(r.Consequence ?? ""),
      remedy: String(r.Remedy ?? ""),
      date: String(r.ReportReceivedDate ?? ""),
      campaignNumber: String(r.NHTSACampaignNumber ?? ""),
    }));
    const complaints: ComplaintItem[] = (complaintsJson.results ?? []).slice(0, 8).map((c) => ({
      component: String(c.components ?? c.Component ?? ""),
      summary: String(c.summary ?? c.Summary ?? ""),
      date: String(c.datea ?? c.odiDate ?? ""),
      crashFlag: Boolean(c.crash),
      fireFlag: Boolean(c.fire),
    }));
    return { recalls, complaints, recallCount: recallsJson.results?.length ?? recalls.length };
  });
