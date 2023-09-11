<template>
  <h1>{{ hello }}</h1>
  <Pagination
    :pageNumber="pageNumber"
    @pageChange="onPageChange"
    :lastPage="isLastPage"
  />
  {{ postIds }}
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Pagination from './components/Pagination.vue';
import { range } from './tasks/arrays';

const postsPerPage = ref(5);
const pageNumber = ref(1);
const hello = ref('Hello');

const onPageChange = (newPage: number) => (pageNumber.value = newPage);

const isLastPage = computed(() => pageNumber.value >= 3);
const postIds = computed(() => {
  const startIdx = pageNumber.value * postsPerPage.value;
  const endIdx = startIdx + postsPerPage.value;
  console.log(startIdx, endIdx);
  return [...range(1, 5)];
  pageNumber.value >= 3;
});

// const postIds = [...range(1, 5)];
// const posts = await getPosts(postIds);
// if (isSomeSucceed(posts)) {
//   const rejected = filterRejected(posts);
//   console.error(rejected);
// }
// const succedPosts =
//   filterSucceed < IPostWithComments > posts.map(({ value }) => value);
// const firstPost = succedPosts[0];

// const newPost = changeCommentsPostId(firstPost);
// console.log(firstPost);
// console.log(newPost);
// console.log(succedPosts);

// listTask();
</script>
