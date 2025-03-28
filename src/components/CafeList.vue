<template>
  <div class="">
    <h2 class="title">台中咖啡店列表</h2>

    <!-- API loading 中 -->
    <div v-if="loading">
      <LoadingOverlay :active="loading" color="#79716b"></LoadingOverlay>
    </div>

    <!-- API 錯誤 -->
    <div
      v-else-if="error"
      class="error"
    >
      {{ error }}
    </div>

    <!-- API 資料取得完成 -->
    <div
      v-else
      class="cafe-item-card"
    >
      <!-- 內層 Prop name = "外層 data 名稱" -->
      <CafeItem v-for="cafe in cafes" :key="cafe.id" :cafe="cafe" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useCafeStore } from '../stores/cafes';
import CafeItem from './CafeItem.vue';

const cafeStore = useCafeStore();

const cafes = computed(() => cafeStore.cafes);
const loading = computed(() => cafeStore.loading);
const error = computed(() => cafeStore.error);

// 取得 API
onMounted(async () => {
  await cafeStore.getCafes();
});
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.cafe-item-card {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4;
}
</style>
