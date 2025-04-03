<template>
  <div>
    <h2 class="title">台中咖啡店列表</h2>
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
import { onBeforeMount, computed } from 'vue';
import useCafeStore from '@/stores/cafes';
import usePagination from '@/functions/usePagination';
import CafeItem from './CafeItem.vue';
import PageComponent from './PageComponent.vue';

const cafeStore = useCafeStore();

// cafeStore 資料
const loading = computed(() => cafeStore.loading);
const error = computed(() => cafeStore.error);
const allCafes = computed(() => cafeStore.cafes || []);

// 使用 usePagination 邏輯
const {
  totalItemsNumber,
  currentPage,
  itemsPerPage,
  currentPageItems,
  getPageChange,
} = usePagination(allCafes, 24);

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
</style>
