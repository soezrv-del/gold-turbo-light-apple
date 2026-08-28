import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-aQs7QiOF.js
var useAppStore = create()(persist((set, get) => ({
	garage: [],
	profile: null,
	recent: [],
	compare: [],
	searchCount: 0,
	toggleSaved: (rv) => {
		const key = `${rv.slug}|${rv.year}`;
		set({ garage: get().garage.some((g) => `${g.slug}|${g.year}` === key) ? get().garage.filter((g) => `${g.slug}|${g.year}` !== key) : [{
			...rv,
			savedAt: Date.now()
		}, ...get().garage].slice(0, 40) });
	},
	isSaved: (slug, year) => get().garage.some((g) => g.slug === slug && g.year === year),
	setProfile: (p) => set({ profile: p }),
	pushRecent: (s) => {
		const id = `${s.year}-${s.make}-${s.model}-${s.floorplan}`;
		set({ recent: [{
			...s,
			id,
			at: Date.now()
		}, ...get().recent.filter((r) => r.id !== id)].slice(0, 8) });
	},
	toggleCompare: (slug) => {
		const cur = get().compare;
		set({ compare: cur.includes(slug) ? cur.filter((s) => s !== slug) : cur.length >= 3 ? [...cur.slice(1), slug] : [...cur, slug] });
	},
	bumpSearch: () => set({ searchCount: get().searchCount + 1 })
}), { name: "rvfax-store" }));
//#endregion
export { useAppStore as t };
