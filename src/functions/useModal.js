import { ref } from 'vue';

export default function useModal() {
  // modal 的顯示狀態、訊息、類型
  const showModal = ref(false);
  const modalMessage = ref('');
  const modalType = ref('success'); // 預設為 success

  // 開啟 modal
  const openModal = (message, type = 'success') => {
    modalMessage.value = message;
    modalType.value = type;
    showModal.value = true;
  };

  // 關閉 modal
  const closeModal = () => {
    showModal.value = false;
  };

  return {
    showModal,
    modalMessage,
    modalType,
    openModal,
    closeModal,
  };
}
