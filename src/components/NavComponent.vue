<template>
  <header class="header">
    <nav class="nav wrapper">
      <router-link to="/" @click.prevent="closeMenu">
        <p class="logo click-color-dark font-amatic-sc">cafe today?</p>
      </router-link>
      <div class="md:hidden">
        <button class="hamburger" @click.prevent="toggleMenu" aria-label="選單">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
      <ul :class="['nav-list', { 'nav-active': isMenuOpen }]">
        <router-link to="/about" @click.prevent="closeMenu">
          <li class="button click-color-light">關於</li>
        </router-link>
        <router-link to="/destiny" @click.prevent="closeMenu">
          <li class="button click-color-light">今天喝哪家?</li>
        </router-link>
        <router-link to="/list" @click.prevent="closeMenu">
          <li class="button click-color-light">台中咖啡店列表</li>
        </router-link>
        <router-link to="/Customize" @click.prevent="closeMenu">
          <li class="button click-color-light">你的口袋名單</li>
        </router-link>

        <!-- 登入 登出 註冊 -->
        <button
          type="button"
          class="button click-color-light"
          @click.prevent="goToLogin"
          v-if="!isLoggedIn"
        >
          登入
        </button>
        <button
          type="button"
          class="button click-color-light"
          @click.prevent="handleLogOut"
          v-if="isLoggedIn"
        >
          登出
        </button>
        <button
          type="button"
          class="button click-color-light"
          @click.prevent="goToRegister"
          v-if="!isLoggedIn"
        >
          註冊
        </button>
      </ul>
    </nav>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from '@/router';

export default {
  name: 'NavComponent',
  data() {
    return {
      isMenuOpen: false,
      isLoggedIn: false, // 判斷是否登入
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      if (this.isMenuOpen === true) {
        this.isMenuOpen = !this.isMenuOpen;
      }
    },
    goToRegister() { // 跳至註冊頁
      router.push('/register');
      this.closeMenu();
    },
    goToLogin() { // 跳至登入頁
      router.push('/login');
      this.closeMenu();
    },
    handleLogOut() {
      const auth = getAuth();
      signOut(auth) // 使用 firebase 登出方法，需由上方引入
        .then(() => {
          // 登出成功，跳回首頁
          this.isLoggedIn = false;
          this.closeMenu();
          router.push('/');
        })
        .catch((error) => {
          console.log('登出失敗', error);
        });
    },
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => { // 使用 firebase 方法，需由上方引入
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.header {
  @apply font-mono bg-stone-400;
}

.nav {
  @apply flex justify-between items-center py-1 relative z-50;
}

.logo {
  @apply text-nowrap text-4xl font-semibold px-2 py-2;
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
</style>
