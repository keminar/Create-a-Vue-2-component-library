# 创建Vue2组件库示例

 * Vue2 + vue-cli-service

# 构建说明

 * https://cli.vuejs.org/zh/guide/build-targets.html
 * https://cli.vuejs.org/zh/config/#pages

# 示例1: laoyan-ui

 * https://segmentfault.com/a/1190000039748000

# 示例2: sampleapp + dummylib 注意vuex版本

 * https://itnext.io/create-a-vue-js-component-library-as-a-module-part-1-a1116e632751
 * https://itnext.io/create-a-vue-js-component-library-part-2-c92a42af84e9

# 打包单umd.js

 * http://www.zuo11.com/blog/2020/11/vue_umd_multiple.html

# 注意设置 lintOnSave=false 否则会出奇怪问题

 * https://cli.vuejs.org/zh/config/#lintonsave
 * https://cli.vuejs.org/zh/config/#lintonsa

# 环境变量

 * https://www.npmjs.com/package/cross-env
 * https://cli.vuejs.org/zh/guide/mode-and-env.html

# 在编译组件时配置单文件，在编译项目时配置多文件，否则跑不通
```
  configureWebpack: {
    plugins: process.env.VUE_APP_BUILD_TARGET !== 'lib' ? [] : [
      // 限制组件只打一个包，不分Chunk
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
```
