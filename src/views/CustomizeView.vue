<template>
  <div class="min-h-[82vh]">
    <!-- 你的咖啡小日子 -->

    <!-- 左側選單 -->
    <div class="">
      <div class="child-nav">
        <router-link to="/customize/customizeList" href="#" class="button click-color-light">
          你的私藏咖啡巡禮
        </router-link>
        <router-link to="/customize/customizeDestiny" href="#" class="button click-color-light">
          下一站要去哪?
        </router-link>
        <router-link to="/customize/customizeEdit" href="#" class="button click-color-light">
          編輯你的口袋名單
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
  name: 'CustomizeView',
};
</script>
