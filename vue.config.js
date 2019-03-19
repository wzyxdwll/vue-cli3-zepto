// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('zepto')
      .test(require.resolve('zepto'))
      .use('exports')
      .loader('exports-loader?window.Zepto')
      .end()
      .use('script')
      .loader('script-loader')
      .end()
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/ProvidePlugin'), [{ $: 'zepto' }])
  }
}
