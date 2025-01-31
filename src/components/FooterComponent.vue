<template>
  <footer class="footer">
    <p>&copy; {{ nowYear }} Made By Hsiao Ting Hong.</p>
  </footer>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'FooterComponent',
  setup() {
    const nowYear = ref('');

    const getNowYear = function getNowYear() {
      const today = new Date();
      nowYear.value = today.getFullYear();
    };

    onMounted(() => {
      getNowYear();
    });

    return {
      nowYear,
    };
  },
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.footer {
  @apply h-[8vh] flex justify-center py-5
  text-center text-xs text-stone-400 font-mono;
}
</style>
