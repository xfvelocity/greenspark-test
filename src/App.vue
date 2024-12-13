<template>
  <div class="widgets">
    <widget
      v-for="(widget, i) in widgets"
      :key="i"
      :widget="widget"
      @update:linked="widget.linked = $event"
      @update:active="handleActiveState"
      @update:colour="widget.selectedColor = $event"
    />
  </div>
</template>

<script lang="ts" setup>
import type { WidgetType } from "./types/generic.types.ts";

import { ref } from "vue";
import { useWidgetsStore } from "@/stores/widgets";
import { storeToRefs } from "pinia";

import Widget from "./components/widget/Widget.vue";

// ** Data **
const widgetsStore = useWidgetsStore();

const { widgets } = storeToRefs(widgetsStore);

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

.widgets {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  gap: 50px;

  @media (min-width: 850px) {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
