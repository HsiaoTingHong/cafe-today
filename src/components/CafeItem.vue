<template>
  <div class="card">
    <div class="card-container">
      <h3 class="dark-text">{{ cafe.name }}</h3>
      <span class="light-bold-text-xs">{{ cafe.city }}</span>
      <span class="dark-text-xs">{{ cafe.address }}</span>
      <span :class="statusCafe">{{ cafe.open_time || '無' }}</span>

      <!-- 加入收藏按鈕 -->
      <button
        :disabled="cafe.open_time === ''"
        @click="addToSave"
        :class="isAvailable
            ? 'button click-color-mid'
            : 'button not-allowed'"
      >
        {{ isAvailable ? "加入待收藏" : "沒有營業時間" }}
      </button>
    </div>
  </div>

  <!-- ModalBox -->
  <ModalBox
    :visible="showModal"
    :message="modalMessage"
    :type="modalType"
    @close="closeModal"
  />
</template>

<script setup>
import { computed } from 'vue';
import useSaveStore from '@/stores/save';
import ModalBox from '@/components/ModalBox.vue';
import useModal from '@/functions/useModal';

// 使用 useModal 邏輯
const {
  showModal,
  modalMessage,
  modalType,
  openModal,
  closeModal,
} = useModal();

// 接收外層傳進來的 cafe 資料
const props = defineProps({
  cafe: {
    type: Object,
    required: true,
  },
});

const saveStore = useSaveStore();

const isAvailable = computed(
  () => props.cafe.open_time !== '',
);

const statusCafe = computed(() => {
  switch (props.cafe.open_time) {
    case '':
      return 'text-gray-500 font-medium text-xs';
    default:
      return 'text-stone-400 font-medium text-xs';
  }
});

// 加入收藏
const addToSave = () => {
  if (isAvailable.value) {
    const addToSaveResult = saveStore.addToSave(props.cafe);

    if (addToSaveResult) {
      openModal('加入待收藏清單！', 'success');
    } else {
      openModal('此咖啡店已在你的口袋名單中！', 'error');
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.card {
  @apply bg-white rounded-lg shadow-lg overflow-hidden p-3
  border-1 border-stone-300;
}

.card-container {
  @apply flex flex-col gap-1 h-full;
}
</style>
