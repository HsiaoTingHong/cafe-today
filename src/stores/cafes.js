import { defineStore } from 'pinia';
import axios from 'axios';
import getCafesApiUrl from '@/services/cafenomadApi';

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

      // 檢查 localStorage
      const cacheKey = 'cafe_data_taichung';
      const cachedItem = localStorage.getItem(cacheKey);
      const now = Date.now();

      // 定義 localStorage 過期時間 (30分鐘，單位毫秒)
      const cacheExpiration = 30 * 60 * 1000;

      // 檢查 localStorage 是否有資料且未過期
      if (cachedItem) {
        try {
          const cachedData = JSON.parse(cachedItem);

          // 檢查是否有 timestamp 屬性以及是否未過期
          if (cachedData.timestamp && now - cachedData.timestamp < cacheExpiration) {
            this.cafes = cachedData.data;
            console.log('從 localStorage 獲取資料', 'taichung', this.cafes.length);
            return;
          } if (cachedData.timestamp && now - cachedData.timestamp >= cacheExpiration) {
            // 已過期則清除資料
            localStorage.removeItem(cacheKey);
            console.log('localStorage 已過期(超過30分鐘)，已清除');
          }
        } catch (error) {
          // 如果有錯誤清除資料
          localStorage.removeItem(cacheKey);
          console.error('localStorage 資料錯誤', error);
        }
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

        // 存入 localStorage
        localStorage.setItem(cacheKey, JSON.stringify({
          data: this.cafes,
          timestamp: now,
        }));
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
