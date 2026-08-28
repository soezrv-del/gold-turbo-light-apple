import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SavedRv {
  slug: string;
  make: string;
  model: string;
  year: string;
  floorplan: string;
  savedAt: number;
}

export interface GarageProfile {
  year: string;
  make: string;
  model: string;
  floorplan: string;
  vin: string;
  heightFt: string;
  widthFt: string;
  lengthFt: string;
  gvwr: string;
  axles: string;
  hasPropane: boolean;
}

export interface RecentSearch {
  id: string;
  year: string;
  make: string;
  model: string;
  floorplan: string;
  at: number;
}

interface AppState {
  garage: SavedRv[];
  profile: GarageProfile | null;
  recent: RecentSearch[];
  compare: string[];
  searchCount: number;
  toggleSaved: (rv: Omit<SavedRv, "savedAt">) => void;
  isSaved: (slug: string, year: string) => boolean;
  setProfile: (p: GarageProfile) => void;
  pushRecent: (s: Omit<RecentSearch, "id" | "at">) => void;
  toggleCompare: (slug: string) => void;
  bumpSearch: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      garage: [],
      profile: null,
      recent: [],
      compare: [],
      searchCount: 0,
      toggleSaved: (rv) => {
        const key = `${rv.slug}|${rv.year}`;
        const exists = get().garage.some((g) => `${g.slug}|${g.year}` === key);
        set({
          garage: exists
            ? get().garage.filter((g) => `${g.slug}|${g.year}` !== key)
            : [{ ...rv, savedAt: Date.now() }, ...get().garage].slice(0, 40),
        });
      },
      isSaved: (slug, year) => get().garage.some((g) => g.slug === slug && g.year === year),
      setProfile: (p) => set({ profile: p }),
      pushRecent: (s) => {
        const id = `${s.year}-${s.make}-${s.model}-${s.floorplan}`;
        set({
          recent: [{ ...s, id, at: Date.now() }, ...get().recent.filter((r) => r.id !== id)].slice(0, 8),
        });
      },
      toggleCompare: (slug) => {
        const cur = get().compare;
        set({
          compare: cur.includes(slug)
            ? cur.filter((s) => s !== slug)
            : cur.length >= 3
              ? [...cur.slice(1), slug]
              : [...cur, slug],
        });
      },
      bumpSearch: () => set({ searchCount: get().searchCount + 1 }),
    }),
    { name: "rvfax-store" },
  ),
);
