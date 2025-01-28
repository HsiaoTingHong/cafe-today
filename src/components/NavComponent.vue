<template>
  <header class="header">
    <nav class="nav wrapper">
      <router-link to="/"><p class="logo">cafe today?</p></router-link>
      <div class="md:hidden">
        <button class="hamburger" @click.prevent="toggleMenu" aria-label="選單">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
      <ul :class="['nav-list', { 'nav-active': isMenuOpen }]">
        <router-link to="/about" @click.prevent="toggleMenu">
          <li class="nav-item">關於</li>
        </router-link>
        <router-link to="/list" @click.prevent="toggleMenu">
          <li class="nav-item">列表</li>
        </router-link>
        <router-link to="/destiny" @click.prevent="toggleMenu">
          <li class="nav-item">抽籤</li>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavComponent',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.header {
  @apply font-mono bg-stone-400;
}

.nav {
  @apply flex justify-between items-center px-4 py-1 relative;
}

.logo {
  @apply text-nowrap text-2xl px-2 py-2
  text-stone-600 hover:text-white active:text-stone-300
  transition-all duration-500;
}

/* hamburger按鈕 */
.hamburger {
  @apply flex flex-col justify-center items-center w-10 h-10
  bg-transparent border-none cursor-pointer;
}

.hamburger-line {
  @apply w-5 h-0.5 bg-stone-200 mb-1 transition-all duration-100;
}

/* navbar */
.nav-list {
  @apply flex flex-col md:flex-row items-center
    absolute md:relative
    top-full left-0
    w-full md:w-auto
    bg-stone-400 md:bg-transparent
    py-2 md:py-0
    opacity-0 md:opacity-100
    -translate-y-4 md:translate-y-0
    pointer-events-none md:pointer-events-auto
    invisible md:visible
    space-y-2 md:space-y-0 md:space-x-4
    transition-all duration-300 ease-in-out;
}

/* navbar開啟時 */
.nav-active {
  @apply flex
    opacity-100
    translate-y-0
    pointer-events-auto
    visible;
}

.nav-item {
  @apply font-semibold
    text-nowrap text-sm
    px-3 py-1.5 mb-2 md:px-3 md:py-1.5 md:my-1.5
    border-1 rounded-md
    text-white hover:text-stone-600 active:text-stone-300
    transition-all duration-500
    w-full md:w-auto
    text-center;
}
</style>
