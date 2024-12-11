<template>
  <inline-svg
    :src="getImageUrl(src)"
    :class="{ [`icon-colour-${fill}`]: fill }"
  />
</template>

<script lang="ts" setup>
import InlineSvg from "vue-inline-svg";

// ** Props **
defineProps({
  src: {
    type: String,
    default: "",
    required: true,
  },
  fill: {
    type: String,
    default: "",
  },
});

// ** Methods **
const getImageUrl = (name: string): string => {
  return new URL(`../../assets/icons/${name}.svg`, import.meta.url).href;
};
</script>
