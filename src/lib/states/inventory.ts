import { create } from "zustand";
interface itemObject {
  label: "Food" | "Scaffolding" | "Pills";
}
interface item {
  items: itemObject[];

  setItem: (state: itemObject[]) => void;
}

export const useItemStore = create<item>((set) => ({
  items: [],
  setItem: (item: itemObject[]) => set({ items: item }),
}));
