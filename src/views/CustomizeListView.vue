<template>
  <!-- 巢狀路由-你的口袋名單 -->
  <h2 class="title">你的口袋名單</h2>

  <!-- 沒有資料 -->
  <div v-if="!items.length" class="no-data-bg">
    <p class="no-data-text">你的口袋名單是空的</p>
    <router-link to="/list/listTaichung" href="#" class="button click-color-mid">
      瀏覽台中咖啡店列表
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

  <!-- ModalBox -->
  <ModalBox
    :visible="showModal"
    :message="modalMessage"
    :type="modalType"
    @close="closeModal"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import FavoriteItem from '@/components/FavoriteItem.vue';
import PageComponent from '@/components/PageComponent.vue';
import usePagination from '@/functions/usePagination';
import ModalBox from '@/components/ModalBox.vue';
import useModal from '@/functions/useModal';

// localStorage 資料
const items = ref([]);

onMounted(() => {
  items.value = JSON.parse(localStorage.getItem('savedCafes') || '[]').sort((a, b) => a.id.localeCompare(b.id));
});

// 使用 useModal 邏輯
const {
  showModal,
  modalMessage,
  modalType,
  openModal,
  closeModal,
} = useModal();

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

  // 過濾掉要刪除的咖啡店，將更新後的資料寫回 localStorage
  savedCafes = savedCafes.filter((cafe) => cafe.id !== id);
  localStorage.setItem('savedCafes', JSON.stringify(savedCafes));

  // 更新畫面上的資料
  items.value = savedCafes.sort((a, b) => a.id.localeCompare(b.id));
  openModal('已從你的口袋名單刪除！', 'success');
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.card-bg {
  @apply min-h-[82vh] w-auto;
}
</style>
