import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  generate: {
    dir: 'public'
  },
  docs: {
    primaryColor: '#00CD81'
  }
})
