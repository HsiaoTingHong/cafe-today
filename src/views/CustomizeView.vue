<template>
  <div class="min-h-[82vh]">
    <p>你的咖啡小日子</p>
    <!-- 左側選單 -->
    <div class="">
      <div class="">
        <router-link to="/customize/customizeList" href="#" class="">
          你的私藏咖啡巡禮
        </router-link>
        <router-link to="/customize/customizeDestiny" href="#" class="">
          下一站要去哪?
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
