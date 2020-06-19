module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    test: /\.less$/,
    loader: "style-loader!css-loader!less-loader",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 分号
    semi: 0,
    // 方法与括号间隔
    "space-before-function-paren": 0,
    // 文件结尾不用换行
    "eol-last": 0,
    quotes: 0,
    // 全局变量检测
    "no-implicit-globals": 0,
    // 转义符
    "no-useless-escape": "off"
  },
  globals: {
    globalConfig: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
