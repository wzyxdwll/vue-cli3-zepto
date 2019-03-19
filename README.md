# vue-zepto(Vue-cli3 集成 zepto)

## First Step(第一步)

```
安装 script-loader exports-loader
npm install script-loader exports-loader --save-dev
```

### Second Step(第二步)

```
在根目录下新建 vue.config.js，把下面复制到你的配置文件中
create file named vue.config.js，then copy this to the file
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
    //  if you want import zepto in the main.js you can not use this
    //  如果你想在main.js中引入zepto，下面的配置可以不用复制
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/ProvidePlugin'), [{ $: 'zepto' }])
  }
}
```

### Last Step(最后一步)

```
你可以在你的项目中使用zepto了
you can use zepto in your project
```
