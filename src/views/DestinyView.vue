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
    <transition>
      <div class="table-border" v-if="isDestinyDone">
        <table class="table-all" :id="`item-${selectedShop.id}`">
          <tr>
            <th class="table-td border-b border-r w-25 text-nowrap">店家名稱</th>
            <td class="table-td border-b">
              {{ selectedShop.name || "無" }}
            </td>
          </tr>
          <tr>
            <th class="table-td border-b border-r w-25 text-nowrap">城市</th>
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

        <!-- 加入收藏按鈕 -->
        <div class="checkout">
          <button
            @click="checkout"
            class="button click-color-mid"
          >
            點擊收藏到你的口袋名單
          </button>
        </div>
      </div>
    </transition>
    <p class="text-xs text-stone-400">
      營業時間可能不同，出發前請至官方網站確認
    </p>
    <!-- 當正在抽籤 or 尚未選擇城市時，按鈕會被禁用 -->
    <button
      class="btn click-color-light"
      @click.prevent="getDestinyShop"
      :disabled="isDestiny || !selectedOption"
    >
      {{ isDestiny ? "抽籤中..." : "點擊進行抽籤" }}
    </button>
    <img class="image" src="../assets/teaAndBook.png" alt="teaAndBook" />
  </div>

  <!-- ModalBox -->
  <ModalBox
    :visible="showModal"
    :message="modalMessage"
    :type="modalType"
    @close="closeModal"
  />
</template>

<script>
import axios from 'axios';
import { ref, reactive, watch } from 'vue';
import getCafesApiUrl from '@/services/cafenomadApi';
import useDestinyShop from '@/functions/useDestinyShop';
import ModalBox from '@/components/ModalBox.vue';
import useModal from '@/functions/useModal';
import { getApiCache, setApiCache } from '@/functions/useCheckApiCache';

export default {
  name: 'DestinyView',
  components: {
    ModalBox,
  },
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
    const shopData = ref([]);
    const isLoading = ref(false); // 是否正在取得 API 資料

    // 使用 useModal 邏輯
    const {
      showModal,
      modalMessage,
      modalType,
      openModal,
      closeModal,
    } = useModal();

    const getData = async function getData() {
      if (!selectedOption.value) {
        openModal('請選擇一個城市！', 'error');
        return;
      }

      // 檢查 localStorage 的 api cache 資料
      const cacheKey = `cafe_data_${selectedOption.value}`;
      const cachedData = getApiCache(cacheKey);

      if (cachedData) {
        shopData.value = cachedData;
        console.log('從 localStorage 獲取資料', selectedOption.value, shopData.value.length);
        return;
      }

      // apiUrl
      const apiUrl = getCafesApiUrl(selectedOption.value);
      console.log('apiUrl路徑', apiUrl);

      isLoading.value = true;

      try {
        const res = await axios.get(apiUrl);
        shopData.value = res.data;

        // 更新 localStorage 的 api cache 資料
        setApiCache(cacheKey, shopData.value);
        console.log('選擇城市的咖啡店資料已更新', selectedOption.value, shopData.value.length);
      } catch (error) {
        console.error('API 請求失敗！', error);
        openModal('取得資料失敗，請重新整理後再試一次，謝謝！', 'error');
      } finally {
        isLoading.value = false;
      }
    };

    // 使用 useDestinyShop 抽籤邏輯
    const {
      selectedShop,
      isDestiny,
      isDestinyDone,
      getDestinyShop,
    } = useDestinyShop(shopData);

    watch(selectedOption, (newVal) => {
      if (newVal) {
        getData(); // 只在選擇城市後才觸發 API 請求
      }
    });

    // 加入收藏
    const checkout = () => {
      // localStorage 資料
      const savedCafes = JSON.parse(localStorage.getItem('savedCafes') || '[]');

      // 檢查 localStorage 是否已有資料，有的話則不能送出資料
      const isAlreadySavedInStorage = savedCafes.some(
        (savedCafe) => savedCafe.id === selectedShop.value.id,
      );

      if (isAlreadySavedInStorage) {
        openModal('此咖啡店已在你的口袋名單中！', 'error');
        return;
      }

      // 將選擇的店家直接加入到 localStorage
      const cafeToSave = {
        id: selectedShop.value.id,
        name: selectedShop.value.name,
        city: selectedShop.value.city,
        address: selectedShop.value.address,
        open_time: selectedShop.value.open_time,
      };

      // 儲存到 localStorage
      savedCafes.push(cafeToSave);
      localStorage.setItem('savedCafes', JSON.stringify(savedCafes));
      openModal('已成功收藏到你的口袋名單！', 'success');
    };

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
      showModal,
      closeModal,
      modalMessage,
      modalType,
      checkout,
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
  @apply text-stone-400 font-semibold text-xl mt-4;
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

.checkout {
  @apply p-4;
}
</style>
