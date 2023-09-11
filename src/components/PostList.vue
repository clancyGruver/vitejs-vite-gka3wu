<template></template>

<script>
import { getPosts: getPostsHelper } from '../tasks/promises';

export default {
  data: () => ({
    posts: [],
  }),
  props: {
    postIds: {
      type: Array,
      default: [...range(1, 5)],
    }
  }
  mounted() {

  },
  methods: {
    async getPosts() {
      posts = await getPostsHelper(postIds);
    },
  }
};
</script>
