// vue.config.js
const path = require("path");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/", // 公共路径
  configureWebpack: {
    resolve: {
      alias: {},
    },
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
    },
  },
};
