<template>
  <div class="min-h-[82vh]">
    <!-- 咖啡收藏 -->

    <!-- 左側選單 -->
    <div class="">
      <div class="child-nav">
        <router-link to="/list/listTaichung" href="#" class="button click-color-light">
          台中咖啡店列表
        </router-link>
        <router-link to="/list/saveListView" href="#"
        class="button click-color-light saveCount-relative">
          待收藏清單

          <!-- 點擊加入收藏後，右上角的數量小圈圈 -->
          <span
            v-if="saveCount > 0"
            class="saveCount-absolute"
          >
            {{ saveCount }}
          </span>
        </router-link>
      </div>
    </div>

    <!-- 右側元件渲染位置 -->
    <div class="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useSaveStore from '@/stores/save';

const saveStore = useSaveStore();
const saveCount = computed(() => saveStore.itemCount);
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.saveCount-relative {
  @apply relative;
}

.saveCount-absolute {
  @apply bg-red-300 text-white text-xs rounded-full h-5 w-5
  flex items-center justify-center
  absolute top-1 right-0 translate-x-1/2 -translate-y-1/2;
}
</style>
