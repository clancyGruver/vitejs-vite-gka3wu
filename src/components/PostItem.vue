<template>
  <h4 class="post-title" :class="{'post-title--viewed': isViewed}">
    <DefaultButton @click="openModal">
      <UseSvg name="pencil" />
    </DefaultButton>
    {{ post.title }}
    <small>(id: {{ post.id }})</small>
  </h4>
  <p>{{ post.body }}</p>

  <ModalDialog ref="modal">
    Вы точно просмотрели пост?
    <template #header>
      Редактирование поста с id={{ post.id }}
    </template>
    <template #footer>
      <DefaultButton @click="yesHandler" type="success">
        ДА
      </DefaultButton>
      <DefaultButton @click="noHandler">
        Нет
      </DefaultButton>
    </template>
  </ModalDialog>
</template>

<script setup lang="ts">
import UseSvg from './useSvg.vue/index.vue';
import ModalDialog from "./ModalDialog.vue";
import DefaultButton from "./DefaultButton.vue";
import type { IPost } from '../types/API/posts';
import { ref, watch } from 'vue';

interface IProps {
  post: IPost;
  isViewed: boolean;
}

const props = defineProps<IProps>();

const emits = defineEmits<{
  viewed: [isViewed: boolean],
}>()

const modal = ref<InstanceType<typeof ModalDialog>>();
const isViewed = ref(props.isViewed);

watch(
  () => props.isViewed,
  (newVal) => isViewed.value = newVal,
);

const openModal = () => {
  modal.value?.showModal();
};

const closeModal = () => {
  modal.value?.closeModal();
};

const yesHandler = () => {
  emits('viewed', true);
  closeModal();
};

const noHandler = () => {
  emits('viewed', false);
  closeModal();
};
</script>