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
import { onBeforeMount } from 'vue';
import useCafeStore from '@/stores/cafes';

export default {
  name: 'App',
  components: {
    NavComponent,
    FooterComponent,
  },
  setup() {
    onBeforeMount(() => {
      // 預加載資料
      const cafeStore = useCafeStore();
      try {
        cafeStore.preloadMultipleCities(['taipei', 'taichung', 'tainan', 'kaohsiung']);
      } catch (error) {
        console.error('預加載資料失敗:', error);
      }
    });
  },
};
</script>
