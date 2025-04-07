# Cafe Today - 今天要去哪間咖啡店？
一個幫助選擇咖啡店的小工具，使用 Vue.js 3 開發

## 專案簡介
常常在「今天要去哪間咖啡店」這個問題上猶豫不決嗎？  
這個網站提供隨機抽籤與自訂收藏功能，幫助你速速做決定！

## 線上 Demo 連結
[https://hsiaotinghong.github.io/cafe-today/](https://hsiaotinghong.github.io/cafe-today/)

## 主要功能
- 隨機抽籤決定今天要去的咖啡店
- 抽籤選中的咖啡店可以點擊地址導向 Google Map
- 抽籤選中的咖啡店可以加入你收藏的口袋名單
- 瀏覽預設咖啡店列表，並加入喜歡的店家到你收藏的口袋名單
- 手動輸入自己想去的咖啡店加入你收藏的口袋名單
- 從你收藏的口袋名單中進行抽籤
- 你收藏的口袋名單刪除功能
- RWD 響應式設計，手機也能流暢操作

## 未來預計新增功能
- 優化界面 & 功能
- 串接 Laravel 或是 PHP 後端 API 版本 (資料庫管理)
- 會員註冊、登入
- 你收藏的口袋名單相關功能要登入才能使用
- 路由保護：未登入者無法瀏覽你的口袋名單相關頁面

## 使用技術
- **串接 Cafe Nomad API**
- **Tailwind CSS** - UI 框架
- **Vue.js 3** - JavaScript 前端框架
- **Vue CLI** - Vue.js 專案建置工具
- **Vue Axios** - 用於發送 HTTP 請求
- **Vue Router** - 處理前端路由
- **Vue 生命週期** - 控制元件的生命週期
- **Vue 元件** - 元件化開發
- **Vue Pinia** - 狀態管理工具
- **Vue Option API** & **Vue Composition API**
- **Vue transition** - 動畫效果
- **Vue3 Loading Overlay** - Loading 效果

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
