<template>
  <div class="">
    <div class="card">
      <div class="card-container">
        <div v-for="item in items" :key="item.id" class="flex items-center">
          <div
            class="card-text"
            :id="`item-${item.id}`"
          >
            <h3 class="dark-text">{{ item.name }}</h3>
            <p class="light-bold-text-xs">{{ item.city }}</p>
            <p class="dark-text-xs">{{ item.address }}</p>
            <p class="dark-text-xs">{{ item.open_time }}</p>
          </div>
          <button @click="removeItem(item.id)" class="button click-color-mid">
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  removeItem: {
    type: Function,
    required: true,
  },
});
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.card {
  @apply bg-white rounded-lg shadow-md overflow-hidden px-3 mb-6 w-full
  border-1 border-stone-300;
}

.card-container {
  @apply divide-y divide-stone-300 pr-2;
}

.card-text {
  @apply ml-3 my-3 flex-grow;
}
</style>
