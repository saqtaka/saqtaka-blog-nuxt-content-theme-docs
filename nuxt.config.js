import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  head: {
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-NKKF1WFDXE', async: true },
      {
        hid: 'gtag',
        type: 'text/javascript',
        innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-NKKF1WFDXE');`
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      clarity: ['innerHTML'],
      gtag: ['innerHTML']
    }
  },
  docs: {
    primaryColor: '#00CD81'
  },
  i18n: {
    locales: () => [{
      code: 'ja',
      iso: 'ja-JP',
      file: 'ja-JP.js',
      name: '日本語'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'ja'
  },
})
