const path = require('path');

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    watchOptions: {
      poll: true
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
    config.module
      .rule('i18n-resource')
      .test(/\.(json5?|ya?ml)$/)
      .include.add(path.resolve(__dirname, './src/locales'))
      .end()
      .type('javascript/auto')
      .use('i18n-resource')
      .loader('@intlify/vue-i18n-loader')
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader')
  }
}