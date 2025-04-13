/**
 * API 管理 - Cafe Nomad API
 * 根據當前環境和城市獲取咖啡廳 API URL
 * @param {string} city - 城市名稱
 * @returns {string} - 完整的 API URL
*/

// 其實要解決CORS的問題，正宗的解法，就是要請後端設置CORS header，這裡只是暫時的解法
const BASE_URL = 'https://cafenomad.tw/api/v1.2/cafes/';
const PROXY_SERVICE = 'https://thingproxy.freeboard.io/fetch/';

const getCafesApiUrl = (city) => {
  const API_URL = `${BASE_URL}${city}`;

  // 根據環境決定使用代理或直接訪問
  return process.env.NODE_ENV === 'production'
    ? `${PROXY_SERVICE}${encodeURIComponent(API_URL)}` // 生產環境使用 CORS proxy
    : `/api/v1.2/cafes/${city}`; // 開發環境使用 proxy
};

export default getCafesApiUrl;
