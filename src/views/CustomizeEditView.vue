<template>
  <!-- 巢狀路由-編輯你的口袋名單 -->
  <h2 class="title">編輯你的口袋名單</h2>
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
          class="input-text"
        >
      </div>

      <div class="form-group input-label light-bold-text">
        <label for="CustomizeCafeCity">城市</label>
        <input
          type="text"
          id="CustomizeCafeCity"
          v-model="CustomizeCafe.city"
          placeholder="請輸入城市英文小寫(必填)"
          class="input-text"
        >
      </div>

      <div class="form-group input-label light-bold-text">
        <label for="CustomizeCafeAddress">地址</label>
        <input
          type="text"
          id="CustomizeCafeAddress"
          v-model="CustomizeCafe.address"
          placeholder="請輸入詳細中文地址(必填)"
          class="input-text"
        >
      </div>

      <div class="form-group input-label light-bold-text">
        <label for="CustomizeCafeHours">營業<br />時間</label>
        <textarea
          id="CustomizeCafeHours"
          v-model="CustomizeCafe.open_time"
          placeholder="請輸入營業時間，例如：週一至週五 09:00-21:00(必填)"
          class="input-text"
        >
        </textarea>
      </div>

      <button type="submit" class="button click-color-light">加入你的私藏咖啡巡禮</button>
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

    // 送出表單
    const submitForm = () => {
      // 驗證表單
      if (!CustomizeCafe.name
          || !CustomizeCafe.city
          || !CustomizeCafe.address
          || !CustomizeCafe.open_time) {
        openModal('請填寫所有必填欄位', 'error');
        return;
      }

      // localStorage 資料
      const savedCafes = JSON.parse(localStorage.getItem('savedCafes') || '[]');

      // 檢查 localStorage 是否已有資料，有的話則不能送出資料
      const isAlreadySavedInStorage = savedCafes.some(
        (savedCafe) => savedCafe.name === CustomizeCafe.name,
      );

      if (isAlreadySavedInStorage) {
        openModal('此咖啡店已在你的私藏巡禮中！', 'error');
        return;
      }

      // 儲存到 localStorage
      savedCafes.push({ ...CustomizeCafe });
      localStorage.setItem('savedCafes', JSON.stringify(savedCafes));
      openModal('收藏成功！', 'success');

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
  @apply flex text-nowrap text-left font-bold mb-4;
}

.input-label {
  @apply flex justify-center items-center
  text-nowrap mb-5;
}

.input-text {
  @apply min-w-[60vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[30vw]
  mx-4 p-2 rounded-lg border-1 border-stone-300;
}
</style>
