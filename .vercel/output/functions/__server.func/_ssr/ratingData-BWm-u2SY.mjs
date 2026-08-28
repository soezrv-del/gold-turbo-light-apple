//#region node_modules/.nitro/vite/services/ssr/assets/ratingData-BWm-u2SY.js
var MANUFACTURER_BASE_SCORES = {
	"Newmar": 4.4,
	"Tiffin": 4.3,
	"Airstream": 4.2,
	"Regency": 4.2,
	"Oliver Travel Trailers": 4.15,
	"American Coach": 4.1,
	"Outdoors RV": 4.1,
	"Northwood Manufacturing": 4.1,
	"Pleasure-Way": 4.1,
	"Renegade RV": 4.1,
	"Entegra Coach": 4.05,
	"Lance": 4,
	"Leisure Travel Vans": 4,
	"DRV": 4,
	"Grand Design": 3.9,
	"Monaco Coach": 3.9,
	"Brinkley": 3.9,
	"Dynamax": 3.8,
	"Alliance RV": 3.8,
	"Winnebago": 3.6,
	"Nexus RV": 3.6,
	"Jayco": 3.4,
	"Holiday Rambler": 3.5,
	"Roadtrek": 3.5,
	"Fleetwood": 3.3,
	"Keystone": 3.2,
	"Coachmen": 3.1,
	"Crossroads": 2.9,
	"Forest River": 2.9,
	"Thor": 2.9,
	"Heartland": 2.8,
	"Dutchmen": 2.8,
	"Palomino": 2.8
};
var TIER_ADJUSTMENTS = {
	flagship: .3,
	upper_mid: .15,
	standard: 0,
	entry: -.2
};
var TIER_LABELS = {
	flagship: "Flagship / Luxury",
	upper_mid: "Upper Mid-Range",
	standard: "Standard",
	entry: "Entry Level"
};
var MODEL_TIERS = {
	"Newmar": {
		"King Aire": "flagship",
		"Essex": "flagship",
		"Mountain Aire": "flagship",
		"Dutch Star": "upper_mid",
		"Ventana": "upper_mid",
		"Kountry Star": "standard",
		"Bay Star": "standard",
		"Bay Star Sport": "entry"
	},
	"Tiffin": {
		"Zephyr": "flagship",
		"Allegro 45OPP": "flagship",
		"Allegro Bus": "flagship",
		"Phaeton": "upper_mid",
		"Allegro Red": "upper_mid",
		"Wayfarer": "upper_mid",
		"Open Road": "standard",
		"Allegro Breeze": "entry"
	},
	"Thor": {
		"Tuscany": "flagship",
		"Magnitude": "upper_mid",
		"Seneca": "upper_mid",
		"Palazzo": "upper_mid",
		"Aria": "upper_mid",
		"Sanctuary": "upper_mid",
		"Windsport": "standard",
		"Challenger": "standard",
		"Gemini": "standard",
		"ACE": "standard",
		"Four Winds": "entry"
	},
	"Coachmen": {
		"Sportscoach": "upper_mid",
		"Encore": "upper_mid",
		"Prism": "upper_mid",
		"Galleria": "upper_mid",
		"Freelander": "standard",
		"Mirada": "standard",
		"Leprechaun": "standard",
		"Beyond": "standard",
		"Apex": "entry",
		"Pursuit": "entry"
	},
	"Winnebago": {
		"Grand Tour": "flagship",
		"Revel": "flagship",
		"View": "upper_mid",
		"Journey": "upper_mid",
		"Adventurer": "standard",
		"Itasca Sunstar": "standard",
		"Micro Minnie": "standard"
	},
	"Forest River": {
		"Berkshire": "upper_mid",
		"Cardinal": "upper_mid",
		"XLR Nitro": "upper_mid",
		"Georgetown 5 Series": "upper_mid",
		"Georgetown XL": "upper_mid",
		"Columbus": "standard",
		"Rockwood Signature": "standard",
		"Georgetown": "standard",
		"Sunseeker": "standard",
		"Forester": "standard"
	},
	"Airstream": {
		"Atlas": "flagship",
		"Classic": "flagship",
		"Interstate": "upper_mid",
		"Flying Cloud": "upper_mid",
		"Bambi": "standard",
		"Basecamp": "entry"
	},
	"Keystone": {
		"Alpine": "flagship",
		"Montana": "upper_mid",
		"Cougar 5th Wheel": "standard",
		"Cougar": "standard",
		"Laredo": "standard",
		"Sprinter": "standard",
		"Cougar Half-Ton": "standard",
		"Passport": "entry"
	},
	"Grand Design": {
		"Solitude": "flagship",
		"Momentum": "flagship",
		"Reflection": "upper_mid",
		"Imagine": "upper_mid",
		"Transcend": "standard",
		"Imagine XLS": "standard"
	},
	"Fleetwood": {
		"Discovery LXE": "flagship",
		"Bounder Classic": "upper_mid",
		"Discovery": "upper_mid",
		"Bounder": "standard",
		"Pace Arrow": "standard",
		"Tioga Ranger": "entry",
		"Storm": "entry",
		"Flair": "entry"
	},
	"Jayco": {
		"Embark": "flagship",
		"Melbourne Prestige": "upper_mid",
		"Eagle": "upper_mid",
		"Precept": "standard",
		"Jay Feather": "standard"
	},
	"American Coach": {
		"American Tradition": "flagship",
		"American Eagle": "flagship",
		"American Dream": "upper_mid"
	},
	"Entegra Coach": {
		"Cornerstone": "flagship",
		"Anthem": "flagship",
		"Aspire": "upper_mid",
		"Expanse": "upper_mid",
		"Reatta": "standard"
	},
	"Monaco Coach": {
		"Dynasty": "flagship",
		"Camelot": "upper_mid"
	},
	"Holiday Rambler": {
		"Navigator": "flagship",
		"Ambassador": "upper_mid",
		"Invicta": "standard",
		"Vacationer": "standard"
	},
	"Heartland": {
		"Cyclone": "upper_mid",
		"Bighorn": "upper_mid",
		"Sundance": "standard",
		"Prowler": "entry"
	},
	"Lance": {
		"Lance 2465": "upper_mid",
		"Lance 2375": "upper_mid",
		"Lance 1172": "standard"
	},
	"Pleasure-Way": {
		"Plateau TS": "flagship",
		"Ontour 2.0": "standard"
	},
	"Roadtrek": {
		"CS Adventurous": "upper_mid",
		"Zion Slumber": "standard"
	},
	"Nexus RV": {
		"Triumph": "upper_mid",
		"Viper": "standard",
		"Phantom": "entry"
	},
	"Crossroads": {
		"Cameo": "upper_mid",
		"Sunset Trail": "standard"
	},
	"Palomino": {
		"Columbus Compass": "upper_mid",
		"Real-Lite": "standard"
	},
	"Dutchmen": {
		"Yukon": "upper_mid",
		"Voltage": "upper_mid",
		"Kodiak": "standard",
		"Astoria": "standard",
		"Aerolite": "entry",
		"Coleman": "entry"
	},
	"Leisure Travel Vans": {
		"Wonder XL": "flagship",
		"Unity": "upper_mid",
		"Wonder": "upper_mid",
		"Serenity": "standard",
		"Free": "standard"
	},
	"Renegade RV": {
		"Valencia": "flagship",
		"Verona": "upper_mid",
		"Villager": "upper_mid"
	},
	"Dynamax": {
		"Force": "flagship",
		"Isata 5": "upper_mid",
		"Europa": "upper_mid",
		"Isata 3": "standard"
	},
	"Outdoors RV": {
		"Timber Ridge": "flagship",
		"Back Country": "upper_mid",
		"Wind River": "upper_mid"
	},
	"Northwood Manufacturing": {
		"Arctic Fox": "upper_mid",
		"Wolf Creek": "upper_mid",
		"Nash": "standard"
	},
	"Oliver Travel Trailers": {
		"Legacy Elite II": "flagship",
		"Legacy Elite": "upper_mid"
	},
	"Regency": { "Ultra Brougham": "flagship" },
	"DRV": {
		"Mobile Suites": "flagship",
		"Tradition": "upper_mid"
	}
};
function getYearAdjustment(yearStr) {
	const yr = parseInt(yearStr, 10);
	if (isNaN(yr)) return 0;
	if (yr >= 2025) return .1;
	if (yr === 2024) return -.1;
	if (yr >= 2020 && yr <= 2023) return -.3;
	if (yr >= 2018 && yr <= 2019) return .15;
	if (yr >= 2015 && yr <= 2017) return -.05;
	if (yr >= 2011 && yr <= 2014) return -.1;
	return -.15;
}
function getModelTier(make, model) {
	return MODEL_TIERS[make]?.[model] ?? "standard";
}
/**
* Compute the credible RvFOX rating for a specific make/model/year.
* Score = Manufacturer Base + Tier Adjustment + Year Build Adjustment
* Clamped to [1.0, 5.0], rounded to 1 decimal.
*/
function computeRating(make, model, year) {
	const base = MANUFACTURER_BASE_SCORES[make] ?? 3.5;
	const tierAdj = TIER_ADJUSTMENTS[getModelTier(make, model)];
	const yearAdj = getYearAdjustment(year);
	const raw = base + tierAdj + yearAdj;
	return Math.round(Math.min(5, Math.max(1, raw)) * 10) / 10;
}
var HIGH_CONF = /* @__PURE__ */ new Set([
	"Newmar",
	"Tiffin",
	"Airstream",
	"Winnebago",
	"Grand Design",
	"Keystone",
	"Thor",
	"Forest River",
	"Jayco",
	"Coachmen",
	"Fleetwood",
	"Heartland",
	"Lance",
	"Leisure Travel Vans"
]);
var LOW_CONF = /* @__PURE__ */ new Set([
	"Regency",
	"Brinkley",
	"Alliance RV"
]);
function getYearNote(yearStr) {
	const yr = parseInt(yearStr, 10);
	if (isNaN(yr)) return "Unknown year";
	if (yr >= 2025) return `${yr} — current model, quality recovery (+0.10)`;
	if (yr === 2024) return `${yr} — transition year (-0.10)`;
	if (yr >= 2020 && yr <= 2023) return `${yr} — COVID-era supply chain impact (-0.30)`;
	if (yr >= 2018 && yr <= 2019) return `${yr} — pre-COVID peak quality (+0.15)`;
	return `${yr} — older model year`;
}
function getRatingMetadata(make, model, year) {
	const base = MANUFACTURER_BASE_SCORES[make] ?? 3.5;
	const tier = getModelTier(make, model);
	const tierAdj = TIER_ADJUSTMENTS[tier];
	const yearAdj = getYearAdjustment(year);
	const score = Math.round(Math.min(5, Math.max(1, base + tierAdj + yearAdj)) * 10) / 10;
	const confidence = HIGH_CONF.has(make) ? "High" : LOW_CONF.has(make) ? "Low" : "Medium";
	return {
		score,
		tier,
		tierLabel: TIER_LABELS[tier],
		base,
		tierAdj,
		yearAdj,
		yearNote: getYearNote(year),
		confidence,
		sources: [
			"iRV2 Owner Forums",
			"Reddit r/rving community",
			"RVInsider.com scores",
			"YouTube tech inspections",
			"NHTSA complaint analysis",
			"Facebook owner group sentiment"
		]
	};
}
//#endregion
export { getRatingMetadata as n, computeRating as t };
