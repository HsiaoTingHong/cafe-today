<template>
  <div>
    <h2 class="title">台中咖啡店列表</h2>

    <!-- 搜尋 -->
    <div class="input-label light-bold-text">
      <label for="search">搜尋店名</label>
      <input
        type="text"
        class="input-text"
        id="search"
        v-model="cacheSearch"
        placeholder="search"
        @input="handleSearch"
      >
    </div>

    <!-- 列表 -->
    <transition>
      <!-- API loading 中 -->
      <div v-if="loading">
        <LoadingOverlay :active="loading" color="#79716b"></LoadingOverlay>
      </div>

      <!-- API 錯誤 -->
      <div v-else-if="error" class="error">
        {{ error }}
      </div>

      <!-- API 資料取得完成 -->
      <div v-else>
        <!-- 沒有資料時顯示提示 -->
        <div v-if="totalItemsNumber === 0" class="no-data">沒有找到咖啡店資料</div>

        <!-- 有資料時顯示卡片和分頁 -->
        <div v-else>
          <div class="cafe-item-card">
            <CafeItem
              v-for="cafe in currentPageItems"
              :key="cafe.id"
              :cafe="cafe"
            />
          </div>

          <!-- 分頁按鈕 -->
          <PageComponent
            :current-page="currentPage"
            :total-items="totalItemsNumber"
            :items-per-page="itemsPerPage"
            @update:page="getPageChange"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {
  onBeforeMount, computed, ref, watch,
} from 'vue';
import useCafeStore from '@/stores/cafes';
import usePagination from '@/functions/usePagination';
import CafeItem from './CafeItem.vue';
import PageComponent from './PageComponent.vue';

const cafeStore = useCafeStore();

// cafeStore 資料
const loading = computed(() => cafeStore.loading);
const error = computed(() => cafeStore.error);
const allCafes = computed(() => cafeStore.cafes || []);

// 搜尋相關
const cacheSearch = ref('');
const filteredCafes = computed(() => {
  if (!cacheSearch.value.trim()) {
    return allCafes.value;
  }

  const searchTerm = cacheSearch.value.toLowerCase().trim();
  return allCafes.value.filter((cafe) => cafe.name.toLowerCase().includes(searchTerm));
});

// 使用 usePagination 邏輯
const {
  totalItemsNumber,
  currentPage,
  itemsPerPage,
  currentPageItems,
  getPageChange,
  resetPage,
} = usePagination(filteredCafes, 24);

// 當搜尋條件改變時，重置分頁
const handleSearch = () => {
  resetPage();
};

// 監聽搜尋條件變更
watch(cacheSearch, () => {
  handleSearch();
});

// 取得 API
onBeforeMount(async () => {
  try {
    await cafeStore.getCafes();
    console.log('Cafes資料數量:', totalItemsNumber.value);
  } catch (e) {
    console.error('取得咖啡店資料時發生錯誤:', e);
  }
});
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.cafe-item-card {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8;
}

.no-data {
  @apply text-gray-500 font-medium text-center my-8;
}

.input-label {
  @apply flex justify-center items-center
  text-nowrap mb-5;
}

.input-text {
  @apply w-full ml-4 p-2 rounded-lg border-1 border-stone-300;
}
</style>
