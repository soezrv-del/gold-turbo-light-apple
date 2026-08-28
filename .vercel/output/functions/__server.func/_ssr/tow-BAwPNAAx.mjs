import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as cn, r as Route$4, s as formatLbs } from "./router-CPdh4L2m.mjs";
import { _ as modelsForMake, a as RV_DATA, f as getBySlug, i as MAKES, t as CATALOG } from "./catalog-DjbtJjNv.mjs";
import { n as Input, r as Label, t as FieldSelect } from "./input-opqfG9iy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tow-BAwPNAAx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TRUCK_DB = {
	"2025": {
		ford: {
			"F-150": { trims: [
				{
					trim: "XL / XLT — 2.7L EcoBoost (base)",
					maxTow: 8200,
					maxPayload: 1900,
					gcwr: 14400,
					curb: 4720,
					engine: "2.7L EcoBoost V6",
					hitch: "Class IV"
				},
				{
					trim: "XL / XLT — 3.5L EcoBoost",
					maxTow: 11300,
					maxPayload: 2120,
					gcwr: 17700,
					curb: 4820,
					engine: "3.5L EcoBoost V6",
					hitch: "Class IV"
				},
				{
					trim: "Lariat / King Ranch — 3.5L EcoBoost",
					maxTow: 12100,
					maxPayload: 2200,
					gcwr: 19e3,
					curb: 4920,
					engine: "3.5L EcoBoost V6",
					hitch: "Class IV"
				},
				{
					trim: "Platinum / Limited — 3.5L EcoBoost Max Tow",
					maxTow: 13e3,
					maxPayload: 2455,
					gcwr: 2e4,
					curb: 4960,
					engine: "3.5L EcoBoost V6 (Max Tow Pkg)",
					hitch: "Class IV",
					notes: "Requires Max Tow Package"
				},
				{
					trim: "Lightning EV Standard Range",
					maxTow: 7700,
					maxPayload: 1800,
					gcwr: 14400,
					curb: 6015,
					engine: "Dual Motor Electric",
					hitch: "Class III"
				},
				{
					trim: "Lightning EV Extended Range",
					maxTow: 1e4,
					maxPayload: 2235,
					gcwr: 18400,
					curb: 6270,
					engine: "Dual Motor Electric (Ext.)",
					hitch: "Class IV"
				}
			] },
			"F-250 Super Duty": { trims: [
				{
					trim: "XL / XLT — 6.2L V8 Gas",
					maxTow: 15e3,
					maxPayload: 3540,
					gcwr: 24200,
					curb: 7260,
					engine: "6.2L V8 Gas",
					hitch: "Class V"
				},
				{
					trim: "XL / XLT — 6.7L Power Stroke Diesel",
					maxTow: 2e4,
					maxPayload: 4260,
					gcwr: 33e3,
					curb: 7570,
					engine: "6.7L Power Stroke Diesel",
					hitch: "Class V"
				},
				{
					trim: "Platinum / Tremor — 6.7L Power Stroke Diesel",
					maxTow: 2e4,
					maxPayload: 3930,
					gcwr: 33e3,
					curb: 7770,
					engine: "6.7L Power Stroke Diesel",
					hitch: "Class V"
				}
			] },
			"F-350 Super Duty": { trims: [{
				trim: "XL / XLT — 6.7L Diesel (SRW)",
				maxTow: 32500,
				maxPayload: 5690,
				gcwr: 43500,
				curb: 8510,
				engine: "6.7L Power Stroke Diesel",
				hitch: "Class V"
			}, {
				trim: "XL / XLT — 6.7L Diesel (DRW)",
				maxTow: 4e4,
				maxPayload: 7850,
				gcwr: 52e3,
				curb: 8920,
				engine: "6.7L Power Stroke Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel — max conventional tow"
			}] },
			"Expedition": { trims: [{
				trim: "XL / XLT — 3.5L EcoBoost V6",
				maxTow: 9300,
				maxPayload: 1630,
				gcwr: 15500,
				curb: 5639,
				engine: "3.5L EcoBoost V6 (375 HP)",
				hitch: "Class IV",
				notes: "Requires Max Trailer Tow Package"
			}, {
				trim: "Expedition MAX — 3.5L EcoBoost V6 (Long WB)",
				maxTow: 9300,
				maxPayload: 1750,
				gcwr: 15500,
				curb: 5803,
				engine: "3.5L EcoBoost V6",
				hitch: "Class IV",
				notes: "Longer wheelbase; same 9,300 lb tow rating"
			}] },
			"Ranger": { trims: [{
				trim: "XL / XLT — 2.3L EcoBoost",
				maxTow: 7500,
				maxPayload: 1625,
				gcwr: 13e3,
				curb: 4520,
				engine: "2.3L EcoBoost I4",
				hitch: "Class III"
			}] }
		},
		ram: {
			"1500": { trims: [
				{
					trim: "Big Horn / Laramie — 5.7L HEMI V8",
					maxTow: 10640,
					maxPayload: 2110,
					gcwr: 17500,
					curb: 5110,
					engine: "5.7L HEMI V8",
					hitch: "Class IV"
				},
				{
					trim: "Limited — 5.7L HEMI Max Tow",
					maxTow: 12750,
					maxPayload: 2300,
					gcwr: 19500,
					curb: 5310,
					engine: "5.7L HEMI V8 (Max Tow)",
					hitch: "Class IV",
					notes: "Requires Max Tow Package"
				},
				{
					trim: "3.0L EcoDiesel V6",
					maxTow: 12560,
					maxPayload: 2030,
					gcwr: 19300,
					curb: 5360,
					engine: "3.0L EcoDiesel V6",
					hitch: "Class IV"
				}
			] },
			"2500": { trims: [{
				trim: "Tradesman — 6.7L Cummins Diesel",
				maxTow: 2e4,
				maxPayload: 3990,
				gcwr: 3e4,
				curb: 7350,
				engine: "6.7L Cummins HO Diesel I6",
				hitch: "Class V"
			}] },
			"3500": { trims: [{
				trim: "Tradesman — 6.7L Cummins Diesel (DRW)",
				maxTow: 37100,
				maxPayload: 7680,
				gcwr: 49e3,
				curb: 8010,
				engine: "6.7L Cummins HO Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel — max conventional rating"
			}] },
			"Durango": { trims: [{
				trim: "SXT / GT — 3.6L Pentastar V6",
				maxTow: 6200,
				maxPayload: 1400,
				gcwr: 11800,
				curb: 4820,
				engine: "3.6L Pentastar V6 (293 HP)",
				hitch: "Class III"
			}, {
				trim: "Citadel / R/T — 5.7L HEMI V8",
				maxTow: 8700,
				maxPayload: 1550,
				gcwr: 15200,
				curb: 5030,
				engine: "5.7L HEMI V8 (360 HP)",
				hitch: "Class IV",
				notes: "Requires Trailer Tow Group IV"
			}] }
		},
		chevrolet: {
			"Silverado 1500": { trims: [
				{
					trim: "Work Truck / Custom — 2.7L Turbo",
					maxTow: 7200,
					maxPayload: 1870,
					gcwr: 13600,
					curb: 4530,
					engine: "2.7L Turbo I4",
					hitch: "Class III"
				},
				{
					trim: "LT / RST — 5.3L V8",
					maxTow: 9300,
					maxPayload: 1980,
					gcwr: 16500,
					curb: 4710,
					engine: "5.3L EcoTec3 V8",
					hitch: "Class IV"
				},
				{
					trim: "High Country — 6.2L V8 Max Trailering",
					maxTow: 13300,
					maxPayload: 2280,
					gcwr: 20800,
					curb: 4810,
					engine: "6.2L EcoTec3 V8 (Max Trailering)",
					hitch: "Class IV",
					notes: "Requires Max Trailering Package"
				}
			] },
			"Silverado 2500HD": { trims: [{
				trim: "Work Truck — 6.6L Duramax Diesel",
				maxTow: 18500,
				maxPayload: 3979,
				gcwr: 28e3,
				curb: 7210,
				engine: "6.6L Duramax Diesel",
				hitch: "Class V"
			}] },
			"Silverado 3500HD": { trims: [{
				trim: "Work Truck — 6.6L Duramax (DRW)",
				maxTow: 36e3,
				maxPayload: 7442,
				gcwr: 46500,
				curb: 8510,
				engine: "6.6L Duramax Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel — max conventional rating"
			}] },
			"Suburban": { trims: [{
				trim: "LS / LT — 5.3L EcoTec3 V8",
				maxTow: 8300,
				maxPayload: 1600,
				gcwr: 15200,
				curb: 5866,
				engine: "5.3L EcoTec3 V8 (355 HP)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}, {
				trim: "High Country — 6.2L V8",
				maxTow: 8300,
				maxPayload: 1450,
				gcwr: 15200,
				curb: 6100,
				engine: "6.2L EcoTec3 V8 (420 HP)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}] }
		},
		gmc: {
			"Sierra 1500": { trims: [{
				trim: "SLE / Elevation — 5.3L V8",
				maxTow: 10800,
				maxPayload: 2100,
				gcwr: 18e3,
				curb: 4760,
				engine: "5.3L EcoTec3 V8",
				hitch: "Class IV"
			}, {
				trim: "Denali / AT4X — 6.2L V8 Max Trailering",
				maxTow: 13200,
				maxPayload: 2240,
				gcwr: 20400,
				curb: 4910,
				engine: "6.2L EcoTec3 V8 (Max Trailering)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}] },
			"Sierra 2500HD": { trims: [{
				trim: "SLE / AT4 — 6.6L Duramax Diesel",
				maxTow: 18500,
				maxPayload: 3879,
				gcwr: 28e3,
				curb: 7260,
				engine: "6.6L Duramax Diesel",
				hitch: "Class V"
			}] },
			"Sierra 3500HD": { trims: [{
				trim: "Denali — 6.6L Duramax (DRW)",
				maxTow: 36e3,
				maxPayload: 7150,
				gcwr: 46500,
				curb: 8660,
				engine: "6.6L Duramax Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel — max conventional rating"
			}] },
			"Yukon XL": { trims: [{
				trim: "SLE / SLT — 5.3L EcoTec3 V8",
				maxTow: 8500,
				maxPayload: 1630,
				gcwr: 15700,
				curb: 5836,
				engine: "5.3L EcoTec3 V8 (355 HP)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}, {
				trim: "Denali Ultimate — 6.2L V8",
				maxTow: 8500,
				maxPayload: 1480,
				gcwr: 15700,
				curb: 6060,
				engine: "6.2L EcoTec3 V8 (420 HP)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}] }
		},
		toyota: {
			"Tundra": { trims: [{
				trim: "SR5 — 3.4L Twin-Turbo V6",
				maxTow: 8e3,
				maxPayload: 1940,
				gcwr: 15600,
				curb: 5540,
				engine: "3.4L Twin-Turbo V6 (389 HP)",
				hitch: "Class IV"
			}, {
				trim: "Platinum Hybrid — 3.4L TT-V6 Hybrid",
				maxTow: 12e3,
				maxPayload: 1640,
				gcwr: 18600,
				curb: 6070,
				engine: "3.4L TT-V6 Hybrid (437 HP)",
				hitch: "Class IV",
				notes: "Requires Tow Technology Package"
			}] },
			"Sequoia": { trims: [{
				trim: "SR5 / Limited — 3.4L TT-V6 Hybrid",
				maxTow: 9e3,
				maxPayload: 1620,
				gcwr: 16200,
				curb: 5990,
				engine: "3.4L TT-V6 Hybrid (437 HP)",
				hitch: "Class IV"
			}] },
			"4Runner": { trims: [{
				trim: "SR5 / TRD Sport — 2.4L Turbo I4 (all-new)",
				maxTow: 6e3,
				maxPayload: 1350,
				gcwr: 11500,
				curb: 4715,
				engine: "2.4L Turbo I4 (278 HP)",
				hitch: "Class III",
				notes: "All-new 2025 4Runner"
			}, {
				trim: "TRD Pro — 2.4L Turbo Hybrid",
				maxTow: 5e3,
				maxPayload: 1050,
				gcwr: 11e3,
				curb: 5100,
				engine: "2.4L Turbo Hybrid I4 (326 HP)",
				hitch: "Class III"
			}] },
			"Tacoma": { trims: [{
				trim: "SR / SR5 — 2.4L Turbo I4",
				maxTow: 6500,
				maxPayload: 1440,
				gcwr: 11e3,
				curb: 4490,
				engine: "2.4L Turbo I4 (278 HP)",
				hitch: "Class III"
			}] }
		},
		nissan: { "Titan": { trims: [{
			trim: "PRO-4X / Platinum (w/ Tow Pkg)",
			maxTow: 11040,
			maxPayload: 1810,
			gcwr: 18500,
			curb: 5790,
			engine: "5.6L Endurance V8 (Tow Pkg)",
			hitch: "Class IV",
			notes: "Requires Tow Package"
		}] } },
		jeep: {
			"Gladiator": { trims: [{
				trim: "Sport / Overland — 3.6L V6",
				maxTow: 7650,
				maxPayload: 1650,
				gcwr: 13500,
				curb: 4660,
				engine: "3.6L Pentastar V6",
				hitch: "Class III"
			}, {
				trim: "Rubicon — 3.6L V6",
				maxTow: 7e3,
				maxPayload: 1450,
				gcwr: 13e3,
				curb: 4860,
				engine: "3.6L Pentastar V6",
				hitch: "Class III",
				notes: "Off-road hardware reduces tow rating"
			}] },
			"Wagoneer": { trims: [{
				trim: "Series II / III — 3.0L Hurricane TT I6",
				maxTow: 1e4,
				maxPayload: 1600,
				gcwr: 17500,
				curb: 5750,
				engine: "3.0L Hurricane I6 TT (420 HP)",
				hitch: "Class IV",
				notes: "Requires Trailer Tow Group IV Package"
			}] }
		}
	},
	"2024": {
		ford: {
			"F-150": { trims: [
				{
					trim: "XL / XLT — 2.7L EcoBoost (base)",
					maxTow: 8200,
					maxPayload: 1880,
					gcwr: 14400,
					curb: 4705,
					engine: "2.7L EcoBoost V6",
					hitch: "Class IV"
				},
				{
					trim: "XL / XLT — 3.5L EcoBoost",
					maxTow: 11100,
					maxPayload: 2100,
					gcwr: 17600,
					curb: 4800,
					engine: "3.5L EcoBoost V6",
					hitch: "Class IV"
				},
				{
					trim: "Lariat / King Ranch — 3.5L EcoBoost",
					maxTow: 12e3,
					maxPayload: 2200,
					gcwr: 19e3,
					curb: 4900,
					engine: "3.5L EcoBoost V6",
					hitch: "Class IV"
				},
				{
					trim: "Platinum / Limited — 3.5L EcoBoost Max Tow",
					maxTow: 13e3,
					maxPayload: 2455,
					gcwr: 2e4,
					curb: 4950,
					engine: "3.5L EcoBoost V6 (Max Tow Pkg)",
					hitch: "Class IV",
					notes: "Requires Max Tow Package"
				},
				{
					trim: "Raptor — 3.5L EcoBoost High Output",
					maxTow: 8200,
					maxPayload: 1400,
					gcwr: 14600,
					curb: 5697,
					engine: "3.5L EcoBoost V6 HO",
					hitch: "Class III",
					notes: "Off-road suspension limits tow rating"
				},
				{
					trim: "Lightning EV (Standard Range)",
					maxTow: 7700,
					maxPayload: 1800,
					gcwr: 14400,
					curb: 6015,
					engine: "Dual Motor Electric",
					hitch: "Class III"
				},
				{
					trim: "Lightning EV (Extended Range)",
					maxTow: 1e4,
					maxPayload: 2235,
					gcwr: 18400,
					curb: 6270,
					engine: "Dual Motor Electric (Ext.)",
					hitch: "Class IV"
				}
			] },
			"F-250 Super Duty": { trims: [
				{
					trim: "XL / XLT — 6.2L V8 Gas",
					maxTow: 15e3,
					maxPayload: 3540,
					gcwr: 24200,
					curb: 7250,
					engine: "6.2L V8 Gas",
					hitch: "Class V"
				},
				{
					trim: "XL / XLT — 6.7L Power Stroke Diesel",
					maxTow: 2e4,
					maxPayload: 4260,
					gcwr: 33e3,
					curb: 7550,
					engine: "6.7L Power Stroke V8 Diesel",
					hitch: "Class V"
				},
				{
					trim: "Platinum / Tremor — 6.7L Power Stroke Diesel",
					maxTow: 2e4,
					maxPayload: 3930,
					gcwr: 33e3,
					curb: 7750,
					engine: "6.7L Power Stroke V8 Diesel",
					hitch: "Class V"
				}
			] },
			"F-350 Super Duty": { trims: [{
				trim: "XL / XLT — 6.7L Diesel (SRW)",
				maxTow: 32500,
				maxPayload: 5690,
				gcwr: 43500,
				curb: 8500,
				engine: "6.7L Power Stroke Diesel",
				hitch: "Class V"
			}, {
				trim: "XL / XLT — 6.7L Diesel (DRW)",
				maxTow: 4e4,
				maxPayload: 7850,
				gcwr: 52e3,
				curb: 8900,
				engine: "6.7L Power Stroke Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel — max conventional tow"
			}] },
			"Ranger": { trims: [{
				trim: "XL / XLT — 2.3L EcoBoost",
				maxTow: 7500,
				maxPayload: 1625,
				gcwr: 13e3,
				curb: 4508,
				engine: "2.3L EcoBoost I4",
				hitch: "Class III"
			}] },
			"Maverick": { trims: [{
				trim: "XL / XLT — 2.5L Hybrid",
				maxTow: 2e3,
				maxPayload: 1500,
				gcwr: 7200,
				curb: 3674,
				engine: "2.5L FHEV Hybrid",
				hitch: "Class II"
			}, {
				trim: "Lariat / Tremor — 2.0L EcoBoost",
				maxTow: 4e3,
				maxPayload: 1500,
				gcwr: 9e3,
				curb: 3756,
				engine: "2.0L EcoBoost I4",
				hitch: "Class III"
			}] }
		},
		ram: {
			"1500": { trims: [
				{
					trim: "Tradesman / Big Horn — 3.6L Pentastar V6",
					maxTow: 7630,
					maxPayload: 1800,
					gcwr: 13900,
					curb: 4933,
					engine: "3.6L Pentastar V6",
					hitch: "Class IV"
				},
				{
					trim: "Big Horn / Laramie — 5.7L HEMI V8",
					maxTow: 10640,
					maxPayload: 2110,
					gcwr: 17500,
					curb: 5100,
					engine: "5.7L HEMI V8",
					hitch: "Class IV"
				},
				{
					trim: "Limited / TRX — 5.7L HEMI Max Tow",
					maxTow: 12750,
					maxPayload: 2300,
					gcwr: 19500,
					curb: 5300,
					engine: "5.7L HEMI V8 (Max Tow Pkg)",
					hitch: "Class IV",
					notes: "Requires Max Tow Package"
				},
				{
					trim: "1500 eTorque Hybrid — 3.0L EcoDiesel",
					maxTow: 12560,
					maxPayload: 2030,
					gcwr: 19300,
					curb: 5350,
					engine: "3.0L EcoDiesel V6",
					hitch: "Class IV"
				}
			] },
			"2500": { trims: [
				{
					trim: "Tradesman / Big Horn — 6.4L HEMI Gas",
					maxTow: 16320,
					maxPayload: 3510,
					gcwr: 26e3,
					curb: 7200,
					engine: "6.4L HEMI V8 Gas",
					hitch: "Class V"
				},
				{
					trim: "Tradesman — 6.7L Cummins Diesel",
					maxTow: 2e4,
					maxPayload: 3990,
					gcwr: 3e4,
					curb: 7340,
					engine: "6.7L Cummins HO Turbo Diesel I6",
					hitch: "Class V"
				},
				{
					trim: "Laramie / Longhorn — 6.7L Cummins Diesel",
					maxTow: 2e4,
					maxPayload: 3760,
					gcwr: 3e4,
					curb: 7500,
					engine: "6.7L Cummins HO Turbo Diesel I6",
					hitch: "Class V"
				}
			] },
			"3500": { trims: [{
				trim: "Tradesman — 6.7L Cummins Diesel (SRW)",
				maxTow: 31210,
				maxPayload: 5460,
				gcwr: 41e3,
				curb: 7950,
				engine: "6.7L Cummins HO Diesel (SRW)",
				hitch: "Class V"
			}, {
				trim: "Tradesman — 6.7L Cummins Diesel (DRW)",
				maxTow: 37100,
				maxPayload: 7680,
				gcwr: 49e3,
				curb: 8e3,
				engine: "6.7L Cummins HO Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel — maximum conventional rating"
			}] }
		},
		chevrolet: {
			"Silverado 1500": { trims: [
				{
					trim: "Work Truck / Custom — 2.7L Turbo (4-cyl)",
					maxTow: 7200,
					maxPayload: 1870,
					gcwr: 13600,
					curb: 4520,
					engine: "2.7L Turbo I4",
					hitch: "Class III"
				},
				{
					trim: "LT / RST — 5.3L V8 (no trailering pkg)",
					maxTow: 9300,
					maxPayload: 1980,
					gcwr: 16500,
					curb: 4700,
					engine: "5.3L EcoTec3 V8",
					hitch: "Class IV"
				},
				{
					trim: "High Country / ZR2 — 6.2L V8 Max Tow",
					maxTow: 13300,
					maxPayload: 2280,
					gcwr: 20800,
					curb: 4800,
					engine: "6.2L EcoTec3 V8 (Max Trailering Pkg)",
					hitch: "Class IV",
					notes: "Requires Max Trailering Package"
				}
			] },
			"Silverado 2500HD": { trims: [{
				trim: "Work Truck — 6.6L V8 Gas",
				maxTow: 14500,
				maxPayload: 3534,
				gcwr: 24e3,
				curb: 6950,
				engine: "6.6L V8 Gas",
				hitch: "Class V"
			}, {
				trim: "Work Truck — 6.6L Duramax Diesel",
				maxTow: 18500,
				maxPayload: 3979,
				gcwr: 28e3,
				curb: 7200,
				engine: "6.6L Duramax V8 Diesel",
				hitch: "Class V"
			}] },
			"Silverado 3500HD": { trims: [{
				trim: "Work Truck — 6.6L Duramax Diesel (SRW)",
				maxTow: 27500,
				maxPayload: 5673,
				gcwr: 37500,
				curb: 8100,
				engine: "6.6L Duramax V8 Diesel (SRW)",
				hitch: "Class V"
			}, {
				trim: "Work Truck — 6.6L Duramax Diesel (DRW)",
				maxTow: 36e3,
				maxPayload: 7442,
				gcwr: 46500,
				curb: 8500,
				engine: "6.6L Duramax V8 Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel — max conventional rating"
			}] },
			"Colorado": { trims: [{
				trim: "Work Truck / LT — 2.7L Turbo L4 (base)",
				maxTow: 7700,
				maxPayload: 1640,
				gcwr: 13e3,
				curb: 4540,
				engine: "2.7L Turbo I4 (237 HP)",
				hitch: "Class III"
			}, {
				trim: "ZR2 / Bison — 2.7L Turbo High Output",
				maxTow: 7700,
				maxPayload: 1400,
				gcwr: 13e3,
				curb: 5e3,
				engine: "2.7L Turbo HO I4 (430 HP)",
				hitch: "Class III",
				notes: "Lifted suspension limits tow stability"
			}] },
			"Suburban": { trims: [{
				trim: "LS / LT — 5.3L EcoTec3 V8",
				maxTow: 8300,
				maxPayload: 1600,
				gcwr: 15200,
				curb: 5857,
				engine: "5.3L EcoTec3 V8 (355 HP)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package for 8,300 lb rating"
			}, {
				trim: "High Country — 6.2L V8",
				maxTow: 8300,
				maxPayload: 1450,
				gcwr: 15200,
				curb: 6090,
				engine: "6.2L EcoTec3 V8 (420 HP)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}] }
		},
		gmc: {
			"Sierra 1500": { trims: [{
				trim: "SLE / Elevation — 5.3L V8",
				maxTow: 10800,
				maxPayload: 2100,
				gcwr: 18e3,
				curb: 4750,
				engine: "5.3L EcoTec3 V8",
				hitch: "Class IV"
			}, {
				trim: "Denali / AT4X — 6.2L V8 Max Tow",
				maxTow: 13200,
				maxPayload: 2240,
				gcwr: 20400,
				curb: 4900,
				engine: "6.2L EcoTec3 V8 (Max Trailering Pkg)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}] },
			"Sierra 2500HD": { trims: [{
				trim: "SLE / Elevation — 6.6L Duramax Diesel",
				maxTow: 18500,
				maxPayload: 3879,
				gcwr: 28e3,
				curb: 7250,
				engine: "6.6L Duramax V8 Diesel",
				hitch: "Class V"
			}, {
				trim: "Denali Ultimate — 6.6L Duramax Diesel",
				maxTow: 18500,
				maxPayload: 3700,
				gcwr: 28e3,
				curb: 7400,
				engine: "6.6L Duramax V8 Diesel",
				hitch: "Class V"
			}] },
			"Sierra 3500HD": { trims: [{
				trim: "Regular Cab — 6.6L Duramax Diesel (SRW)",
				maxTow: 27500,
				maxPayload: 5673,
				gcwr: 37500,
				curb: 8100,
				engine: "6.6L Duramax V8 Diesel (SRW)",
				hitch: "Class V"
			}, {
				trim: "Denali — 6.6L Duramax (DRW)",
				maxTow: 36e3,
				maxPayload: 7150,
				gcwr: 46500,
				curb: 8650,
				engine: "6.6L Duramax V8 Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel — max conventional rating"
			}] },
			"Yukon XL": { trims: [{
				trim: "SLE / SLT — 5.3L EcoTec3 V8",
				maxTow: 8500,
				maxPayload: 1630,
				gcwr: 15700,
				curb: 5827,
				engine: "5.3L EcoTec3 V8 (355 HP)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}, {
				trim: "Denali Ultimate — 6.2L V8",
				maxTow: 8500,
				maxPayload: 1480,
				gcwr: 15700,
				curb: 6050,
				engine: "6.2L EcoTec3 V8 (420 HP)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}] }
		},
		toyota: {
			"Tundra": { trims: [
				{
					trim: "SR / SR5 — 3.4L Twin-Turbo V6",
					maxTow: 8e3,
					maxPayload: 1940,
					gcwr: 15600,
					curb: 5530,
					engine: "3.4L Twin-Turbo V6 (389 HP)",
					hitch: "Class IV"
				},
				{
					trim: "Limited / TRD Pro — 3.4L Twin-Turbo V6",
					maxTow: 11e3,
					maxPayload: 1810,
					gcwr: 17600,
					curb: 5680,
					engine: "3.4L Twin-Turbo V6 (389 HP)",
					hitch: "Class IV",
					notes: "Requires tow package and 3.31 rear axle"
				},
				{
					trim: "Platinum Hybrid — 3.4L TT-V6 + Electric",
					maxTow: 12e3,
					maxPayload: 1640,
					gcwr: 18600,
					curb: 6060,
					engine: "3.4L Twin-Turbo V6 Hybrid (MAX Tow)",
					hitch: "Class IV",
					notes: "Requires Tow Technology Package"
				}
			] },
			"Tacoma": { trims: [{
				trim: "SR / SR5 — 2.4L Turbo I4",
				maxTow: 6500,
				maxPayload: 1440,
				gcwr: 11e3,
				curb: 4480,
				engine: "2.4L Turbo I4 (278 HP)",
				hitch: "Class III"
			}, {
				trim: "Trailhunter / TRD Pro — 2.4L Turbo",
				maxTow: 6e3,
				maxPayload: 1150,
				gcwr: 11e3,
				curb: 4960,
				engine: "2.4L Turbo I4",
				hitch: "Class III",
				notes: "Heavier off-road equipment reduces ratings"
			}] },
			"4Runner": { trims: [{
				trim: "SR5 / TRD Sport — 4.0L V6",
				maxTow: 5e3,
				maxPayload: 1545,
				gcwr: 9300,
				curb: 4695,
				engine: "4.0L V6 (270 HP)",
				hitch: "Class III"
			}, {
				trim: "TRD Pro / Trailhunter — 4.0L V6",
				maxTow: 4400,
				maxPayload: 1150,
				gcwr: 9300,
				curb: 5090,
				engine: "4.0L V6",
				hitch: "Class III",
				notes: "Off-road equipment adds weight"
			}] },
			"Land Cruiser": { trims: [{
				trim: "Standard — 2.4L Twin-Turbo Hybrid",
				maxTow: 6e3,
				maxPayload: 1100,
				gcwr: 11600,
				curb: 5500,
				engine: "2.4L TT-I4 Hybrid (326 HP)",
				hitch: "Class III",
				notes: "All-new Land Cruiser; reintroduced for 2024"
			}] },
			"Sequoia": { trims: [{
				trim: "SR5 / Limited — 3.4L TT-V6 Hybrid",
				maxTow: 9e3,
				maxPayload: 1620,
				gcwr: 16200,
				curb: 5985,
				engine: "3.4L Twin-Turbo V6 Hybrid (437 HP)",
				hitch: "Class IV"
			}] }
		},
		nissan: {
			"Titan": { trims: [{
				trim: "S / SV — 5.6L Endurance V8",
				maxTow: 9210,
				maxPayload: 1890,
				gcwr: 16700,
				curb: 5683,
				engine: "5.6L Endurance V8 (400 HP)",
				hitch: "Class IV"
			}, {
				trim: "SL / PRO-4X — 5.6L V8 (w/ Tow Pkg)",
				maxTow: 11040,
				maxPayload: 1810,
				gcwr: 18500,
				curb: 5783,
				engine: "5.6L Endurance V8 (w/ Tow Package)",
				hitch: "Class IV",
				notes: "Requires Tow Package"
			}] },
			"Frontier": { trims: [{
				trim: "S / SV — 3.8L V6",
				maxTow: 6720,
				maxPayload: 1590,
				gcwr: 11e3,
				curb: 4508,
				engine: "3.8L DOHC V6 (310 HP)",
				hitch: "Class III"
			}] }
		},
		jeep: {
			"Gladiator": { trims: [{
				trim: "Sport / Sport S — 3.6L Pentastar V6",
				maxTow: 7650,
				maxPayload: 1650,
				gcwr: 13500,
				curb: 4650,
				engine: "3.6L Pentastar V6 (285 HP)",
				hitch: "Class III"
			}, {
				trim: "Rubicon / Mojave — 3.6L V6",
				maxTow: 7e3,
				maxPayload: 1450,
				gcwr: 13e3,
				curb: 4850,
				engine: "3.6L Pentastar V6",
				hitch: "Class III",
				notes: "Off-road hardware reduces tow rating"
			}] },
			"Wagoneer": { trims: [{
				trim: "Grand Wagoneer — 3.0L Hurricane TT",
				maxTow: 1e4,
				maxPayload: 1480,
				gcwr: 17500,
				curb: 5970,
				engine: "3.0L Hurricane I6 TT",
				hitch: "Class IV"
			}] },
			"Grand Cherokee": { trims: [{
				trim: "Laredo / Altitude — 3.6L Pentastar V6",
				maxTow: 6200,
				maxPayload: 1200,
				gcwr: 11600,
				curb: 5079,
				engine: "3.6L Pentastar V6",
				hitch: "Class III"
			}, {
				trim: "Limited / Overland — 5.7L HEMI V8",
				maxTow: 7200,
				maxPayload: 1400,
				gcwr: 13400,
				curb: 5079,
				engine: "5.7L HEMI V8",
				hitch: "Class III"
			}] }
		}
	},
	"2023": {
		ford: {
			"F-150": { trims: [{
				trim: "XL / XLT — 2.7L EcoBoost",
				maxTow: 8200,
				maxPayload: 1880,
				gcwr: 14400,
				curb: 4705,
				engine: "2.7L EcoBoost V6",
				hitch: "Class IV"
			}, {
				trim: "Platinum / Limited — 3.5L EcoBoost Max Tow",
				maxTow: 13e3,
				maxPayload: 2455,
				gcwr: 2e4,
				curb: 4950,
				engine: "3.5L EcoBoost V6 (Max Tow)",
				hitch: "Class IV",
				notes: "Requires Max Tow Package"
			}] },
			"F-250 Super Duty": { trims: [{
				trim: "XL / XLT — 6.7L Power Stroke Diesel",
				maxTow: 2e4,
				maxPayload: 4260,
				gcwr: 33e3,
				curb: 7550,
				engine: "6.7L Power Stroke Diesel",
				hitch: "Class V"
			}] },
			"F-350 Super Duty": { trims: [{
				trim: "XL — 6.7L Diesel (DRW)",
				maxTow: 37e3,
				maxPayload: 7850,
				gcwr: 52e3,
				curb: 8500,
				engine: "6.7L Power Stroke Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel"
			}] }
		},
		ram: {
			"1500": { trims: [{
				trim: "Limited / TRX — 5.7L HEMI Max Tow",
				maxTow: 12750,
				maxPayload: 2300,
				gcwr: 19500,
				curb: 5300,
				engine: "5.7L HEMI V8 (Max Tow)",
				hitch: "Class IV",
				notes: "Requires Max Tow Package"
			}] },
			"2500": { trims: [{
				trim: "Tradesman — 6.7L Cummins Diesel",
				maxTow: 2e4,
				maxPayload: 3990,
				gcwr: 3e4,
				curb: 7340,
				engine: "6.7L Cummins HO Diesel",
				hitch: "Class V"
			}] },
			"3500": { trims: [{
				trim: "Tradesman — 6.7L Cummins Diesel (DRW)",
				maxTow: 37100,
				maxPayload: 7680,
				gcwr: 49e3,
				curb: 8e3,
				engine: "6.7L Cummins Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel"
			}] }
		},
		chevrolet: {
			"Silverado 1500": { trims: [{
				trim: "High Country — 6.2L V8 Max Trailering",
				maxTow: 13300,
				maxPayload: 2280,
				gcwr: 20800,
				curb: 4800,
				engine: "6.2L EcoTec3 V8 (Max Trailering)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}] },
			"Silverado 2500HD": { trims: [{
				trim: "Work Truck — 6.6L Duramax Diesel",
				maxTow: 18500,
				maxPayload: 3979,
				gcwr: 28e3,
				curb: 7e3,
				engine: "6.6L Duramax Diesel",
				hitch: "Class V"
			}] },
			"Silverado 3500HD": { trims: [{
				trim: "Work Truck — 6.6L Duramax (DRW)",
				maxTow: 35500,
				maxPayload: 7442,
				gcwr: 46500,
				curb: 8e3,
				engine: "6.6L Duramax Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel"
			}] }
		},
		gmc: {
			"Sierra 1500": { trims: [{
				trim: "Denali — 6.2L V8 Max Trailering",
				maxTow: 13200,
				maxPayload: 2240,
				gcwr: 20400,
				curb: 4900,
				engine: "6.2L EcoTec3 V8 (Max Trailering)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}] },
			"Sierra 2500HD": { trims: [{
				trim: "Denali — 6.6L Duramax Diesel",
				maxTow: 18500,
				maxPayload: 3650,
				gcwr: 28e3,
				curb: 7400,
				engine: "6.6L Duramax Diesel",
				hitch: "Class V"
			}] },
			"Sierra 3500HD": { trims: [{
				trim: "Regular Cab — 6.6L Duramax (DRW)",
				maxTow: 36e3,
				maxPayload: 7442,
				gcwr: 46500,
				curb: 8e3,
				engine: "6.6L Duramax Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel"
			}] }
		},
		toyota: {
			"Tundra": { trims: [{
				trim: "Platinum Hybrid — 3.4L TT-V6 Hybrid",
				maxTow: 12e3,
				maxPayload: 1640,
				gcwr: 18600,
				curb: 6060,
				engine: "3.4L Twin-Turbo V6 Hybrid",
				hitch: "Class IV",
				notes: "Requires Tow Technology Package"
			}] },
			"Tacoma": { trims: [{
				trim: "SR / SR5 — 3.5L V6",
				maxTow: 6800,
				maxPayload: 1440,
				gcwr: 11200,
				curb: 4480,
				engine: "3.5L V6",
				hitch: "Class III"
			}] }
		},
		nissan: { "Titan": { trims: [{
			trim: "PRO-4X (w/ Tow Pkg) — 5.6L V8",
			maxTow: 11040,
			maxPayload: 1810,
			gcwr: 18500,
			curb: 5783,
			engine: "5.6L Endurance V8 (Tow Package)",
			hitch: "Class IV"
		}] } },
		jeep: { "Gladiator": { trims: [{
			trim: "Sport / Overland — 3.6L V6",
			maxTow: 7650,
			maxPayload: 1650,
			gcwr: 13500,
			curb: 4650,
			engine: "3.6L Pentastar V6",
			hitch: "Class III"
		}] } }
	},
	"2022": {
		ford: {
			"F-150": { trims: [{
				trim: "XL / XLT — 2.7L EcoBoost",
				maxTow: 8e3,
				maxPayload: 1880,
				gcwr: 14e3,
				curb: 4705,
				engine: "2.7L EcoBoost V6",
				hitch: "Class IV"
			}, {
				trim: "Lariat / Platinum — 3.5L EcoBoost Max Tow",
				maxTow: 13e3,
				maxPayload: 2455,
				gcwr: 2e4,
				curb: 4950,
				engine: "3.5L EcoBoost V6 (Max Tow)",
				hitch: "Class IV",
				notes: "Requires Max Tow Package"
			}] },
			"F-250 Super Duty": { trims: [{
				trim: "XL — 6.7L Power Stroke Diesel",
				maxTow: 2e4,
				maxPayload: 4260,
				gcwr: 33e3,
				curb: 7350,
				engine: "6.7L Power Stroke Diesel",
				hitch: "Class V"
			}] },
			"F-350 Super Duty": { trims: [{
				trim: "XL (DRW) — 6.7L Diesel",
				maxTow: 37e3,
				maxPayload: 7850,
				gcwr: 52e3,
				curb: 8500,
				engine: "6.7L Power Stroke Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel"
			}] }
		},
		ram: {
			"1500": { trims: [{
				trim: "Limited — 5.7L HEMI Max Tow",
				maxTow: 12750,
				maxPayload: 2300,
				gcwr: 19500,
				curb: 5300,
				engine: "5.7L HEMI V8 (Max Tow)",
				hitch: "Class IV",
				notes: "Requires Max Tow Package"
			}] },
			"2500": { trims: [{
				trim: "Tradesman — 6.7L Cummins Diesel",
				maxTow: 2e4,
				maxPayload: 3990,
				gcwr: 3e4,
				curb: 7340,
				engine: "6.7L Cummins HO Diesel",
				hitch: "Class V"
			}] },
			"3500": { trims: [{
				trim: "Tradesman (DRW) — 6.7L Cummins Diesel",
				maxTow: 37100,
				maxPayload: 7680,
				gcwr: 49e3,
				curb: 8e3,
				engine: "6.7L Cummins Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel"
			}] }
		},
		chevrolet: {
			"Silverado 1500": { trims: [{
				trim: "High Country — 6.2L V8 Max Trailering",
				maxTow: 13300,
				maxPayload: 2280,
				gcwr: 20800,
				curb: 4800,
				engine: "6.2L EcoTec3 V8 (Max Trailering)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}] },
			"Silverado 2500HD": { trims: [{
				trim: "Work Truck — 6.6L Duramax Diesel",
				maxTow: 18500,
				maxPayload: 3979,
				gcwr: 28e3,
				curb: 7e3,
				engine: "6.6L Duramax Diesel",
				hitch: "Class V"
			}] },
			"Silverado 3500HD": { trims: [{
				trim: "Work Truck (DRW) — 6.6L Duramax Diesel",
				maxTow: 35500,
				maxPayload: 7442,
				gcwr: 46500,
				curb: 8e3,
				engine: "6.6L Duramax Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel"
			}] }
		},
		gmc: {
			"Sierra 1500": { trims: [{
				trim: "Denali — 6.2L V8 Max Trailering",
				maxTow: 13e3,
				maxPayload: 2240,
				gcwr: 20400,
				curb: 4900,
				engine: "6.2L EcoTec3 V8 (Max Trailering)",
				hitch: "Class IV",
				notes: "Requires Max Trailering Package"
			}] },
			"Sierra 2500HD": { trims: [{
				trim: "Denali — 6.6L Duramax Diesel",
				maxTow: 18500,
				maxPayload: 3700,
				gcwr: 28e3,
				curb: 7400,
				engine: "6.6L Duramax Diesel",
				hitch: "Class V"
			}] },
			"Sierra 3500HD": { trims: [{
				trim: "Regular Cab (DRW) — 6.6L Duramax",
				maxTow: 36e3,
				maxPayload: 7442,
				gcwr: 46500,
				curb: 8e3,
				engine: "6.6L Duramax Diesel (DRW)",
				hitch: "Class V",
				notes: "Dual rear wheel"
			}] }
		},
		toyota: {
			"Tundra": { trims: [{
				trim: "Limited Hybrid — 3.4L TT-V6 Hybrid",
				maxTow: 12e3,
				maxPayload: 1640,
				gcwr: 18600,
				curb: 6060,
				engine: "3.4L Twin-Turbo V6 Hybrid",
				hitch: "Class IV",
				notes: "Requires Tow Technology Package"
			}] },
			"Tacoma": { trims: [{
				trim: "SR5 / TRD — 3.5L V6",
				maxTow: 6800,
				maxPayload: 1440,
				gcwr: 11200,
				curb: 4480,
				engine: "3.5L V6",
				hitch: "Class III"
			}] }
		},
		nissan: { "Titan": { trims: [{
			trim: "SV / PRO-4X (w/ Tow Pkg) — 5.6L V8",
			maxTow: 11040,
			maxPayload: 1890,
			gcwr: 18500,
			curb: 5883,
			engine: "5.6L Endurance V8",
			hitch: "Class IV"
		}] } },
		jeep: { "Gladiator": { trims: [{
			trim: "Sport / Overland — 3.6L V6",
			maxTow: 7650,
			maxPayload: 1650,
			gcwr: 13500,
			curb: 4650,
			engine: "3.6L Pentastar V6",
			hitch: "Class III"
		}] } }
	}
};
var TRUCK_MAKE_LABELS = {
	ford: "Ford",
	ram: "Ram",
	chevrolet: "Chevrolet",
	gmc: "GMC",
	toyota: "Toyota",
	nissan: "Nissan",
	jeep: "Jeep"
};
function truckYears() {
	const years = [];
	for (let y = 2026; y >= 2010; y--) years.push(String(y));
	return years;
}
function truckMakes(year) {
	const d = TRUCK_DB[year] ?? TRUCK_DB["2024"] ?? TRUCK_DB["2025"];
	return d ? Object.keys(d) : [];
}
function truckModels(year, make) {
	const d = TRUCK_DB[year] ?? TRUCK_DB["2024"] ?? TRUCK_DB["2025"];
	if (!d) return [];
	const m = d[make.toLowerCase()];
	return m ? Object.keys(m) : [];
}
function truckTrims(year, make, model) {
	const d = TRUCK_DB[TRUCK_DB[year] ? year : TRUCK_DB["2024"] ? "2024" : "2025"];
	if (!d) return [];
	const m = d[make.toLowerCase()];
	if (!m) return [];
	return m[model]?.trims ?? [];
}
function TowPage() {
	const { slug } = Route$4.useSearch();
	const seeded = slug ? getBySlug(slug) : void 0;
	const [ty, setTy] = (0, import_react.useState)("2025");
	const [tMake, setTMake] = (0, import_react.useState)("ford");
	const [tModel, setTModel] = (0, import_react.useState)("F-150");
	const [trimIdx, setTrimIdx] = (0, import_react.useState)(0);
	const [rvMake, setRvMake] = (0, import_react.useState)(seeded?.make ?? "Grand Design");
	const [rvModel, setRvModel] = (0, import_react.useState)(seeded?.model ?? "Reflection");
	const [passengers, setPassengers] = (0, import_react.useState)("2");
	const makes = truckMakes(ty);
	const models = truckModels(ty, tMake);
	const trims = truckTrims(ty, tMake, tModel);
	const trim = trims[trimIdx] ?? trims[0];
	const rvModels = modelsForMake(rvMake);
	const spec = RV_DATA[rvMake]?.[rvModel];
	const isTowable = spec ? /fifth|travel|toy|truck camper/i.test(spec.type) : true;
	const check = (0, import_react.useMemo)(() => {
		if (!spec || !trim) return null;
		const trailer = spec.weightRange[1];
		const pin = spec.hitchPinWeight ?? Math.round(trailer * (spec.type.includes("Fifth") ? .2 : .12));
		const cargoPeople = (Number(passengers) || 0) * 180;
		const payloadUsed = pin + cargoPeople;
		const gcwrUsed = trim.curb + cargoPeople + trailer;
		const towOk = trailer <= trim.maxTow;
		const payloadOk = payloadUsed <= trim.maxPayload;
		const gcwrOk = gcwrUsed <= trim.gcwr;
		return {
			trailer,
			pin,
			payloadUsed,
			gcwrUsed,
			towOk,
			payloadOk,
			gcwrOk,
			all: towOk && payloadOk && gcwrOk
		};
	}, [
		spec,
		trim,
		passengers
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
					children: "RvTOW"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold",
					children: "Tow match"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Compare a truck trim against catalog trailer weight. Motorhomes show toad capacity instead."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-3 rounded-xl border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "px-1 text-[11px] font-semibold uppercase tracking-wide text-muted",
							children: "Tow vehicle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
							value: ty,
							onChange: (e) => {
								setTy(e.target.value);
								setTrimIdx(0);
							},
							children: truckYears().map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: y }, y))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
							value: tMake,
							onChange: (e) => {
								setTMake(e.target.value);
								const next = truckModels(ty, e.target.value)[0] ?? "";
								setTModel(next);
								setTrimIdx(0);
							},
							children: makes.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: m,
								children: TRUCK_MAKE_LABELS[m] ?? m
							}, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
							value: tModel,
							onChange: (e) => {
								setTModel(e.target.value);
								setTrimIdx(0);
							},
							children: models.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
							value: String(trimIdx),
							onChange: (e) => setTrimIdx(Number(e.target.value)),
							children: trims.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: i,
								children: t.trim
							}, t.trim))
						}),
						trim ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								trim.engine,
								" · ",
								trim.hitch,
								" · curb ",
								formatLbs(trim.curb)
							]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-3 rounded-xl border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "px-1 text-[11px] font-semibold uppercase tracking-wide text-muted",
							children: "RV"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
							value: rvMake,
							onChange: (e) => {
								setRvMake(e.target.value);
								setRvModel(modelsForMake(e.target.value)[0] ?? "");
							},
							children: MAKES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
							value: rvModel,
							onChange: (e) => setRvModel(e.target.value),
							children: rvModels.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Passengers (payload)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-1",
							value: passengers,
							onChange: (e) => setPassengers(e.target.value)
						})] }),
						spec ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								spec.type,
								" · ",
								spec.lengthRange[0],
								"–",
								spec.lengthRange[1],
								" ft · UVW/GVWR band ",
								formatLbs(spec.weightRange[0]),
								"–",
								formatLbs(spec.weightRange[1])
							]
						}) : null
					]
				})]
			}),
			spec && !isTowable ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-navy p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Motorhome toad rating"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-4xl tabular text-primary",
						children: spec.towingCapacity ? formatLbs(spec.towingCapacity) : "See OEM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "This coach tows a dinghy, not the other way around. Use the truck matcher for trailers and fifth wheels."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rv/$slug",
						params: { slug: CATALOG.find((c) => c.make === rvMake && c.model === rvModel)?.slug ?? "grand-design--reflection" },
						search: {
							year: ty,
							floorplan: ""
						},
						className: "mt-3 inline-block text-sm text-primary",
						children: "Open spec sheet"
					})
				]
			}) : check && trim ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("rounded-xl border p-5", check.all ? "border-success/40 bg-success/10" : "border-danger/40 bg-danger/10"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: check.all ? "Match" : "Do not tow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Using high-end catalog weight as a conservative check."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassFail, {
								ok: check.towOk,
								label: "Trailer vs max tow",
								a: formatLbs(check.trailer),
								b: formatLbs(trim.maxTow)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassFail, {
								ok: check.payloadOk,
								label: "Pin + people vs payload",
								a: formatLbs(check.payloadUsed),
								b: formatLbs(trim.maxPayload)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassFail, {
								ok: check.gcwrOk,
								label: "GCWR",
								a: formatLbs(check.gcwrUsed),
								b: formatLbs(trim.gcwr)
							})
						]
					})
				]
			}) : null
		]
	});
}
function PassFail({ ok, label, a, b }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-bg/40 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-wide text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-1 font-display text-lg", ok ? "text-success" : "text-danger"),
				children: ok ? "OK" : "Over"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tabular text-muted",
				children: [
					a,
					" / ",
					b
				]
			})
		]
	});
}
//#endregion
export { TowPage as component };
