import { CareerType } from "@/app/careers/Types/career";
import { create } from "zustand";

type SelectedCareerStateType = {
  selectedCareer: CareerType | null;
  setSelectedCareer: (career: CareerType | null) => void;
};

export const useSelectedCareerStore = create<SelectedCareerStateType>(
  (set) => ({
    selectedCareer: null,
    setSelectedCareer: (career) => set({ selectedCareer: career }),
  })
);
