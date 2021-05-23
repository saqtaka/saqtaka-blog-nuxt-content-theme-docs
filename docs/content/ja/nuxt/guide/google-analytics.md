---
title: Nuxtで作ったサイトにGoogle Analytics(GA4)を設定する
description: ''
position: 1
category: 'Nuxt'
---
## やり方
`nuxt.config.js`に追加します。

`G-WVV9HZW4RT`の部分は読み替えて下さい。
```js[nuxt.config.js]
export default {
  head: {
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-WVV9HZW4RT', async: true },
      {
        hid: 'gtag',
        type: 'text/javascript',
        innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-WVV9HZW4RT');`
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      clarity: ['innerHTML'],
      gtag: ['innerHTML']
    }
  }
}
```
