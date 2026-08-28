import { createServerFn } from "@tanstack/react-start";

const UA = "RVFAX/1.0 (https://grok.me)";

export const geocode = createServerFn({ method: "POST" })
  .validator((input: { q: string }) => input)
  .handler(async ({ data }) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(data.q)}&format=json&limit=1`;
    const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" } });
    if (!res.ok) return { ok: false as const, error: "Geocoding failed" };
    const json = (await res.json()) as { lat: string; lon: string; display_name: string }[];
    const hit = json[0];
    if (!hit) return { ok: false as const, error: "Place not found" };
    return {
      ok: true as const,
      lat: parseFloat(hit.lat),
      lon: parseFloat(hit.lon),
      label: hit.display_name,
    };
  });

export const routeDrive = createServerFn({ method: "POST" })
  .validator((input: { from: { lat: number; lon: number }; to: { lat: number; lon: number } }) => input)
  .handler(async ({ data }) => {
    const { from, to } = data;
    const url = `https://router.project-osrm.org/route/v1/driving/${from.lon},${from.lat};${to.lon},${to.lat}?overview=simplified&geometries=geojson&steps=true`;
    const res = await fetch(url);
    if (!res.ok) return { ok: false as const, error: "Routing failed" };
    const json = (await res.json()) as {
      routes?: {
        distance: number;
        duration: number;
        geometry: { coordinates: [number, number][] };
        legs: { steps: { maneuver: { instruction?: string; type: string }; distance: number }[] }[];
      }[];
    };
    const route = json.routes?.[0];
    if (!route) return { ok: false as const, error: "No route" };
    const steps = route.legs.flatMap((leg) =>
      leg.steps.slice(0, 40).map((s) => ({
        instruction: s.maneuver.instruction || s.maneuver.type,
        distanceMi: s.distance / 1609.34,
      })),
    );
    return {
      ok: true as const,
      distanceMi: route.distance / 1609.34,
      durationMin: route.duration / 60,
      polyline: route.geometry.coordinates.map(([lon, lat]) => ({ lat, lon })),
      steps,
    };
  });

export const nearbyCampgrounds = createServerFn({ method: "POST" })
  .validator((input: { lat: number; lon: number }) => input)
  .handler(async ({ data }) => {
    const query = `[out:json][timeout:20];(node["tourism"="camp_site"](around:30000,${data.lat},${data.lon});node["tourism"="caravan_site"](around:30000,${data.lat},${data.lon}););out 25;`;
    const res = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": UA },
      body: `data=${encodeURIComponent(query)}`,
    });
    if (!res.ok) return { ok: false as const, error: "Campground search failed", sites: [] as { id: number; name: string; lat: number; lon: number }[] };
    const json = (await res.json()) as {
      elements?: { id: number; lat: number; lon: number; tags?: { name?: string } }[];
    };
    const sites = (json.elements ?? [])
      .filter((e) => e.lat && e.lon)
      .slice(0, 18)
      .map((e) => ({
        id: e.id,
        name: e.tags?.name || "Campground",
        lat: e.lat,
        lon: e.lon,
      }));
    return { ok: true as const, sites };
  });
