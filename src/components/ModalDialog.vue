<template>
  <teleport to="body">
    <transition
      name="modal"
      role="dialog"
      ref="modal"
      aria-modal="true"
      aria-labelledby="modal-headline"
      v-show="isShowModal"
    >
        <div class="modal-mask">
          <div class="modal-wrapper" @click="outsideHandler">
            <div class="modal-container" ref="container">

              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
                <button class="modal-close" @click="closeModal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <slot>
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                </slot>
              </div>
            </div>
          </div>
        </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emits = defineEmits<{
  close: [],
  open: [],
}>()

const isShowModal = ref(false);
const container = ref();

const showModal = () => {
  isShowModal.value = true;
  emits('open');
}

const closeModal = () => {
  isShowModal.value = false;
  emits('close');
};

const outsideHandler = () => {
  closeModal()
};

defineExpose({
  showModal,
  closeModal,
});
</script>