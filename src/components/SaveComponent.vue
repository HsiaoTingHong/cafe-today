<template>
  <div class="">
    <h2 class="title">收藏起來</h2>

    <!-- 沒有資料 -->
    <div v-if="!items.length" class="no-data-bg">
      <p class="no-data-text">您的收藏清單是空的</p>
      <router-link to="/list/listTaichung" href="#" class="button click-color-mid">
        瀏覽咖啡店列表
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
          <label for="select-all" class="dark-text">全選</label>
        </div>

        <button
          v-if="selectedItems.length > 0"
          @click="removeSelected"
          class="button click-color-mid"
        >
          刪除已選項目
        </button>
      </div>

      <div class="card">
        <div class="card-container">
          <div
            v-for="item in items"
            :key="item.id"
            class="flex items-center"
          >
            <input
              type="checkbox"
              :id="`item-${item.id}`"
              class="checkbox"
              :checked="isSelected(item.id)"
              @change="toggleSelect(item.id)"
            />
            <label :for="`item-${item.id}`" class="light-bold-text-xs"></label>
            <div class="card-text">
              <h3 class="dark-text">{{ item.name }}</h3>
              <p class="light-bold-text-xs">{{ item.address }}</p>
            </div>
            <button
              @click="removeItem(item.id)"
              class="button click-color-mid"
            >
              刪除
            </button>
          </div>
        </div>
      </div>

      <div class="save-count-bg">
        <div class="save-count-container">
          <span class="dark-text">總共收藏咖啡店:</span>
          <span class="light-bold-text-xl"
            >共 {{ saveCount }} 間</span
          >
        </div>
      </div>

      <div class="flex justify-end">
        <button
          @click="checkout"
          class="button click-color-light"
        >
          確定收藏到你的私藏咖啡巡禮
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSaveStore } from '../stores/save';

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

.checkbox {
  @apply h-5 w-5 text-stone-600 mx-3;
}

.card-bg {
  @apply mb-4 flex justify-between items-center;
}

.card {
  @apply bg-white rounded-lg shadow-md overflow-hidden p-3 mb-6
  border-1 border-stone-300;
}

.card-container {
  @apply divide-y divide-stone-300;
}

.card-text {
  @apply ml-3 my-3 flex-grow;
}

.save-count-bg {
  @apply bg-gray-50 p-4 rounded-lg mb-6;
}

.save-count-container {
  @apply flex justify-between items-center;
}
</style>
