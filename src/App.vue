<template>
  <h1>Постовой</h1>
  <PostList :postIds="postIds" />
  <Pagination
    :pageNumber="pageNumber"
    @pageChange="onPageChange"
    :lastPage="isLastPage"
  />
  {{ postIds }}
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Pagination from './components/Pagination.vue';
import PostList from './components/PostList.vue';
import { range } from './tasks/arrays';
import { isNumber } from './tasks/typeGuards';

const postsPerPage = ref(5);
const pageNumber = ref(1);

const onPageChange = (newPage: number) => (pageNumber.value = newPage);

const isLastPage = computed(() => pageNumber.value >= 3);
const postIds = computed(() => {
  const page = pageNumber.value - 1;

  const startIdx = page * postsPerPage.value + 1;
  const endIdx = startIdx + postsPerPage.value - 1;
  return [...range(startIdx, endIdx)].filter(isNumber);
});
</script>
