import { create } from "zustand";

interface DarkModeStore {
  darkMode: boolean;
  toggle: () => void;
}

export const useDarkModeStore = create<DarkModeStore>((set) => ({
  darkMode: false,
  toggle: () => {
    set((state) => {
      document.documentElement.classList.toggle("dark");
      return { darkMode: !state.darkMode };
    });
  },
}));
