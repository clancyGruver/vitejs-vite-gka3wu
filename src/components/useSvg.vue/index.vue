<template>
  <img
    width="24"
    height="24"
    :src="svgs[name]"
  />
</template>

<script setup lang="ts">
  import svgs from './useSvg';

  interface IProps {
    name: keyof typeof svgs,
  }

  defineProps<IProps>();
</script>