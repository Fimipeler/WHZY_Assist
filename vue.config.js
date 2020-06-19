module.exports = {
  lintOnSave: false,
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.96.53.79:9999",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
