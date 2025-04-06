<template>
  <div v-if="visible" class="modal-overlay">
    <div :class="['modal-box', boxClass]">
      <p class="modal-type">{{ boxTitleText }}</p>
      <p class="modal-message light-bold-text">{{ message }}</p>
      <button class="button click-color-light" @click="closeModal">確定</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

// props 相關
const props = defineProps({
  visible: Boolean,
  message: String,
  type: {
    type: String,
    default: 'success', // 預設為 success
  },
});

// 根據 type 計算
const boxClass = computed(() => (props.type === 'success' ? 'modal-text-green' : 'modal-text-red'));
const boxTitleText = computed(() => (props.type === 'success' ? '成功！' : '錯誤！'));

// emit 相關
const emit = defineEmits(['close']);
const closeModal = () => {
  emit('close');
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.modal-overlay {
  @apply fixed top-0 left-0 w-full h-full
  flex items-center justify-center z-50;
}

.modal-box {
  @apply p-6 rounded-2xl shadow-xl
  flex flex-col justify-center items-center
  min-w-[300px] md:min-w-[325px]
  min-h-[200px] md:min-h-[225px]
  text-center bg-white border-1 border-stone-300;
}

.modal-type {
  @apply mb-4 text-xl font-semibold;
}

.modal-message {
  @apply mb-10;
}

.modal-text-green {
  @apply text-lime-700;
}

.modal-text-red {
  @apply text-red-700;
}
</style>
