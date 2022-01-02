module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/new_test/'
    : '/new_test/',

  assetsDir: '',
  productionSourceMap: false,
  filenameHashing: true,

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
}
