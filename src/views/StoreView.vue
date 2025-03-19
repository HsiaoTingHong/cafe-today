<template>
  <p class="min-h-[82vh]">Pinia練習
  <br>
  <!-- 匯入的store資料 -->
  <!-- state的name -->
  {{ name }}, {{ getUserName }}, {{ cafeNumbers }}
  <br>
  <button type="button" @click="updateName">按我</button>
  </p>
</template>

<script>
// option API要另外匯入pinia的方法才能使用(composition API不需要)
import { mapState, mapActions } from 'pinia';
// 匯入store
import userStore from '@/stores/user';
// 有兩種形式：
// 1. composition API
// 2. option API (V)
export default {
  name: 'StoreView',
  // 匯入state或是getters
  computed: {
    // 使用展開的形式
    // ...mapState()要帶入2個參數
    // 1. store
    // 2. 要帶入的state或是getters，這兩種都可以進行匯入，用陣列字串的形式匯入
    ...mapState(userStore, ['name', 'getUserName', 'cafeNumbers']),
  },
  // 匯入actions
  methods: {
    ...mapActions(userStore, ['updateName']),
  },
};
</script>
