<template>
  <input
    class="checkbox"
    type="checkbox"
    :checked="modelValue"
    @update:modelValue="onUpdateValue"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onUpdateValue = (event) => {
  emit("update:modelValue", event.target.checked);
};
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  margin-right: 8px;
}
</style>
