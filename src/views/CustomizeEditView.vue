<template>
  <!-- 巢狀路由-自己新增口袋名單 -->
  <h2 class="title">自己新增口袋名單</h2>
  <div class="screen-center">
    <h2 class="light-bold-text-xl">請輸入你的口袋名單</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group input-label light-bold-text">
        <label for="CustomizeCafeName">店家<br />名稱</label>
        <input
          type="text"
          id="CustomizeCafeName"
          v-model="CustomizeCafe.name"
          placeholder="請輸入店家名稱(必填)"
          :class="[
            'input-text',
            errors.name ? 'error-input-text' : ''
          ]"
        >
      </div>
      <span
        v-if="errors.name"
        class="error-span"
      >
        {{ errors.name }}
      </span>

      <div class="form-group input-label light-bold-text">
        <label for="CustomizeCafeCity">城市</label>
        <input
          type="text"
          id="CustomizeCafeCity"
          v-model="CustomizeCafe.city"
          placeholder="請輸入城市英文小寫(必填)"
          :class="[
            'input-text',
            errors.city ? 'error-input-text' : ''
          ]"
        >
      </div>
      <span
        v-if="errors.city"
        class="error-span"
      >
        {{ errors.city }}
      </span>

      <div class="form-group input-label light-bold-text">
        <label for="CustomizeCafeAddress">地址</label>
        <input
          type="text"
          id="CustomizeCafeAddress"
          v-model="CustomizeCafe.address"
          placeholder="請輸入詳細中文地址(必填)"
          :class="[
            'input-text',
            errors.address ? 'error-input-text' : ''
          ]"
        >
      </div>
      <span
        v-if="errors.address"
        class="error-span"
      >
        {{ errors.address }}
      </span>

      <div class="form-group input-label light-bold-text">
        <label for="CustomizeCafeHours">營業<br />時間</label>
        <textarea
          id="CustomizeCafeHours"
          v-model="CustomizeCafe.open_time"
          placeholder="請輸入營業時間，例如：週一至週五 09:00-21:00(必填)"
          :class="[
            'input-text',
            errors.open_time ? 'error-input-text' : ''
          ]"
        >
        </textarea>
      </div>
      <span
        v-if="errors.open_time"
        class="error-span"
      >
        {{ errors.open_time }}
      </span>

      <div>
        <button type="submit" class="button click-color-light button-top">加入你的口袋名單</button>
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

<script>
import { reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import ModalBox from '@/components/ModalBox.vue';
import useModal from '@/functions/useModal';

export default {
  name: 'CustomizeEditView',
  components: {
    ModalBox,
  },
  setup() {
    // 表單輸入資料
    const CustomizeCafe = reactive({
      id: uuidv4(),
      name: '',
      city: '',
      address: '',
      open_time: '',
    });

    // 使用 useModal 邏輯
    const {
      showModal,
      modalMessage,
      modalType,
      openModal,
      closeModal,
    } = useModal();

    // 表單驗證
    const errors = reactive({
      name: '',
      city: '',
      address: '',
      open_time: '',
    });

    const validateForm = () => {
      let isValid = true;

      // 清空錯誤訊息
      Object.keys(errors).forEach((key) => {
        errors[key] = '';
      });

      if (!CustomizeCafe.name.trim()) {
        errors.name = '店家名稱為必填';
        isValid = false;
      }

      if (!CustomizeCafe.city.trim()) {
        errors.city = '城市為必填';
        isValid = false;
      } else if (!/^[a-z]+$/.test(CustomizeCafe.city)) {
        errors.city = '城市請輸入英文小寫';
        isValid = false;
      }

      if (!CustomizeCafe.address.trim()) {
        errors.address = '地址為必填';
        isValid = false;
      } else if (!/^[\u4e00-\u9fa5\d\s]+$/.test(CustomizeCafe.address)) {
        errors.address = '地址需為中文，可包含數字和空白';
        isValid = false;
      }

      if (!CustomizeCafe.open_time.trim()) {
        errors.open_time = '營業時間為必填';
        isValid = false;
      } else if (!/週.+?至週.+?\s\d{2}:\d{2}-\d{2}:\d{2}/.test(CustomizeCafe.open_time)) {
        errors.open_time = '營業時間格式不符，範例：週一至週五 09:00-21:00';
        isValid = false;
      }

      return isValid;
    };

    // 送出表單
    const submitForm = () => {
      // 驗證表單
      if (!validateForm()) {
        openModal('請確認填寫的資料格式是否錯誤！', 'error');
        return;
      }

      // localStorage 資料
      const savedCafes = JSON.parse(localStorage.getItem('savedCafes') || '[]');

      // 檢查 localStorage 是否已有資料，有的話則不能送出資料
      const isAlreadySavedInStorage = savedCafes.some(
        (savedCafe) => savedCafe.name === CustomizeCafe.name,
      );

      if (isAlreadySavedInStorage) {
        openModal('此咖啡店已在你的口袋名單中！', 'error');
        return;
      }

      // 儲存到 localStorage
      savedCafes.push({ ...CustomizeCafe });
      localStorage.setItem('savedCafes', JSON.stringify(savedCafes));
      openModal('收藏到你的口袋名單成功！', 'success');

      // 儲存後清空表單
      CustomizeCafe.name = '';
      CustomizeCafe.city = '';
      CustomizeCafe.address = '';
      CustomizeCafe.open_time = '';

      // 生成新 UUID
      CustomizeCafe.id = uuidv4(); // 生成新的 UUID
    };

    return {
      CustomizeCafe,
      submitForm,
      showModal,
      closeModal,
      modalMessage,
      modalType,
      errors,
    };
  },
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.screen-center {
  @apply min-h-[82vh] flex flex-col items-center text-center
  gap-4 my-4;
}

.form-group {
  @apply flex text-nowrap text-left font-bold mt-4 mb-1;
}

.input-label {
  @apply flex justify-center items-center
  text-nowrap;
}

.input-text {
  @apply min-w-[60vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[30vw]
  ml-4 p-2 rounded-lg border-1 border-stone-300 text-sm;
}

.error-input-text {
  @apply placeholder-red-300 border-1 border-red-300;
}

.error-span {
  @apply text-red-500 text-sm mt-1 mb-4 ml-8;
}

.button-top {
  @apply mt-8;
}
</style>
