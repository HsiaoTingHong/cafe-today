<template>
  <div class="screen-center">
    <p class="slogan font-amatic-sc">
      Which cafe are you going to today ?
    </p>
    <p class="text-stone-700 text-sm">
      咖啡店太多間導致選擇障礙嗎<br />
      那就讓我們幫你決定吧
    </p>
    <router-link to="/destiny">
      <button class="btn font-amatic-sc">GO !</button>
    </router-link>
    <img class="image" src="../assets/coffeeBeans.png" alt="coffee beans">
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.screen-center {
  @apply min-h-[80vh] flex flex-col items-center justify-center text-center gap-4;
}

.slogan {
  @apply text-stone-400 font-semibold text-3xl sm:text-5xl md:font-medium md:text-6xl;
}

.btn {
  @apply flex w-30 items-center justify-center rounded-lg
  px-3 py-2 text-2xl font-semibold
  bg-stone-500 text-white
  hover:bg-stone-300 hover:text-stone-600
  active:border-1 active:bg-white
  transition-all duration-500;
}

.image {
  @apply opacity-40 w-50;
}
</style>
