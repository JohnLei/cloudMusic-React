const CracoLessPlugin = require('craco-less');
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    }
  ]
  // devServer: {
  //   proxy: {
  //     '/': {
  //         target: 'http://localhost:3000',
  //         changeOrigin: true,
  //         pathRewrite: {
  //             "/": ''
  //         }
  //     }
  //   },
  // }
};