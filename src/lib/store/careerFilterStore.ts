import { create } from "zustand";

type FilterStateType = {
  type: string | null;
  setType: (type: string) => void;
};

export const useCareerStore = create<FilterStateType>((set) => ({
  type: null,
  setType: (type) => set({ type }),
}));
