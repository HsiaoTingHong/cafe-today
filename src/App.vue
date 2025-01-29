<template>
  <NavComponent></NavComponent>
  <div class="wrapper font-mono">
    <router-view />
  </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';

export default {
  name: 'App',
  components: {
    NavComponent,
  },
};
</script>
