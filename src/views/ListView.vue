<template>
  <div class="min-h-[82vh]">
    <p>咖啡收藏</p>
    <!-- 左側選單 -->
    <div class="">
      <div class="">
        <router-link to="/list/listTaichung" href="#" class="">
          咖啡收藏-台中
        </router-link>
      </div>
    </div>
    <!-- 右側元件渲染位置 -->
    <div class="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
};
</script>
