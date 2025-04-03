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
import { ref, onMounted } from 'vue';
import FavoriteItem from '@/components/FavoriteItem.vue';
import PageComponent from '@/components/PageComponent.vue';
import usePagination from '@/functions/usePagination';

// localStorage 資料
const items = ref([]);

onMounted(() => {
  items.value = JSON.parse(localStorage.getItem('savedCafes') || '[]').sort((a, b) => a.id.localeCompare(b.id));
});

// 使用 usePagination 邏輯
const {
  totalItemsNumber,
  currentPage,
  itemsPerPage,
  currentPageItems,
  getPageChange,
} = usePagination(items, 5);

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
