<template>
  <div>
    Загрузка{{ points }}
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const maxPoints = 3;
const timeout = 300;
const pointCount = ref(1);
const timerId = ref<ReturnType<typeof setTimeout>>();

onMounted(() => {
  timerId.value = setTimeout(timerTick, timeout);
})

onUnmounted(() => {
  if(timerId.value) {
    clearTimeout(timerId.value);
  }
});

const points = computed(() => '.'.repeat(pointCount.value))

const timerTick = () => {
  pointCount.value = pointCount.value >= maxPoints ? 1 : pointCount.value + 1;
  timerId.value = setTimeout(timerTick, timeout);
};

</script>