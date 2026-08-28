// RV loan tax / registration lookup + lenders

export const TRADE_IN_TAX_CREDIT_STATES = new Set([
  "AK", "DE", "MT", "NH", "OR",
  "AZ", "CO", "ID", "NM", "NV", "UT", "WA", "WY",
  "IA", "IL", "IN", "KS", "MN", "MO", "ND", "NE", "OH", "SD", "WI",
  "AL", "AR", "FL", "GA", "LA", "MS", "NC", "OK", "SC", "TN", "TX", "WV",
  "CT", "MA", "ME", "NJ", "NY", "PA", "RI", "VT",
]);

export const ZIP_RANGE_FALLBACK: Array<{
  min: number;
  max: number;
  state: string;
  code: string;
  tax: number;
  regBase: number;
}> = [
  { min: 1, max: 27, state: "Massachusetts", code: "MA", tax: 6.25, regBase: 120 },
  { min: 28, max: 29, state: "Rhode Island", code: "RI", tax: 7.0, regBase: 120 },
  { min: 30, max: 38, state: "New Hampshire", code: "NH", tax: 0.0, regBase: 60 },
  { min: 39, max: 49, state: "Maine", code: "ME", tax: 5.5, regBase: 80 },
  { min: 50, max: 59, state: "Vermont", code: "VT", tax: 6.0, regBase: 85 },
  { min: 60, max: 69, state: "Connecticut", code: "CT", tax: 6.35, regBase: 140 },
  { min: 70, max: 89, state: "New Jersey", code: "NJ", tax: 6.625, regBase: 145 },
  { min: 100, max: 149, state: "New York", code: "NY", tax: 8.0, regBase: 175 },
  { min: 150, max: 196, state: "Pennsylvania", code: "PA", tax: 6.0, regBase: 95 },
  { min: 197, max: 199, state: "Delaware", code: "DE", tax: 0.0, regBase: 50 },
  { min: 200, max: 205, state: "District of Columbia", code: "DC", tax: 6.0, regBase: 180 },
  { min: 206, max: 219, state: "Maryland", code: "MD", tax: 6.0, regBase: 130 },
  { min: 220, max: 246, state: "Virginia", code: "VA", tax: 6.0, regBase: 95 },
  { min: 247, max: 268, state: "West Virginia", code: "WV", tax: 6.0, regBase: 70 },
  { min: 270, max: 289, state: "North Carolina", code: "NC", tax: 3.0, regBase: 35 },
  { min: 290, max: 299, state: "South Carolina", code: "SC", tax: 5.0, regBase: 60 },
  { min: 300, max: 319, state: "Georgia", code: "GA", tax: 7.0, regBase: 90 },
  { min: 320, max: 349, state: "Florida", code: "FL", tax: 6.0, regBase: 250 },
  { min: 350, max: 369, state: "Alabama", code: "AL", tax: 4.0, regBase: 60 },
  { min: 370, max: 385, state: "Tennessee", code: "TN", tax: 9.75, regBase: 80 },
  { min: 386, max: 397, state: "Mississippi", code: "MS", tax: 7.0, regBase: 60 },
  { min: 398, max: 399, state: "Georgia", code: "GA", tax: 7.0, regBase: 90 },
  { min: 400, max: 427, state: "Kentucky", code: "KY", tax: 6.0, regBase: 60 },
  { min: 430, max: 458, state: "Ohio", code: "OH", tax: 7.5, regBase: 90 },
  { min: 460, max: 479, state: "Indiana", code: "IN", tax: 7.0, regBase: 65 },
  { min: 480, max: 499, state: "Michigan", code: "MI", tax: 6.0, regBase: 100 },
  { min: 500, max: 528, state: "Iowa", code: "IA", tax: 6.0, regBase: 55 },
  { min: 530, max: 549, state: "Wisconsin", code: "WI", tax: 5.0, regBase: 110 },
  { min: 550, max: 567, state: "Minnesota", code: "MN", tax: 6.875, regBase: 85 },
  { min: 570, max: 577, state: "South Dakota", code: "SD", tax: 4.5, regBase: 45 },
  { min: 580, max: 588, state: "North Dakota", code: "ND", tax: 5.0, regBase: 40 },
  { min: 590, max: 599, state: "Montana", code: "MT", tax: 0.0, regBase: 35 },
  { min: 600, max: 629, state: "Illinois", code: "IL", tax: 6.25, regBase: 160 },
  { min: 630, max: 658, state: "Missouri", code: "MO", tax: 4.225, regBase: 50 },
  { min: 660, max: 679, state: "Kansas", code: "KS", tax: 6.5, regBase: 50 },
  { min: 680, max: 693, state: "Nebraska", code: "NE", tax: 7.0, regBase: 55 },
  { min: 700, max: 714, state: "Louisiana", code: "LA", tax: 9.45, regBase: 100 },
  { min: 716, max: 729, state: "Arkansas", code: "AR", tax: 6.5, regBase: 75 },
  { min: 730, max: 749, state: "Oklahoma", code: "OK", tax: 4.5, regBase: 55 },
  { min: 750, max: 799, state: "Texas", code: "TX", tax: 8.25, regBase: 150 },
  { min: 800, max: 816, state: "Colorado", code: "CO", tax: 2.9, regBase: 45 },
  { min: 820, max: 831, state: "Wyoming", code: "WY", tax: 4.0, regBase: 50 },
  { min: 832, max: 838, state: "Idaho", code: "ID", tax: 6.0, regBase: 45 },
  { min: 840, max: 847, state: "Utah", code: "UT", tax: 6.85, regBase: 70 },
  { min: 850, max: 865, state: "Arizona", code: "AZ", tax: 5.6, regBase: 120 },
  { min: 870, max: 884, state: "New Mexico", code: "NM", tax: 4.875, regBase: 70 },
  { min: 889, max: 898, state: "Nevada", code: "NV", tax: 8.375, regBase: 180 },
  { min: 900, max: 961, state: "California", code: "CA", tax: 7.25, regBase: 250 },
  { min: 967, max: 968, state: "Hawaii", code: "HI", tax: 4.0, regBase: 45 },
  { min: 970, max: 979, state: "Oregon", code: "OR", tax: 0.0, regBase: 75 },
  { min: 980, max: 994, state: "Washington", code: "WA", tax: 10.25, regBase: 185 },
  { min: 995, max: 999, state: "Alaska", code: "AK", tax: 0.0, regBase: 100 },
];

export interface Lender {
  name: string;
  aprLow: number;
  aprHigh: number;
  minMonths: number;
  maxMonths: number;
  minLoan: number;
  perks: string[];
  badge: string | null;
  url: string;
}

export const LENDERS: Lender[] = [
  {
    name: "LightStream by Truist",
    aprLow: 7.49,
    aprHigh: 10.49,
    minMonths: 24,
    maxMonths: 180,
    minLoan: 5000,
    perks: ["No fees", "Rate Beat Program", "Same-day funding"],
    badge: "Best Match",
    url: "https://www.lightstream.com/rv-loans",
  },
  {
    name: "Southeast Financial",
    aprLow: 7.99,
    aprHigh: 11.99,
    minMonths: 12,
    maxMonths: 180,
    minLoan: 10000,
    perks: ["RV specialist", "180-month terms", "Fast approval"],
    badge: null,
    url: "https://www.southeastfinancial.org/rv-loans",
  },
  {
    name: "Bank of America",
    aprLow: 8.24,
    aprHigh: 12.24,
    minMonths: 12,
    maxMonths: 72,
    minLoan: 10000,
    perks: ["Preferred rewards discount", "Direct deposit bonus", "No origination fee"],
    badge: null,
    url: "https://www.bankofamerica.com/auto-loans/rv-boat-loans/",
  },
  {
    name: "Alliance Credit Union",
    aprLow: 7.74,
    aprHigh: 13.49,
    minMonths: 12,
    maxMonths: 180,
    minLoan: 5000,
    perks: ["RV specialist lender", "Member-owned credit union rates", "Pre-approval in minutes"],
    badge: null,
    url: "https://www.alliancecu.com/loans/recreational-vehicles",
  },
];

export const CREDIT_TIERS = [
  { id: "580", label: "580–619", desc: "Fair", aprOffset: 3.5 },
  { id: "620", label: "620–679", desc: "Good", aprOffset: 2.0 },
  { id: "680", label: "680–719", desc: "Very Good", aprOffset: 0.75 },
  { id: "720", label: "720+", desc: "Excellent", aprOffset: 0.0 },
] as const;

import { ZIP_TO_STATE_MAP } from "./zipToStateData";
import { getStateByCode } from "./stateTaxRates";

export function lookupZip(zip: string) {
  const digits = zip.replace(/\D/g, "");
  if (digits.length < 3) return null;
  const prefix = digits.slice(0, 3).padStart(3, "0");
  const hit = ZIP_TO_STATE_MAP.find((s) => s.zipPrefixes.includes(prefix));
  if (hit) {
    const tax = getStateByCode(hit.stateCode);
    return {
      state: hit.state,
      code: hit.stateCode,
      tax: tax?.rate ?? 0,
      notes: tax?.notes,
      taxOnDifference: tax?.taxOnDifference ?? true,
      luxuryTax: tax?.luxuryTax,
    };
  }
  const num = parseInt(prefix, 10);
  if (Number.isNaN(num)) return null;
  for (const r of ZIP_RANGE_FALLBACK) {
    if (num >= r.min && num <= r.max) {
      const tax = getStateByCode(r.code);
      return {
        state: r.state,
        code: r.code,
        tax: tax?.rate ?? r.tax,
        notes: tax?.notes,
        taxOnDifference: tax?.taxOnDifference ?? TRADE_IN_TAX_CREDIT_STATES.has(r.code),
        luxuryTax: tax?.luxuryTax,
      };
    }
  }
  return null;
}

export function calcMonthlyPayment(principal: number, annualRate: number, months: number): number {
  if (principal <= 0 || months <= 0) return 0;
  if (annualRate === 0) return principal / months;
  const r = annualRate / 100 / 12;
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}
