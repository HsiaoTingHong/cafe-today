<template>
  <div class="">
    <h2 class="title">待收藏清單</h2>

    <!-- 沒有資料 -->
    <div v-if="!items.length" class="no-data-bg">
      <p class="no-data-text">你的待收藏清單是空的</p>
      <router-link to="/list/listTaichung" href="#" class="button click-color-mid">
        瀏覽台中咖啡店列表
      </router-link>
    </div>

    <!-- 有加入收藏 -->
    <div v-else>
      <div class="card-bg">
        <div class="flex items-center">
          <input
            type="checkbox"
            id="select-all"
            class="checkbox"
            :checked="selectedItems.length === items.length"
            @change="toggleSelectAll"
          />
          <label for="select-all" class="light-bold-text">全選刪除</label>
        </div>

        <button
          v-if="selectedItems.length > 0"
          @click="removeSelected"
          class="button click-color-mid"
        >
          刪除已選項目
        </button>
      </div>

      <SaveItem
        :items="items"
        :is-selected="isSelected"
        :toggle-select="toggleSelect"
        :remove-item="removeItem"
      />

      <div class="save-count-bg">
        <div class="save-count-container">
          <span class="light-bold-text">總共收藏咖啡店:</span>
          <span class="light-bold-text-xl"
            >共{{ saveCount }}間</span
          >
        </div>
      </div>

      <div class="checkout">
        <button
          @click="checkout"
          class="button click-color-light"
        >
          確定全部收藏到你的口袋名單
        </button>
      </div>
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
import SaveItem from './SaveItem.vue';

// 使用 useModal 邏輯
const {
  showModal,
  modalMessage,
  modalType,
  openModal,
  closeModal,
} = useModal();

const saveStore = useSaveStore();

const items = computed(() => saveStore.items);
const selectedItems = computed(() => saveStore.selectedItems);
const saveCount = computed(() => saveStore.itemCount);

const isSelected = (id) => selectedItems.value.includes(id);

const toggleSelect = (id) => {
  saveStore.toggleSelectItem(id);
};

const toggleSelectAll = (event) => {
  if (event.target.checked) {
    // 全選
    saveStore.selectedItems = items.value.map((item) => item.id);
  } else {
    // 取消全選
    saveStore.selectedItems = [];
  }
};

const removeItem = (id) => {
  saveStore.removeFromSave(id);
};

const removeSelected = () => {
  saveStore.removeSelectedItems();
};

const checkout = () => {
  saveStore.checkout();

  // 收藏成功後顯示 ModalBox
  openModal(`收藏成功！已收藏 ${saveCount.value} 間咖啡店到你的口袋名單`, 'success');
  saveStore.clearSave();
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.no-data-bg {
  @apply bg-gray-100 p-8 rounded-lg text-center;
}

.no-data-text {
  @apply text-gray-600 mb-4;
}

.card-bg {
  @apply mb-4 flex justify-between items-center;
}

.save-count-bg {
  @apply bg-gray-50 p-4 rounded-lg mb-6;
}

.save-count-container {
  @apply flex justify-between items-center;
}

.checkout {
  @apply flex justify-end mb-10;
}
</style>
