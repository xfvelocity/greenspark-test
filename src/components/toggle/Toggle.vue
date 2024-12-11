<template>
  <div class="toggle" :class="{ 'toggle-active': modelValue }">
    <div
      class="toggle-btn hover-circle"
      @click="$emit('update:modelValue', !modelValue)"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

// ** Props **
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

// ** Emits **
defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/styles/colours";

.toggle {
  width: 50px;
  height: 25px;
  border-radius: 50px;
  position: relative;
  transition: background-color 0.3s;
  border: 1px solid map.get(colours.$colours, "lightgreen");
  box-shadow: inset 0px 1px 7px rgba(0, 0, 0, 0.15);

  &-btn {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 26px;
    height: 26px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
    border: 1px solid map.get(colours.$colours, "beige");
    cursor: pointer;
  }

  &-active {
    background-color: map.get(colours.$colours, "green");

    .toggle-btn {
      transform: translateX(100%);
      border: 1px solid map.get(colours.$colours, "green");
    }
  }
}
</style>
