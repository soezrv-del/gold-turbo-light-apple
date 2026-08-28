import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nhtsa-KqDOq2fq.js
function pick(row, key) {
	const v = row[key];
	if (!v || v === "Not Applicable" || v === "N/A") return "";
	return v;
}
var decodeVin_createServerFn_handler = createServerRpc({
	id: "6883b9cb4bad31f0243989045daee5f6cecad4d7529f675d01ed5bf2950e0243",
	name: "decodeVin",
	filename: "src/lib/server/nhtsa.ts"
}, (opts) => decodeVin.__executeServer(opts));
var decodeVin = createServerFn({ method: "POST" }).validator((input) => input).handler(decodeVin_createServerFn_handler, async ({ data }) => {
	const vin = data.vin.trim().toUpperCase();
	const empty = {
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
		plantState: ""
	};
	if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) return empty;
	const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${encodeURIComponent(vin)}?format=json`);
	if (!res.ok) return {
		...empty,
		errorText: `NHTSA error ${res.status}`
	};
	const row = (await res.json()).Results?.[0];
	if (!row) return {
		...empty,
		errorText: "No decode results"
	};
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
		plantState: pick(row, "PlantState")
	};
});
var lookupRecalls_createServerFn_handler = createServerRpc({
	id: "bebb09897503d422d8cd762dc118116bdd4d19a7f12b92ad4076451c4afe4925",
	name: "lookupRecalls",
	filename: "src/lib/server/nhtsa.ts"
}, (opts) => lookupRecalls.__executeServer(opts));
var lookupRecalls = createServerFn({ method: "POST" }).validator((input) => input).handler(lookupRecalls_createServerFn_handler, async ({ data }) => {
	const q = `make=${encodeURIComponent(data.make)}&model=${encodeURIComponent(data.model)}&modelYear=${encodeURIComponent(data.year)}`;
	const [recallsRes, complaintsRes] = await Promise.all([fetch(`https://api.nhtsa.gov/recalls/recallsByVehicle?${q}`), fetch(`https://api.nhtsa.gov/complaints/complaintsByVehicle?${q}`)]);
	const recallsJson = recallsRes.ok ? await recallsRes.json() : { results: [] };
	const complaintsJson = complaintsRes.ok ? await complaintsRes.json() : { results: [] };
	const recalls = (recallsJson.results ?? []).slice(0, 8).map((r) => ({
		component: String(r.Component ?? ""),
		summary: String(r.Summary ?? ""),
		consequence: String(r.Consequence ?? ""),
		remedy: String(r.Remedy ?? ""),
		date: String(r.ReportReceivedDate ?? ""),
		campaignNumber: String(r.NHTSACampaignNumber ?? "")
	}));
	return {
		recalls,
		complaints: (complaintsJson.results ?? []).slice(0, 8).map((c) => ({
			component: String(c.components ?? c.Component ?? ""),
			summary: String(c.summary ?? c.Summary ?? ""),
			date: String(c.datea ?? c.odiDate ?? ""),
			crashFlag: Boolean(c.crash),
			fireFlag: Boolean(c.fire)
		})),
		recallCount: recallsJson.results?.length ?? recalls.length
	};
});
//#endregion
export { decodeVin_createServerFn_handler, lookupRecalls_createServerFn_handler };
