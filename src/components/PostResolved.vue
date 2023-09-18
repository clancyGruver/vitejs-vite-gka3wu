<template>
  <PostItem :post="postItem" :isViewed="isViewed" @viewed="handleView" />
  <hr />
  <p><strong>Комментарии ({{ commentsCount }}):</strong></p>
  <PostComments :comments="post.value.comments" />
</template>

<script setup lang="ts">
import PostItem from './PostItem.vue';
import PostComments from './PostComments.vue';
import { IPostWithComments } from '../types/tasks/promises';
import { computed, ref, watch } from 'vue';

interface IViewable {
  isViewed: boolean;
}

interface IViewedPosts extends IViewable, IPostWithComments {};

interface IProps {
  post: PromiseFulfilledResult<IPostWithComments>;
  }

const props = defineProps<IProps>();

const postWithComments = ref<IViewedPosts>({...props.post.value, isViewed: false});

watch(
  () => props.post.value,
  (val: IPostWithComments) => postWithComments.value = {...val, isViewed: false},
)

const postItem = computed(() => postWithComments.value.post);
const commentsCount = computed(() => postWithComments.value.comments.length)
const isViewed = computed(() => postWithComments.value.isViewed)

const handleView = (newIsViewed: boolean) => {
  postWithComments.value.isViewed = newIsViewed;
};
</script>