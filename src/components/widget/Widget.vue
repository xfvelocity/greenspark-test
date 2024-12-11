<template>
  <div class="widget">
    <div :class="`widget-title bg-${widget.selectedColor}`">
      <icon src="greenspark-logo" />

      <p>{{ widget.type }}</p>
    </div>

    <div class="widget-option">
      <div class="widget-option-link">
        <p>Link to Profile</p>

        <icon src="tooltip" />
      </div>

      <checkbox
        :model-value="widget.linked"
        @update:model-value="$emit('update:linked', $event)"
      />
    </div>

    <div class="widget-option">
      <p>Badge Colour</p>

      <div class="widget-option-colours">
        <div
          v-for="(colour, i) in colours"
          :key="i"
          :class="`widget-colour hover bg-${colour}`"
          @click="$emit('update:colour', colour)"
        />
      </div>
    </div>

    <div class="widget-option">
      <p>Activate badge</p>

      <toggle
        :model-value="widget.active"
        @update:model-value="$emit('update:active', $event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { WidgetType } from "../../types/generic.types.ts";

import Checkbox from "../checkbox/Checkbox.vue";
import Toggle from "../toggle/Toggle.vue";
import Icon from "../icon/Icon.vue";

defineProps({
  widget: {
    type: Object as PropType<WidgetType>,
    default: () => ({}),
  },
});

const colours: string[] = ["green", "blue", "beige", "white", "black"];
</script>

<style lang="scss" scoped>
.widget {
  padding: 10px;
  max-width: 350px;
  margin: 0 auto;

  &-title {
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    gap: 5px;
  }

  &-option {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-colours {
      gap: 5px;
      display: flex;
    }

    &-link {
      gap: 5px;
      display: flex;
      align-items: center;
    }
  }

  &-colour {
    height: 20px;
    width: 20px;
    border: 1px solid rgb(200, 200, 200);
  }
}
</style>
