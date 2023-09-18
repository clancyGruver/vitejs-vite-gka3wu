<template>
  <p class="danger">POST REJECTED</p>
  <p>[reason]: {{ post.reason }}</p>
</template>

<script setup lang="ts">
interface IProps {
  post: PromiseRejectedResult;
}

defineProps<IProps>();
</script>