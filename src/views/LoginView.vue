<template>
  <div class="screen-center">
    <h2 class="light-bold-text-xl">登入會員</h2>
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
          @click.prevent="login"
        >
          登入
        </button>
        <p class="errMsg-text" v-if="errMsg">
          {{ errMsg }}
        </p>
        <router-link to="/register">
          <p class="dark-text-xs underline">還沒有註冊會員嗎? 點擊前往註冊會員</p>
        </router-link>
      </div>
    </form>
  </div>

  <!-- ModalBox -->
  <ModalBox
    :visible="showModal"
    :message="modalMessage"
    :type="modalType"
    @close="closeModal"
  />
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import ModalBox from '@/components/ModalBox.vue';
import useModal from '@/functions/useModal';

// firebase
const auth = getAuth();
// router
const router = useRouter();
// form
const email = ref('');
const password = ref('');
const errMsg = ref('');

// 使用 useModal 邏輯
const {
  showModal,
  modalMessage,
  modalType,
  openModal,
  closeModal,
} = useModal();

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // 登入
      const { user } = userCredential;
      console.log('登入成功，即將跳轉至首頁', user);
      openModal('登入成功，即將跳轉至首頁！', 'success');
      // 登入成功 跳轉至其他頁面
      setTimeout(() => {
        router.push('/');
      }, 3000);
    })
    .catch((error) => {
      console.log('登入失敗', error);
      errMsg.value = '登入失敗';
      openModal('登入失敗！', 'error');
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
