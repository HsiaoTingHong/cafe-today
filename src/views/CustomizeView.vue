<template>
  <div class="customize-bg">
    <!-- 你的咖啡小日子 -->

    <!-- 左側選單 -->
    <div class="left-weight-20vw">
      <div class="child-nav-col">
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
    <div class="right-weight-80vw">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizeView',
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.customize-bg {
  @apply min-h-[82vh] flex flex-col
  sm:flex-row md:flex-row lg:flex-row xl:flex-row;
}

.left-weight-20vw {
  @apply w-[45vw] sm:w-[30vw] md:w-[25vw] my-2.5;
}
.right-weight-80vw {
  @apply w-[90vw] sm:w-[75vw] m-auto my-1;
}
</style>
