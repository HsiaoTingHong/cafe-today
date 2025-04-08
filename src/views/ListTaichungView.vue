<template>
  <!-- 巢狀路由-台中咖啡店列表 -->
  <div class="min-h-[82vh]">
    <CafeList />
  </div>
</template>

<script setup>
import { onActivated, onDeactivated } from 'vue';
import CafeList from '../components/CafeList.vue';

onActivated(() => {
  console.log('ListTaichungView activated');
});

onDeactivated(() => {
  console.log('ListTaichungView deactivated');
});
</script>
