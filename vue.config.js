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
  },
});
