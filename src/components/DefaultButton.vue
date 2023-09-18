<template>
  <button
      class="button"
      :class="`button--${type}`"
      type="button"
      aria-label="edit"
      role="button"
      @click="clickHandler"
    >
      <slot />
    </button>
</template>

<script setup lang="ts">
type ButtonType = 'success' | 'default';

withDefaults(defineProps<{
  type?: ButtonType;
}>(), {
  type: 'default',
});

const emits = defineEmits<{
  click: [e: Event],
}>();

const clickHandler = (e: Event) => {
  emits('click', e);
};
</script>