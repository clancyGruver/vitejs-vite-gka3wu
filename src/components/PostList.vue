<template>
  <div>
    <h2>Список постов</h2>
    <Loading v-if="loading" />
    <div v-else>
      <span v-if="!hasPosts">Посты отсутствуют</span>
      <template v-for="post in posts">
        <article class="post-item">
          <Component
            :is="post.status === 'rejected' ? PostRejected : PostResolved"
            :post="post"
          />
        </article>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import Loading from './Loading.vue';
import PostRejected from './PostRejected.vue';
import PostResolved from './PostResolved.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { getPosts } from '../tasks/promises';
import { range, shuffle } from '../tasks/arrays';
import { IPostWithComments } from '../types/tasks/promises';
import { isNumber } from '../tasks/typeGuards';

interface IProps {
  postIds: number[];
}

const props = withDefaults(defineProps<IProps>(), {
  postIds: () => [...range(1, 5)].filter(isNumber),
});

const posts = ref<PromiseSettledResult<IPostWithComments>[]>([]);
const loading = ref(true);

onMounted(async () => {
  await loadPosts();
});

const hasPosts = computed(() => !!posts.value.length);

watch(
  () => props.postIds,
  () => loadPosts(),
)

const loadPosts = async () => {
  loading.value = true;

  try {
    posts.value = shuffle(await getPosts(props.postIds));
  } catch {
    posts.value = [];
  } finally {
    loading.value = false;
  }
};
</script>
