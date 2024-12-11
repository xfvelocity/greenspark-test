<template>
  <input
    type="checkbox"
    class="checkbox hover-circle"
    :class="{ 'checkbox-selected': modelValue }"
    @update:modelValue="$emit('update:modelValue', !modelValue)"
  />
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
@use "sass:map";
@use "../../assets/styles/colours";
@use "../../assets/styles/mixins";

.checkbox {
  width: 18px;
  height: 18px;
  border-radius: 2px;
  cursor: pointer;
  background: none;
  accent-color: map.get(colours.$colours, "green");
}
</style>
