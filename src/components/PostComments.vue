<template>
  <div v-for="comment in comments" class="comment-item">
    <strong>{{ comment.name }} [{{ comment.email }}]:</strong>
    <div>{{ comment.body }}</div>
  </div>
</template>

<script setup lang="ts">
import { IComment } from '../types/API/comments';

interface IProps {
  comments: IComment[];
}

defineProps<IProps>();
</script>