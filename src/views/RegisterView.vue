<template>
  <div class="screen-center">
    <h2 class="light-bold-text-xl">註冊會員</h2>
    <form class="">

      <!-- email -->
      <div class="input-label light-bold-text">
        <label class="" for="email">
          email
        </label>
        <input
          class="input-text"
          id="email"
          type="text"
          placeholder="請輸入電子信箱"
          v-model="email"
          :class="{ 'errMsg-border': errMsg }"
        />
      </div>

      <!-- password -->
      <div class="input-label light-bold-text">
        <label
          class=""
          for="password"
        >
          Password
        </label>
        <input
          class="input-text"
          id="password"
          type="password"
          placeholder="請輸入密碼"
          v-model="password"
          :class="{ 'errMsg-border': errMsg }"
        />
      </div>

      <!-- button -->
      <div class="button-div">
        <button
          class="button click-color-mid"
          type="button"
          @click.prevent="register"
        >
          註冊
        </button>
        <p class="errMsg-text" v-if="errMsg">
          {{ errMsg }}
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

// firebase
const auth = getAuth();
// router
const router = useRouter();
// form
const email = ref('');
const password = ref('');
const errMsg = ref('');

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // 註冊
      const { user } = userCredential;
      console.log('註冊成功，即將跳轉至登入頁面', user);
      // 註冊成功 跳轉至登入頁面
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    })
    .catch((error) => {
      console.log('error', error);
      errMsg.value = '註冊失敗';
    });
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.screen-center {
  @apply min-h-[82vh] flex flex-col justify-center items-center;
}

.errMsg-text {
  @apply text-red-500 text-xs italic;
}

.button-div {
    @apply flex flex-col items-center gap-4 mt-4;
}
</style>
