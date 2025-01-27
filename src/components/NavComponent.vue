<template>
  <nav>
    <router-link to="/">首頁</router-link> |
    <router-link to="/about">關於</router-link> |
    <router-link to="/list">列表</router-link> |
    <router-link to="/destiny">抽籤</router-link>
  </nav>
  <p>NavbarComponent測試</p>
</template>

<script>
export default {
  name: 'NavComponent',
};
</script>
