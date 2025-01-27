<template>
  <NavComponent></NavComponent>
  <router-view/>
  <p>App.vue測試</p>
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
