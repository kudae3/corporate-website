import { create } from "zustand";

export type FilterRoleType = {
  role: string | null;
  setRole: (role: string) => void;
};

export const useFilteredRoleStore = create<FilterRoleType>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
}));
