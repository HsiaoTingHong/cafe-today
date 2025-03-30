import { defineStore } from 'pinia';

const useSaveStore = defineStore('save', {
  state: () => ({
    items: [],
    selectedItems: [],
  }),
  getters: {
    totalAmount: (state) => state.items.reduce((total, item) => total + item.address, 0),
    itemCount: (state) => state.items.length,
  },
  actions: {
    addToSave(cafe) {
      // 檢查咖啡店是否已在準備收藏清單中
      const existingItem = this.items.find((item) => item.id === cafe.id);
      if (!existingItem) {
        this.items.push({
          id: cafe.id,
          name: cafe.name,
          city: cafe.city,
          address: cafe.address,
          open_time: cafe.open_time,
        });
      }
    },
    removeFromSave(cafeId) {
      this.items = this.items.filter((item) => item.id !== cafeId);
      // 同時從選中項目中移除
      this.selectedItems = this.selectedItems.filter((id) => id !== cafeId);
    },
    toggleSelectItem(cafeId) {
      const index = this.selectedItems.indexOf(cafeId);
      if (index === -1) {
        this.selectedItems.push(cafeId);
      } else {
        this.selectedItems.splice(index, 1);
      }
    },
    removeSelectedItems() {
      this.items = this.items.filter(
        (item) => !this.selectedItems.includes(item.id),
      );
      this.selectedItems = [];
    },
    clearSave() {
      this.items = [];
      this.selectedItems = [];
    },
    checkout() {
      /* eslint-disable no-alert */
      alert(`收藏成功！總共收藏 ${this.itemCount} 間咖啡店`);
      /* eslint-disable no-alert */
      this.clearSave();
    },
  },
});

export default useSaveStore;
