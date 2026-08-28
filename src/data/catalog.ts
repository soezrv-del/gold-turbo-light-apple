import "./rvDataExtra";
import {
  RV_DATA,
  YEARS,
  CLASSIC_BRANDS,
  type RVSpec,
  getMaintenanceSchedule,
  getMockReviews,
} from "./rvData";
import { rvSlug } from "@/lib/utils";
import overlayJson from "./catalog-overlay.json";

export { RV_DATA, YEARS, CLASSIC_BRANDS, getMaintenanceSchedule, getMockReviews };
export type { RVSpec };

export const RV_TYPES = [
  "Class A Diesel",
  "Class A Gas",
  "Class B",
  "Class B+",
  "Class C",
  "Super C",
  "Fifth Wheel",
  "Travel Trailer",
  "Toy Hauler",
  "Truck Camper",
] as const;

export type RvType = (typeof RV_TYPES)[number];

export const TYPE_IMAGE: Record<string, string> = {
  "Class A Gas": "/rv/class-a.jpg",
  "Class A Diesel": "/rv/class-a.jpg",
  "Class B": "/rv/class-b.jpg",
  "Class B+": "/rv/class-b.jpg",
  "Class C": "/rv/class-c.jpg",
  "Super C": "/rv/class-c.jpg",
  "Fifth Wheel": "/rv/fifth-wheel.jpg",
  "Travel Trailer": "/rv/travel-trailer.jpg",
  "Toy Hauler": "/rv/fifth-wheel.jpg",
  "Truck Camper": "/rv/travel-trailer.jpg",
};

export function typeImage(type: string): string {
  for (const [key, src] of Object.entries(TYPE_IMAGE)) {
    if (type === key || type.startsWith(key)) return src;
  }
  if (type.includes("Super C")) return TYPE_IMAGE["Super C"];
  if (type.includes("Class B")) return TYPE_IMAGE["Class B"];
  if (type.includes("Class C")) return TYPE_IMAGE["Class C"];
  if (type.includes("Fifth") || type.includes("Toy")) return TYPE_IMAGE["Fifth Wheel"];
  if (type.includes("Travel") || type.includes("Truck")) return TYPE_IMAGE["Travel Trailer"];
  return TYPE_IMAGE["Class A Gas"];
}

type OverlayRow = {
  horsepower?: number;
  torqueLbFt?: number;
  fuelCapacityGal?: number;
  transmission?: string;
  yearsWithFloorplans?: number[];
  powertrainByYear?: RVSpec["powertrainByYear"];
  engine2016_2026?: string;
  horsepower2016_2026?: number;
  yearStart?: number;
  yearEnd?: number;
  rating?: number;
  description?: string;
  engine?: string;
  chassis?: string;
  type?: string;
  fuelType?: string;
  floorplans?: string[];
  lengthMinFt?: number;
  lengthMaxFt?: number;
  weightMinLbs?: number;
  weightMaxLbs?: number;
  sleeps?: number;
  slideouts?: number;
  freshWater?: number;
  grayWater?: number;
  blackWater?: number;
  towingCapacity?: number;
  generator?: string;
};

function guessMsrp(type: string): [number, number] {
  const t = type.toLowerCase();
  if (t.includes("diesel") && t.includes("class a")) return [180000, 450000];
  if (t.includes("class a")) return [110000, 280000];
  if (t.includes("super c")) return [180000, 400000];
  if (t.includes("class b")) return [120000, 250000];
  if (t.includes("class c")) return [80000, 180000];
  if (t.includes("fifth") || t.includes("toy")) return [55000, 160000];
  return [28000, 85000];
}

function applyCatalogOverlay() {
  const overlay = overlayJson as unknown as Record<string, OverlayRow>;
  for (const [key, row] of Object.entries(overlay)) {
    const sep = key.indexOf("||");
    const make = key.slice(0, sep);
    const model = key.slice(sep + 2);
    const current = RV_DATA[make]?.[model];
    if (!current) {
      if (!RV_DATA[make]) RV_DATA[make] = {};
      RV_DATA[make][model] = {
        type: row.type ?? "Travel Trailer",
        floorplans: row.floorplans ?? [],
        lengthRange: [row.lengthMinFt ?? 20, row.lengthMaxFt ?? 32],
        weightRange: [row.weightMinLbs ?? 5000, row.weightMaxLbs ?? 12000],
        slideouts: row.slideouts ?? 0,
        sleeps: row.sleeps ?? 4,
        msrpRange: guessMsrp(row.type ?? ""),
        engine: row.engine,
        chassis: row.chassis,
        fuelType: row.fuelType ?? "N/A (towable)",
        recalls: 0,
        rating: row.rating ?? 3.8,
        image: typeImage(row.type ?? ""),
        towingCapacity: row.towingCapacity,
        freshWater: row.freshWater,
        grayWater: row.grayWater,
        blackWater: row.blackWater,
        generator: row.generator,
        description: row.description,
        yearStart: row.yearStart,
        yearEnd: row.yearEnd,
        horsepower: row.horsepower ?? row.horsepower2016_2026,
        transmission: row.transmission,
        fuelCapacity: row.fuelCapacityGal,
        torqueLbFt: row.torqueLbFt,
        yearsWithFloorplans: row.yearsWithFloorplans,
        powertrainByYear: row.powertrainByYear,
      };
      continue;
    }
    if (row.horsepower && !current.horsepower) current.horsepower = row.horsepower;
    if (row.torqueLbFt && !current.torqueLbFt) current.torqueLbFt = row.torqueLbFt;
    if (row.fuelCapacityGal && !current.fuelCapacity) current.fuelCapacity = row.fuelCapacityGal;
    if (row.transmission && !current.transmission) current.transmission = row.transmission;
    if (row.yearStart && !current.yearStart) current.yearStart = row.yearStart;
    if (row.yearEnd && !current.yearEnd) current.yearEnd = row.yearEnd;
    if (row.powertrainByYear?.length) current.powertrainByYear = row.powertrainByYear;
    if (row.yearsWithFloorplans?.length) current.yearsWithFloorplans = row.yearsWithFloorplans;
    if (row.engine2016_2026 && !current.engine) current.engine = row.engine2016_2026;
    if (row.horsepower2016_2026 && !current.horsepower) current.horsepower = row.horsepower2016_2026;
  }
}

applyCatalogOverlay();

export interface CatalogEntry {
  make: string;
  model: string;
  slug: string;
  spec: RVSpec;
}

export const CATALOG: CatalogEntry[] = Object.entries(RV_DATA).flatMap(([make, models]) =>
  Object.entries(models).map(([model, spec]) => ({
    make,
    model,
    slug: rvSlug(make, model),
    spec,
  })),
);

export const MAKES = Object.keys(RV_DATA).sort();
export const TOTAL_MODELS = CATALOG.length;
export const TOTAL_FLOORPLANS = CATALOG.reduce((n, e) => n + e.spec.floorplans.length, 0);

const BY_SLUG = new Map(CATALOG.map((e) => [e.slug, e]));

export function getBySlug(slug: string): CatalogEntry | undefined {
  return BY_SLUG.get(slug);
}

export function modelsForMake(make: string): string[] {
  return Object.keys(RV_DATA[make] ?? {}).sort();
}

export function inProductionYear(spec: RVSpec, year: number): boolean {
  const start = spec.yearStart ?? 2000;
  const end = spec.yearEnd ?? 2026;
  return year >= start && year <= end;
}

export function makesForYear(yearStr: string): string[] {
  const y = parseInt(yearStr, 10);
  if (Number.isNaN(y)) return MAKES;
  return MAKES.filter((mk) => Object.values(RV_DATA[mk] ?? {}).some((spec) => inProductionYear(spec, y)));
}

export function modelsForYearMake(yearStr: string, make: string): string[] {
  const y = parseInt(yearStr, 10);
  const models = RV_DATA[make];
  if (!models) return [];
  return Object.keys(models)
    .filter((mdl) => {
      const spec = models[mdl];
      if (!spec) return false;
      if (Number.isNaN(y)) return true;
      return inProductionYear(spec, y);
    })
    .sort();
}

export type EraId = "all" | "classic" | "recent" | "modern";

export const ERAS: { id: EraId; label: string; hint: string }[] = [
  { id: "all", label: "All years", hint: "2000–2026" },
  { id: "classic", label: "Classic", hint: "2000–2005" },
  { id: "recent", label: "Recent", hint: "2006–2010" },
  { id: "modern", label: "Modern", hint: "2011+" },
];

export function eraMatches(spec: RVSpec, make: string, era: EraId): boolean {
  const start = spec.yearStart ?? 2000;
  const end = spec.yearEnd ?? 2026;
  const isClassicBrand = CLASSIC_BRANDS.includes(make);
  if (era === "all") return true;
  if (era === "classic") return start <= 2005 && (isClassicBrand || end <= 2010 || start <= 2005);
  if (era === "recent") return !isClassicBrand && start <= 2010 && end >= 2006;
  return !isClassicBrand && end >= 2011;
}

export function estimateMarket(msrpMid: number, year: number) {
  const age = Math.max(0, 2026 - year);
  let value = msrpMid;
  for (let i = 0; i < age; i++) {
    value *= i === 0 ? 0.88 : 0.935;
  }
  return {
    tradeIn: Math.round(value * 0.82),
    retailLow: Math.round(value * 0.92),
    retailHigh: Math.round(value * 1.08),
    wholesaleLow: Math.round(value * 0.74),
    wholesaleHigh: Math.round(value * 0.86),
    suggestedRetail: Math.round(value * 1.02),
    depreciationPercent: Math.min(90, Math.round((1 - value / msrpMid) * 100)),
    age,
  };
}

export function powertrainForYear(spec: RVSpec, year: number) {
  const rows = spec.powertrainByYear ?? [];
  return rows.find((r) => year >= r.from && year <= r.to) ?? rows[0];
}

export const DESTINATIONS = [
  { name: "Yellowstone", q: "Yellowstone National Park, WY" },
  { name: "Grand Canyon", q: "Grand Canyon National Park, AZ" },
  { name: "Zion", q: "Zion National Park, UT" },
  { name: "Smoky Mountains", q: "Great Smoky Mountains National Park, TN" },
  { name: "Yosemite", q: "Yosemite National Park, CA" },
  { name: "Glacier", q: "Glacier National Park, MT" },
  { name: "Acadia", q: "Acadia National Park, ME" },
  { name: "Arches", q: "Arches National Park, UT" },
  { name: "Big Sur", q: "Big Sur, CA" },
  { name: "Florida Keys", q: "Key West, FL" },
  { name: "Blue Ridge", q: "Blue Ridge Parkway, NC" },
  { name: "Sedona", q: "Sedona, AZ" },
  { name: "Moab", q: "Moab, UT" },
  { name: "Lake Tahoe", q: "Lake Tahoe, CA" },
  { name: "Olympic", q: "Olympic National Park, WA" },
  { name: "Joshua Tree", q: "Joshua Tree National Park, CA" },
];
