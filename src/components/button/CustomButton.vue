<template>
  <button class="text-green hover">
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
button {
  background: none;
  box-shadow: 0;
  border: 0;
  font-weight: 700;
}
</style>
