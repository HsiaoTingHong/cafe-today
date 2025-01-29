<template>
  <footer class="footer">
    <p>Made by {{ nowYear }} Hsiao Ting Hong</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      nowYear: '',
    };
  },
  mounted() {
    this.getNowYear();
  },
  methods: {
    getNowYear() {
      const today = new Date();
      this.nowYear = today.getFullYear();
    },
  },
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.footer {
  @apply h-[10vh] flex justify-center py-5
  text-center text-xs text-stone-400;
}
</style>
