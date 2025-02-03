<template>
  <LoadingOverlay :active="isLoading" color="#79716b"></LoadingOverlay>
  <div class="screen-center">
    <p class="slogan">尋找你的咖啡靈魂</p>
    <div class="container">
      <label for="dropdown" class="label">選擇城市：</label>
      <select id="dropdown" v-model="selectedOption" class="select">
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
    <div class="table-border" v-if="isDestinyDone">
      <table class="table-all">
        <tr>
          <th class="table-td border-b border-r w-25 text-nowrap">店家名稱</th>
          <td class="table-td border-b">
            {{ selectedShop.name || "無" }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-b border-r">地址</th>
          <td class="table-td border-b">
            {{ selectedShop.address || "無" }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-b border-r">咖啡好喝</th>
          <td class="table-td border-b">
            {{ selectedShop.tasty || "無" }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-b border-r">價格便宜</th>
          <td class="table-td border-b">
            {{ selectedShop.cheap || "無" }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-b border-r">裝潢音樂</th>
          <td class="table-td border-b">
            {{ selectedShop.music || "無" }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-b border-r">wifi穩定</th>
          <td class="table-td border-b">
            {{ selectedShop.wifi || "無" }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-b border-r">插座多</th>
          <td class="table-td border-b">
            {{ selectedShop.socket || "無" }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-b border-r">有無限時</th>
          <td class="table-td border-b">
            {{ selectedShop.limited_time || "無" }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-b border-r">營業時間</th>
          <td class="table-td border-b">
            {{ selectedShop.open_time || "無" }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-r">官網連結</th>
          <td class="table-td url-cell">
            <a
              :href="selectedShop.url"
              target="_blank"
              rel="noreferrer noopener"
              class="url-link"
            >
              {{ selectedShop.url || "無" }}
            </a>
          </td>
        </tr>
      </table>
    </div>
    <p class="text-xs text-stone-400">
      營業時間可能不同，出發前請至官方網站確認
    </p>
    <!-- 當正在抽籤 or 尚未選擇城市時，按鈕會被禁用 -->
    <button
      class="btn btn-start click-color-light"
      @click.prevent="getDestinyShop"
      :disabled="isDestiny || !selectedOption"
    >
      {{ isDestiny ? "抽籤中..." : "點擊進行抽籤" }}
    </button>
    <img class="image" src="../assets/teaAndBook.png" alt="teaAndBook" />
  </div>
</template>

<script>
import axios from 'axios';
import { ref, reactive, watch } from 'vue';

export default {
  name: 'DestinyView',
  setup() {
    const selectedOption = ref('');
    const options = reactive([
      { value: '', label: '請先選擇城市' },
      { value: 'Keelung', label: '基隆' },
      { value: 'taipei', label: '台北' },
      { value: 'taoyuan', label: '桃園' },
      { value: 'hsinchu', label: '新竹' },
      { value: 'miaoli', label: '苗栗' },
      { value: 'taichung', label: '台中' },
      { value: 'changhua', label: '彰化' },
      { value: 'nantou', label: '南投' },
      { value: 'yunlin', label: '雲林' },
      { value: 'chiayi', label: '嘉義' },
      { value: 'tainan', label: '台南' },
      { value: 'kaohsiung', label: '高雄' },
      { value: 'pingtung', label: '屏東' },
      { value: 'yilan', label: '宜蘭' },
      { value: 'hualien', label: '花蓮' },
      { value: 'taitung', label: '台東' },
      { value: 'penghu', label: '澎湖' },
    ]);
    const selectedShop = ref('');
    const shopData = ref([]);
    const isLoading = ref(false); // 是否正在取得 API 資料
    const isDestiny = ref(false); // 是否正在抽籤
    const isDestinyDone = ref(false); // 是否抽籤完畢

    const getData = async function getData() {
      if (!selectedOption.value) {
        console.warn('請選擇一個城市!');
        return;
      }

      // apiUrl：在 vue.config.js 設定 proxy 前綴 & 綁定選擇的城市
      // const apiUrl = `/api/v1.2/cafes/${this.selectedOption}`;

      // 根據環境使用不同的 API URL
      const API_URL = `https://cafenomad.tw/api/v1.2/cafes/${selectedOption.value}`;
      const PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(API_URL)}`;

      const apiUrl = process.env.NODE_ENV === 'production'
        ? PROXY_URL // 生產環境使用 CORS proxy
        : `/api/v1.2/cafes/${selectedOption.value}`; // 開發環境使用 proxy

      isLoading.value = true;

      try {
        const res = await axios.get(apiUrl);
        shopData.value = res.data;
        console.log('選擇城市的咖啡店數量', selectedOption.value, shopData.value.length);
      } catch (error) {
        console.error('API 請求失敗!', error);
      } finally {
        isLoading.value = false;
      }
    };

    const sleep = function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    const getDestinyShop = async function getDestinyShop() {
      isDestiny.value = true;
      isDestinyDone.value = false;
      selectedShop.value = '';

      try {
        await sleep(3000);
        const randomIndex = Math.floor(Math.random() * shopData.value.length);
        selectedShop.value = shopData.value[randomIndex];
        isDestinyDone.value = true;
      } catch (error) {
        console.error('抽籤過程發生錯誤:', error);
      } finally {
        isDestiny.value = false;
      }
    };

    watch(selectedOption, (newVal) => {
      if (newVal) {
        getData(); // 只在選擇城市後才觸發 API 請求
      }
    });

    return {
      selectedOption,
      options,
      selectedShop,
      shopData,
      isLoading,
      isDestiny,
      isDestinyDone,
      getData,
      getDestinyShop,
    };
  },
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.screen-center {
  @apply min-h-[82vh] flex flex-col items-center justify-center text-center gap-4;
}

.slogan {
  @apply text-stone-400 font-semibold text-xl;
}

.container {
  @apply w-60 flex justify-center items-center;
}

.label {
  @apply w-30 font-semibold text-stone-500 text-sm text-right;
}

.select {
  @apply w-full p-1
  border border-stone-300 hover:border-stone-400
  rounded-lg shadow-sm
  focus:ring-2 focus:ring-stone-500 focus:outline-none
  bg-white text-stone-700 text-center;
}

.text {
  @apply font-semibold text-stone-500 text-sm;
}

.selected-text {
  @apply font-semibold text-stone-700;
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

.url-cell {
  @apply max-w-[200px] md:max-w-[300px]
  break-all truncate;
}

.url-link {
  @apply hover:underline
  inline-block w-full break-all
  text-stone-500;
}

.btn {
  @apply flex w-32 items-center justify-center rounded-lg
  px-4 py-3 border-1 text-sm font-medium;
}

.btn:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.image {
  @apply opacity-40 w-65;
}
</style>
