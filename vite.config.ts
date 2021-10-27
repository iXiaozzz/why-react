import { defineConfig } from "vite";
// import react from '@vitejs/plugin-react'
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [
    reactRefresh(),
    vitePluginImp({
      onlyBuild: false,
      babelImportPluginOptions: [
        {
          libraryName: "antd-mobile",
          libraryDirectory: "es",
          style: true,
        },
      ],
      // libList: [
      //   {
      //     libName: "antd-mobile",
      //     style(name) {
      //       return `antd-mobile/lib/${name}/style/index.css`;
      //     },
      //   },
      // ],
    }),
  ],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    modules: {
      scopeBehaviour: "local",
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]__[hash:base64:8]",
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [
        require("postcss-pxtorem")({
          // 把px单位换算成rem单位
          rootValue: 37.5, // 换算基数，默认100，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
          propList: ["*"], //属性的选择器，*表示通用
          unitPrecision: 5, // 允许REM单位增长到的十进制数字,小数点后保留的位数。
          exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法
        }),
        require("autoprefixer")({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome>31",
            "ff>31",
            "ie>=8",
            ">1%",
          ],
          // grid: true,
        }),
        require("postcss-flexbugs-fixes"),
      ],
    },
  },
});
