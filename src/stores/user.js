import { defineStore } from 'pinia';

// defineStore()會帶入兩個參數
// 1. 此store的名稱 (這名稱可自己命名)
// 2. 屬性參數 (和元件的結構很像)
export default defineStore('User Store', {
  // data
  // state: () => {
  //     // state可以直接使用箭頭函式的形式
  //     return {
  //         // return一個資料結構
  //         name: 'Ting',
  //         cafeNumbers: 10,
  //     };
  // },
  state: () => ({
    // return一個資料結構
    name: 'Ting',
    cafeNumbers: 10,
  }),

  // computed
  getters: {
    // getters & actions使用物件的形式
    // 取得上方state的資料內容，使用箭頭函式
    getUserName: (state) => `我的名字是 ${state.name}`,
  },

  // methods
  actions: {
    // actions可以使用this，所以這邊的方法使用箭頭函式
    updateName() {
      this.name = 'Amy';
    },
  },
});
