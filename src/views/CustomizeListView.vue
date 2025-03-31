<template>
  <!-- 巢狀路由-你的私藏咖啡巡禮 -->
  <h2 class="title">你的私藏咖啡巡禮</h2>

  <!-- 沒有資料 -->
  <div v-if="!items.length" class="no-data-bg">
    <p class="no-data-text">你的私藏咖啡巡禮清單是空的</p>
    <router-link to="/list/listTaichung" href="#" class="button click-color-mid">
      瀏覽咖啡店列表
    </router-link>
  </div>

  <!-- 有加入收藏 -->
  <div v-else>
    <div class="card-bg">
      <!-- 已收藏列表 -->
      <FavoriteItem
        :items="currentPageItems"
        :remove-item="removeItem"
      />
      <!-- 分頁按鈕 -->
      <PageComponent
        :current-page="currentPage"
        :total-items="totalItemsNumber"
        :items-per-page="itemsPerPage"
        @update:page="getPageChange"
      />
    </div>
  </div>
</template>

<script setup>
import {
  ref, onMounted, computed, watch,
} from 'vue';
import FavoriteItem from '@/components/FavoriteItem.vue';
import PageComponent from '@/components/PageComponent.vue';

// localStorage 資料
const items = ref([]);

onMounted(() => {
  items.value = JSON.parse(localStorage.getItem('savedCafes') || '[]').sort((a, b) => a.id.localeCompare(b.id));
});

// 分頁相關
const totalItemsNumber = computed(() => items.value.length);
const currentPage = ref(1);
const itemsPerPage = ref(5);

// 計算當前頁面顯示的項目
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

const removeItem = (id) => {
  let savedCafes = JSON.parse(localStorage.getItem('savedCafes') || '[]');

  // 過濾掉要刪除的咖啡店
  savedCafes = savedCafes.filter((cafe) => cafe.id !== id);

  // 將更新後的資料寫回 localStorage
  localStorage.setItem('savedCafes', JSON.stringify(savedCafes));

  // 更新畫面上的資料
  items.value = savedCafes;

  /* eslint-disable no-alert */
  alert('已從你的私藏巡禮刪除！');
  /* eslint-disable no-alert */
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.card-bg {
  @apply min-h-[82vh] w-auto;
}
</style>
