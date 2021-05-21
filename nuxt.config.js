import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  generate: {
    dir: 'dist'
  },
  docs: {
    primaryColor: '#00CD81'
  }
})
