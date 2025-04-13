const now = Date.now();

export function getApiCache(cacheKey) {
  // 取得 localStorage 資料
  const cachedItem = localStorage.getItem(cacheKey);

  // 定義 localStorage 過期時間 (30分鐘，單位毫秒)
  const cacheExpiration = 30 * 60 * 1000;

  // 檢查 localStorage 是否有資料且未過期
  if (cachedItem) {
    try {
      const cachedData = JSON.parse(cachedItem);

      if (cachedData.timestamp && now - cachedData.timestamp < cacheExpiration) {
        // 檢查是否有 timestamp 屬性以及是否未過期
        // 有資料的話回傳
        return cachedData.data;
      }

      if (cachedData.timestamp && now - cachedData.timestamp >= cacheExpiration) {
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

  // 沒有資料則回傳 false
  return false;
}

export function setApiCache(cacheKey, data) {
  // 存入 localStorage
  localStorage.setItem(cacheKey, JSON.stringify({
    data,
    timestamp: now,
  }));
}
