<template>
  <div class="pagination-container">
    <div class="pagination-bg">
      <!-- 上一頁按鈕 -->
      <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage <= 1"
        class="pagination-button"
        :class="{ 'not-allowed': currentPage <= 1 }"
      >
        上一頁
      </button>

      <!-- 頁碼按鈕 -->
      <div class="flex space-x-1">
        <button
          v-for="page in displayedPages"
          :key="page"
          @click="changePage(page)"
          class="pagination-number"
          :class="{ 'currentPage-bg': page === currentPage }"
        >
          {{ page }}
        </button>
      </div>

      <!-- 下一頁按鈕 -->
      <button
        @click="changePage(currentPage + 1)"
        :disabled="currentPage >= totalPages"
        class="pagination-button"
        :class="{ 'not-allowed': currentPage >= totalPages }"
      >
        下一頁
      </button>
    </div>

    <!-- 顯示資料筆數文字 -->
    <div class="text-center light-bold-text-xs">
      <span v-if="totalItems > 0">
        顯示 {{ totalItems }} 筆資料中的第 {{ startItem }} ~ {{ endItem }} 筆
      </span>
      <span v-else>沒有資料</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// 接收外層傳進來的分頁資料
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
    default: 1,
  },
  totalItems: {
    type: Number,
    required: true,
    default: 0,
  },
  itemsPerPage: {
    type: Number,
    default: 24,
  },
});

// 計算總頁數 (確保至少為1頁)
const totalPages = computed(() => Math.max(1, Math.ceil(props.totalItems / props.itemsPerPage)));

// 顯示項目的起始和結束索引
const startItem = computed(() => {
  if (props.totalItems === 0) return 0;
  return Math.min(
    (props.currentPage - 1) * props.itemsPerPage + 1,
    props.totalItems,
  );
});

const endItem = computed(() => Math.min(props.currentPage * props.itemsPerPage, props.totalItems));

// 決定要顯示哪些頁碼按鈕 (安全處理可能的錯誤)
const displayedPages = computed(() => {
  // 確保總頁數至少為 1
  const total = totalPages.value || 1; // 確保不會是 NaN
  if (total <= 0) return [1];

  const pages = [];
  const maxVisibleButtons = Math.min(5, total);

  if (total <= maxVisibleButtons) {
    for (let i = 1; i <= total; i += 1) {
      pages.push(i);
    }
  } else {
    const halfSize = Math.floor(maxVisibleButtons / 2);
    let startPage = Math.max(1, props.currentPage - halfSize);
    const endPage = Math.min(total, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i += 1) {
      pages.push(i);
    }
  }

  return pages;
});

// 向外層傳送新的頁數
const emit = defineEmits(['update:page']);

// 切換頁面事件
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  emit('update:page', page);
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.pagination-container {
  @apply mt-6 mb-10;
}

.pagination-button {
  @apply h-8 px-3 py-1 rounded border border-stone-300
  text-sm text-stone-600 font-semibold
  bg-white hover:bg-stone-200 transition-colors;
}

.pagination-number {
  @apply w-8 h-8 flex items-center justify-center rounded
  text-stone-600 font-semibold
  border border-stone-300 bg-white hover:bg-stone-200 transition-colors;
}

.pagination-bg {
  @apply flex items-center justify-center space-x-2 my-4
}

.currentPage-bg {
  @apply bg-stone-500 text-white;
}
</style>
