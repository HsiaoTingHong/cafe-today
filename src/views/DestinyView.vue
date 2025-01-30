<template>
  <div class="screen-center">
    <p class="slogan">今天要去哪間咖啡店呢？</p>
    <div class="table-border" v-if="isLoadingDown">
      <table class="table-all">
        <tr>
          <th class="table-td border-b border-r">店名</th>
          <td class="table-td border-b">
            {{ selectedShop.name }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-b border-r">地址</th>
          <td class="table-td border-b">
            {{ selectedShop.address }}
          </td>
        </tr>
        <tr>
          <th class="table-td border-b border-r">官網(連結)</th>
          <td class="table-td border-b text-stone-500">
            <a :href="selectedShop.website" target="_blank" rel="noreferrer noopener">
              {{ selectedShop.website }}
            </a>
          </td>
        </tr>
        <tr>
          <th class="table-td border-r">營業時間</th>
          <td class="table-td">
            {{ selectedShop.open_time }}
          </td>
        </tr>
      </table>
    </div>
    <p class="text-xs text-stone-400">營業時間可能不同，出發前請至官方網站確認</p>
    <button
      class="btn btn-start click-color-light"
      @click.prevent="getDestinyShop"
      :disabled="isLoading"
    >
      {{ isLoading ? "抽籤中..." : "點擊進行抽籤" }}
    </button>
    <img class="image" src="../assets/teaAndBook.png" alt="teaAndBook" />
  </div>
</template>

<script>
export default {
  name: 'DestinyView',
  data() {
    return {
      selectedShop: '',
      isLoading: false,
      isLoadingDown: false,
      shopData: [
        {
          name: 'yosano 与謝野珈琲',
          address: '403台中市西區自治街242號',
          website: 'https://www.facebook.com/yosanozikabi',
          open_time: '星期一至六 12:00–22:00，星期日 12:00–17:30',
        },
        {
          name: 'DM CAFE',
          address: '403台中市西區民生路225巷11號',
          website: 'https://www.facebook.com/people/DM-Cafe/100063900491620/',
          open_time: '星期一至五 09:00–18:00',
        },
        {
          name: '招財咖啡舖',
          address: '40357台中市西區梅川西路一段37號',
          website: 'https://reurl.cc/10xdQQ',
          open_time: '星期二至五、星期日 13:00–22:00',
        },
        {
          name: 'Kefi Park Roasters 珈琲公園',
          address: '403台中市西區自立街105號',
          website: 'https://instagram.com/kefipark?igshid=M2RkZGJiMzhjOQ==',
          open_time: '星期一至日 11:00–18:00',
        },
        {
          name: '奉咖啡 ｜交響樂｜ 單品專賣店',
          address: '403台中市西區自立街106號',
          website: 'https://lin.ee/IFXWXB0',
          open_time: '星期四至星期二 13:00–22:30',
        },
        {
          name: 'Tamp Temper Taichung Coffee',
          address: '403台中市西區民權路286號',
          website: '無',
          open_time: '星期一至五 09:00–17:30，星期六 09:30–16:00',
        },
      ],
    };
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    async getDestinyShop() {
      this.isLoading = true;
      this.isLoadingDown = false;
      this.selectedShop = '';

      try {
        await this.sleep(3000);
        const randomIndex = Math.floor(Math.random() * this.shopData.length);
        this.selectedShop = this.shopData[randomIndex];
        this.isLoadingDown = true;
      } catch (error) {
        console.error('抽籤過程發生錯誤:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@import "tailwindcss";

.screen-center {
  @apply min-h-[82vh] flex flex-col items-center justify-center text-center gap-4;
}

.slogan {
  @apply text-stone-400 font-semibold text-xl;
}

.table-border {
  @apply rounded-lg overflow-hidden
  border-2 border-stone-400;
}

.table-all {
  @apply min-w-[60vw] md:min-w-[30vw]
  text-stone-600 border-collapse;
}

.table-td {
  @apply px-3 py-2
  text-xs md:text-sm text-wrap
  border-stone-400;
}

.btn {
  @apply flex w-32 items-center justify-center rounded-lg
  px-4 py-3 border-1 text-sm font-medium;
}

.btn:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.image {
  @apply opacity-40 w-65;
}
</style>
