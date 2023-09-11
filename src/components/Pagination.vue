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

const props = definePros<Props>();
const emits = defineEmits<{
  pageChange: [newPage: number];
}>();

const buttonHandler = (newPage: number) => {
  emits('pageChange', newPage);
};

const isFirstPage = computed(() => this.pageNumber > 1);
</script>
