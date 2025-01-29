<template>
  <NavComponent></NavComponent>
  <div class="wrapper font-mono">
    <router-view />
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavComponent,
    FooterComponent,
  },
};
</script>
