<template>
  <div class="screen-center">
    <img class="image" src="../assets/light.png" alt="light" />
    <p class="slogan font-amatic-sc">{{ title }}</p>
    <ul class="content">
      <li v-for="(item, index) in content" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      title: 'About Cafe Today',
      content: [
        '靈感：https://letswritetw.github.io/letswrite-food-check/',
        'API：https://cafenomad.tw/developers/docs/v1.2',
        '素材：https://vectorshelf.com/ ',
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.screen-center {
  @apply min-h-[82vh] flex flex-col items-center text-center gap-4;
}

.slogan {
  @apply text-stone-500 font-semibold text-3xl sm:text-5xl md:font-medium md:text-6xl my-3;
}

.content {
  @apply text-stone-600 md:text-stone-500 text-xs sm:text-sm md:text-base text-left;
}

.image {
  @apply opacity-40 w-50 -z-10;
}
</style>
