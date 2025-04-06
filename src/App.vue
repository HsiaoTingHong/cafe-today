<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden">
    <NavComponent></NavComponent>

    <div class="flex-1 relative">
      <div class="wrapper font-mono relative">
        <transition name="slide">
          <router-view />
        </transition>
      </div>
    </div>

    <FooterComponent></FooterComponent>
  </div>
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
