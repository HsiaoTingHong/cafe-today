import { ref } from 'vue';

export default function useDestinyShop(shopData) {
  const isDestiny = ref(false); // 是否正在抽籤
  const isDestinyDone = ref(false); // 是否抽籤完畢
  const selectedShop = ref('');

  const sleep = function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`已等待 ${ms} 毫秒`);
        resolve();
      }, ms);
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

  return {
    selectedShop,
    isDestiny,
    isDestinyDone,
    getDestinyShop,
  };
}
