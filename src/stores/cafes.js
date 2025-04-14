import { defineStore } from 'pinia';
import axios from 'axios';
import getCafesApiUrl from '@/services/cafenomadApi';
import { getApiCache, setApiCache } from '@/functions/useCheckApiCache';

const useCafeStore = defineStore('cafes', {
  state: () => ({
    cafesByCity: {}, // { taipei: [...], taichung: [...], ... }
    loadingCities: {}, // { taipei: true/false, ... }
    errors: {}, // { taipei: '錯誤訊息' }
    preloadPromises: {}, // { taipei: Promise, taichung: Promise }
  }),

  actions: {
    async getCafesByCity(city) {
      // 檢查 localStorage 的 api cache 資料
      const cacheKey = `cafe_data_${city}`;
      const cachedData = getApiCache(cacheKey);

      if (cachedData) {
        this.cafesByCity[city] = cachedData;
        console.log('從 localStorage 獲取資料', city, cachedData.length);
        return cachedData;
      }

      // apiUrl
      const apiUrl = getCafesApiUrl(city);
      this.loadingCities[city] = true;

      try {
        const response = await axios.get(apiUrl);
        const cafes = response.data;

        this.cafesByCity[city] = cafes;
        this.errors[city] = null;

        // 存入 localStorage 的 api cache 資料
        setApiCache(cacheKey, cafes);
        console.log('選擇城市的咖啡店資料已更新', city, cafes.length);
        return cafes;
      } catch (error) {
        this.errors[city] = error.message || '取得資料失敗';
        console.error('API 請求失敗:', city, error);
        throw error;
      } finally {
        this.loadingCities[city] = false;
      }
    },

    // 預加載咖啡店資料
    preloadCity(city) {
      if (this.preloadPromises[city]) {
        return this.preloadPromises[city];
      }

      this.preloadPromises[city] = this.getCafesByCity(city).catch((error) => {
        console.error(`預加載 ${city} 資料失敗:`, error);
      });

      return this.preloadPromises[city];
    },

    // 把要預加載的城市陣列傳入依序執行 preloadCity
    preloadMultipleCities(cities = []) {
      let sequence = Promise.resolve();
      cities.forEach((city) => {
        sequence = sequence.then(() => this.preloadCity(city));
      });
      return sequence;
    },
  },
});

export default useCafeStore;
