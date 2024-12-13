import type { WidgetStore } from "@/types/generic.types";
import { defineStore } from "pinia";

export const useWidgetsStore = defineStore("widgets", {
  state: (): WidgetStore => ({
    widgets: [
      {
        id: 1,
        type: "carbon",
        amount: 2,
        action: "offsets",
        active: false,
        linked: false,
        selectedColor: "green",
      },
      {
        id: 2,
        type: "trees",
        amount: 15,
        action: "plants",
        active: true,
        linked: false,
        selectedColor: "blue",
      },
      {
        id: 3,
        type: "plastic bottles",
        amount: 300,
        action: "collects",
        active: false,
        linked: true,
        selectedColor: "beige",
      },
    ],
  }),
});
