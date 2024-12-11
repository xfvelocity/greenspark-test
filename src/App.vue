<template>
  <widget
    v-for="(widget, i) in widgets"
    :key="i"
    :widget="widget"
    @update:linked="widget.linked = $event"
    @update:active="widget.active = $event"
    @update:colour="widget.selectedColor = $event"
  />
</template>

<script lang="ts" setup>
import type { WidgetType } from "./types/generic.types.ts";

import { ref } from "vue";

import Widget from "./components/widget/Widget.vue";

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
    selectedColor: "black",
  },
  {
    id: 3,
    type: "plastic",
    amount: 300,
    action: "collects",
    active: true,
    linked: true,
    selectedColor: "beige",
  },
]);
</script>

<style lang="scss">
@use "assets/styles/index.scss";
</style>
