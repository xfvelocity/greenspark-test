<template>
  <widget
    v-for="(widget, i) in widgets"
    :key="i"
    :widget="widget"
    @update:linked="widget.linked = $event"
    @update:active="handleActiveState"
    @update:colour="widget.selectedColor = $event"
  />
</template>

<script lang="ts" setup>
import type { WidgetType } from "./types/generic.types.ts";

import { ref } from "vue";
import Widget from "./components/widget/Widget.vue";

// ** Data **
const widgets = ref<WidgetType[]>([
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
]);

// ** Methods **
const handleActiveState = (
  selectedWidget: WidgetType,
  isActive: boolean,
): void => {
  widgets.value.forEach((widget) => {
    widget.active = false;
  });

  selectedWidget.active = isActive;
};
</script>

<style lang="scss">
@use "assets/styles/index.scss";
</style>
