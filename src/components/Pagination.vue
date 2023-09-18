<template>
  <div class="pagination">
    <button v-if="isFirstPage" @click="buttonHandler(pageNumber - 1)">
      prev
    </button>
    <span>{{ pageNumber }}</span>
    <button v-if="!lastPage" @click="buttonHandler(pageNumber + 1)">
      next
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  pageNumber: number;
  lastPage: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits<{
  pageChange: [newPage: number];
}>();

const isFirstPage = computed(() => props.pageNumber > 1);

const buttonHandler = (newPage: number) => {
  emits('pageChange', newPage);
};
</script>
