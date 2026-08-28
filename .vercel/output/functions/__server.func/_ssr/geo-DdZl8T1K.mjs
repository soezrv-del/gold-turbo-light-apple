import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/geo-DdZl8T1K.js
var UA = "RVFAX/1.0 (https://grok.me)";
var geocode_createServerFn_handler = createServerRpc({
	id: "e678b4963d047f42b4b3c286d0b79f67b81dd3032aa04d596e94e1b427144aac",
	name: "geocode",
	filename: "src/lib/server/geo.ts"
}, (opts) => geocode.__executeServer(opts));
var geocode = createServerFn({ method: "POST" }).validator((input) => input).handler(geocode_createServerFn_handler, async ({ data }) => {
	const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(data.q)}&format=json&limit=1`;
	const res = await fetch(url, { headers: {
		"User-Agent": UA,
		Accept: "application/json"
	} });
	if (!res.ok) return {
		ok: false,
		error: "Geocoding failed"
	};
	const hit = (await res.json())[0];
	if (!hit) return {
		ok: false,
		error: "Place not found"
	};
	return {
		ok: true,
		lat: parseFloat(hit.lat),
		lon: parseFloat(hit.lon),
		label: hit.display_name
	};
});
var routeDrive_createServerFn_handler = createServerRpc({
	id: "a02c17e6e9610953c5b8400432887fabb6e315d98cf7af671e04c007a28dcb22",
	name: "routeDrive",
	filename: "src/lib/server/geo.ts"
}, (opts) => routeDrive.__executeServer(opts));
var routeDrive = createServerFn({ method: "POST" }).validator((input) => input).handler(routeDrive_createServerFn_handler, async ({ data }) => {
	const { from, to } = data;
	const url = `https://router.project-osrm.org/route/v1/driving/${from.lon},${from.lat};${to.lon},${to.lat}?overview=simplified&geometries=geojson&steps=true`;
	const res = await fetch(url);
	if (!res.ok) return {
		ok: false,
		error: "Routing failed"
	};
	const route = (await res.json()).routes?.[0];
	if (!route) return {
		ok: false,
		error: "No route"
	};
	const steps = route.legs.flatMap((leg) => leg.steps.slice(0, 40).map((s) => ({
		instruction: s.maneuver.instruction || s.maneuver.type,
		distanceMi: s.distance / 1609.34
	})));
	return {
		ok: true,
		distanceMi: route.distance / 1609.34,
		durationMin: route.duration / 60,
		polyline: route.geometry.coordinates.map(([lon, lat]) => ({
			lat,
			lon
		})),
		steps
	};
});
var nearbyCampgrounds_createServerFn_handler = createServerRpc({
	id: "f14179d9766e8a14f8c6ad68d44aaba6c4f72681134fb588f261077c4632e9a5",
	name: "nearbyCampgrounds",
	filename: "src/lib/server/geo.ts"
}, (opts) => nearbyCampgrounds.__executeServer(opts));
var nearbyCampgrounds = createServerFn({ method: "POST" }).validator((input) => input).handler(nearbyCampgrounds_createServerFn_handler, async ({ data }) => {
	const query = `[out:json][timeout:20];(node["tourism"="camp_site"](around:30000,${data.lat},${data.lon});node["tourism"="caravan_site"](around:30000,${data.lat},${data.lon}););out 25;`;
	const res = await fetch("https://overpass-api.de/api/interpreter", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"User-Agent": UA
		},
		body: `data=${encodeURIComponent(query)}`
	});
	if (!res.ok) return {
		ok: false,
		error: "Campground search failed",
		sites: []
	};
	return {
		ok: true,
		sites: ((await res.json()).elements ?? []).filter((e) => e.lat && e.lon).slice(0, 18).map((e) => ({
			id: e.id,
			name: e.tags?.name || "Campground",
			lat: e.lat,
			lon: e.lon
		}))
	};
});
//#endregion
export { geocode_createServerFn_handler, nearbyCampgrounds_createServerFn_handler, routeDrive_createServerFn_handler };
