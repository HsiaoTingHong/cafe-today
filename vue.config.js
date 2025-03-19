const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false, // 關閉 Sourcemap
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cafe-today/'
    : '/',
  devServer: {
    proxy: {
      '/api': { // 請求路徑的前綴
        target: 'https://cafenomad.tw', // 目標 API 伺服器
        changeOrigin: true, // 必須設定為 true，以避免 CORS 錯誤
        pathRewrite: {
          '^/api': '/api', // 將請求路徑中的前綴移除
        },
      },
    },
    // 處理 chunk-vendors.js:249 WebSocket connection to 'ws://192.168.2.212:8080/ws' failed
    host: 'localhost', // 接受來自所有網絡的請求，或者 '0.0.0.0' 用於網路訪問
    port: 8080,
    allowedHosts: 'all', // 允許所有外部訪問
    client: {
      webSocketURL: 'ws://localhost:8080/ws', // 或者 'ws://192.168.2.212:8080/ws'
    },
  },
});
