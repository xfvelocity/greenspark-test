<template>
  <div class="toggle" :class="{ 'toggle-active': modelValue }">
    <button class="toggle-btn" @click="toggle" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const toggle = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>

<style lang="scss" scoped>
.toggle {
  display: inline-block;
  width: 50px;
  height: 25px;
  background-color: #ccc;
  border-radius: 50px;
  position: relative;
  transition: background-color 0.3s;

  &-active {
    background-color: #4caf50;
  }

  &-btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
    cursor: pointer;
  }

  &-active &-btn {
    transform: translateX(25px);
  }

  &-btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.5);
  }
}
</style>
