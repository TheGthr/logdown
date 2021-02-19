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
  lintOnSave: process.env.NODE_ENV !== 'production'
}