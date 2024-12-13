<template>
  <div class="widget">
    <div :class="`widget-title bg-${widget.selectedColor}`">
      <icon
        src="greenspark-logo"
        :fill="isLightBackround ? 'green' : 'white'"
      />

      <div :class="isLightBackround ? 'text-green' : 'text-white'">
        <p>This product {{ widget.action }}</p>
        <h4>{{ widget.amount }}{{ widget.unit }} {{ widget.type }}</h4>
      </div>
    </div>

    <div class="widget-options">
      <div class="widget-option">
        <div class="widget-option-link">
          <p class="text-green">Link to Profile</p>

          <tooltip>
            <template #activator>
              <icon src="tooltip" />
            </template>

            <div class="widget-option-link-tooltip">
              <p>
                This widget links directly to your public profile so that you
                can easily share your impact with your customers. Turn it off
                here if you do not want the badge to link to it.
              </p>

              <custom-button> View Public Profile </custom-button>
            </div>
          </tooltip>
        </div>

        <checkbox
          :model-value="widget.linked"
          @update:model-value="$emit('update:linked', $event)"
        />
      </div>

      <div class="widget-option">
        <p class="text-green">Badge Colour</p>

        <div class="widget-option-colours">
          <div
            v-for="(colour, i) in colours"
            :key="i"
            :class="[
              `widget-colour hover bg-${colour}`,
              { 'widget-colour-selected': colour === widget.selectedColor },
            ]"
            @click="$emit('update:colour', colour)"
          />
        </div>
      </div>

      <div class="widget-option">
        <p class="text-green">Activate badge</p>

        <toggle
          :model-value="widget.active"
          @update:model-value="$emit('update:active', widget, $event)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { WidgetType } from "@/types/generic.types.ts";

import { computed } from "vue";
import Checkbox from "@/components/checkbox/Checkbox.vue";
import Toggle from "@/components/toggle/Toggle.vue";
import Icon from "@/components/icon/Icon.vue";
import Tooltip from "@/components/tooltip/Tooltip.vue";
import CustomButton from "@/components/button/CustomButton.vue";

// ** Props **
const props = defineProps({
  widget: {
    type: Object as PropType<WidgetType>,
    default: () => ({}),
  },
});

// ** Emits **
defineEmits([
  "update:active",
  "update:colour",
  "update:linked",
  "update:colour",
]);

// ** Data **
const colours: string[] = ["green", "blue", "beige", "white", "black"];

// ** Computed **
const isLightBackround = computed<boolean>(() => {
  return ["beige", "white"].includes(props.widget.selectedColor);
});
</script>

<style lang="scss" scoped>
.widget {
  width: 330px;

  &-title {
    padding: 10px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.01);
  }

  &-options {
    p {
      margin: 10px 0;
    }
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

      &-tooltip {
        text-align: center;
      }
    }
  }

  &-colour {
    height: 20px;
    width: 20px;
    border: 1px solid rgb(200, 200, 200);

    &-selected {
      border: 3px solid rgba(170, 170, 170);
    }
  }
}
</style>
