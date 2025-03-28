import { defineStore } from 'pinia';
import axios from 'axios';

export const useCafeStore = defineStore('cafes', {
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

      const API_URL = 'https://cafenomad.tw/api/v1.2/cafes/taichung';
      const PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(API_URL)}`;

      const apiUrl = process.env.NODE_ENV === 'production'
        ? PROXY_URL // 生產環境使用 CORS proxy
        : '/api/v1.2/cafes/taichung'; // 開發環境使用 proxy

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
