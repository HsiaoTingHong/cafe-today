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

      const apiUrl = getCafesApiUrl('taichung');
      console.log('apiUrl路徑', apiUrl);

      this.loading = true;

      try {
        const response = await axios.get(apiUrl);
        this.cafes = response.data;
        this.error = null;
        this.apiLoaded = true;
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
