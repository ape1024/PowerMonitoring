/* eslint-disable linebreak-style */
module.exports = {
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // use the full build with in-browser compiler?
  runtimeCompiler: false,
  // webpack配置
  chainWebpack: () => { },
  configureWebpack: () => { },
  productionSourceMap: false,
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  // eslint-disable-next-line global-require
  parallel: require('os').cpus().length > 1
};
