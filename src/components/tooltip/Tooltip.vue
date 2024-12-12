<template>
  <div
    class="tooltip-wrapper"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot name="activator" />

    <transition name="fade">
      <div
        v-if="isVisible"
        class="tooltip"
        @mouseenter="showTooltip"
        @mouseleave="hideTooltip"
        :style="tooltipStyle"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

// ** Data **
const isVisible = ref<boolean>(true);

// ** Methods **
const showTooltip = (): void => {
  isVisible.value = true;
};

const hideTooltip = (): void => {
  isVisible.value = false;
};
</script>

<style lang="scss" scoped>
.tooltip-wrapper {
  position: relative;
}

.tooltip {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 320px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
