import { ref, computed, watch } from 'vue';

export default function usePagination(items, defaultItemsPerPage = 5) {
  // 分頁相關
  const totalItemsNumber = computed(() => items.value.length);
  const currentPage = ref(1);
  const itemsPerPage = ref(defaultItemsPerPage);

  // 使用 computed 負責計算當前頁面顯示的項目
  // computed 只讀不寫，不能改變資料
  const currentPageItems = computed(() => {
    if (totalItemsNumber.value === 0) return [];

    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = Math.min(startIndex + itemsPerPage.value, totalItemsNumber.value);

    return items.value.slice(startIndex, endIndex);
  });

  // 使用 watch 來處理 currentPage
  watch(totalItemsNumber, (newTotal) => {
    if (newTotal > 0) {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      if (startIndex >= newTotal) {
        currentPage.value = 1; // 當總數變化時，重置頁碼
      }
    }
  });

  // 處理切換頁面事件
  const getPageChange = (page) => {
    currentPage.value = page;
    // 換頁時滾動到頁面頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    totalItemsNumber,
    currentPage,
    itemsPerPage,
    currentPageItems,
    getPageChange,
  };
}
