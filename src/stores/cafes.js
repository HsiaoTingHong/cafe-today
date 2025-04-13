import { defineStore } from 'pinia';
import axios from 'axios';
import getCafesApiUrl from '@/services/cafenomadApi';
import { getApiCache, setApiCache } from '@/functions/useCheckApiCache';

const useCafeStore = defineStore('cafes', {
  state: () => ({
    cafes: [],
    loading: false,
    error: null,
    apiLoaded: false, // 追蹤是否已經載入過 API
  }),
  actions: {
    // 取得咖啡店清單 API
    async getCafes() {
      if (this.apiLoaded) {
        return;
      }

      // 檢查 localStorage 的 api cache 資料
      const cacheKey = 'cafe_data_taichung';
      const cachedData = getApiCache(cacheKey);

      if (cachedData) {
        this.cafes = cachedData;
        console.log('從 localStorage 獲取資料', 'taichung', this.cafes.length);
        return;
      }

      // apiUrl
      const apiUrl = getCafesApiUrl('taichung');
      console.log('apiUrl路徑', apiUrl);

      this.loading = true;

      try {
        const response = await axios.get(apiUrl);
        this.cafes = response.data;
        this.error = null;
        this.apiLoaded = true;

        // 存入 localStorage 的 api cache 資料
        setApiCache(cacheKey, this.cafes);
        console.log('選擇城市的咖啡店資料已更新', 'taichung', this.cafes.length);
      } catch (error) {
        this.error = '取得資料失敗，請聯絡管理人員' || error.message;
        console.error('Error fetching cafes:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});

export default useCafeStore;
