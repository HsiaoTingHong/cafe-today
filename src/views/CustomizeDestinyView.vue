<template>
  <!-- 巢狀路由-下一站要去哪? -->
  <h2 class="title">下一站要去哪?</h2>
  <div class="screen-center">
    <transition>
      <div class="table-border" v-if="isDestinyDone">
        <table
          class="table-all"
          :id="`item-${selectedShop.id}`">
          <tr>
            <th class="table-td border-b border-r w-25 text-nowrap">店家名稱</th>
            <td class="table-td border-b">
              {{ selectedShop.name || "無" }}
            </td>
          </tr>
          <tr>
            <th class="table-td border-b border-r">城市</th>
            <td class="table-td border-b">
              {{ selectedShop.city || "無" }}
            </td>
          </tr>
          <tr>
            <th class="table-td border-b border-r">地址</th>
            <td class="table-td border-b">
              <a
                :href="`https://www.google.com/maps/search/${encodeURIComponent(selectedShop.name)}`"
                target="_blank" rel="noreferrer noopener"
                class="underline"
                >
                {{ selectedShop.address || "無" }}<br />
                (前往 Google 地圖)
              </a>
            </td>
          </tr>
          <tr>
            <th class="table-td border-b border-r">營業時間</th>
            <td class="table-td border-b">
              {{ selectedShop.open_time || "無" }}
            </td>
          </tr>
        </table>
      </div>
    </transition>
    <button
      class="btn btn-start click-color-light"
      @click.prevent="getDestinyShop"
      :disabled="isDestiny"
    >
      {{ isDestiny ? "抽籤中..." : "點擊進行抽籤" }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import useDestinyShop from '@/functions/useDestinyShop';

export default {
  name: 'CustomizeDestinyView',
  setup() {
    // localStorage 資料
    const savedCafes = ref([]);

    savedCafes.value = JSON.parse(localStorage.getItem('savedCafes') || '[]');

    // 使用 useDestinyShop 抽籤邏輯
    const {
      selectedShop,
      isDestiny,
      isDestinyDone,
      getDestinyShop,
    } = useDestinyShop(savedCafes);

    return {
      selectedShop,
      savedCafes,
      isDestiny,
      isDestinyDone,
      getDestinyShop,
    };
  },
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.screen-center {
  @apply min-h-[82vh] flex flex-col items-center text-center gap-4 my-4;
}

.table-border {
  @apply rounded-lg overflow-hidden
  border-2 border-stone-400;
}

.table-all {
  @apply w-[80vw] md:w-[50vw]
  text-stone-600 border-collapse;
}

.table-td {
  @apply px-3 py-2
  text-xs md:text-sm
  border-stone-400
  break-all overflow-hidden;
}

.btn {
  @apply flex w-32 items-center justify-center rounded-lg
  px-4 py-3 border-1 text-sm font-medium;
}

.btn:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
