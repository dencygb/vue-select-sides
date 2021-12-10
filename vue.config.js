module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      locale: "en_US",
      fallbackLocale: "en_US",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  configureWebpack: config => {
    config.externals = ['vue-i18n']
  }
};
