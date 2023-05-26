import { create } from "zustand";

export const useNavBarStore = create((set) => ({
  navBarBg: false,
  currentScroll: 0,
  changeNavBarBg: (val) => set({ navBarBg: val }),
  changeCurrentScroll: (val) => set({ currentScroll: val }),
}));
