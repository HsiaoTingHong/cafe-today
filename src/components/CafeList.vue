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
        <div v-if="totalCafesNumber === 0" class="no-data">沒有找到咖啡店資料</div>

        <!-- 有資料時顯示卡片和分頁 -->
        <div v-else>
          <div class="cafe-item-card">
            <CafeItem
              v-for="cafe in currentPageCafes"
              :key="cafe.id"
              :cafe="cafe"
            />
          </div>

          <!-- 分頁按鈕 -->
          <PageComponent
            :current-page="currentPage"
            :total-items="totalCafesNumber"
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
  onBeforeMount, computed, watch, ref,
} from 'vue';
import { useCafeStore } from '../stores/cafes';
import CafeItem from './CafeItem.vue';
import PageComponent from './PageComponent.vue';

const cafeStore = useCafeStore();

// cafeStore 資料
const loading = computed(() => cafeStore.loading);
const error = computed(() => cafeStore.error);
const allCafes = computed(() => cafeStore.cafes || []);
const totalCafesNumber = computed(() => allCafes.value.length);

// 分頁相關
const currentPage = ref(1);
const itemsPerPage = ref(24);

// 使用 computed 負責計算當前頁面的數據
// computed 只讀不寫，不能改變資料
const currentPageCafes = computed(() => {
  if (totalCafesNumber.value === 0) return [];

  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = Math.min(startIndex + itemsPerPage.value, totalCafesNumber.value);

  return allCafes.value.slice(startIndex, endIndex);
});

// 使用 watch 來處理 currentPage
watch(totalCafesNumber, (newTotal) => {
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

// 取得 API
onBeforeMount(async () => {
  try {
    await cafeStore.getCafes();
    console.log('Cafes資料數量:', totalCafesNumber.value);
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
