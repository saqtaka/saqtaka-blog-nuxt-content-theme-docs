---
title: Vercelでデプロイしているサイトでリダイレクトを設定する
description: ''
position: 10
category: 'Vercel'
---
## Vercelでリダイレクトを設定したい
`vercel.json`にリダイレクトの設定を書いていきます。

```json
{
  "redirects": [
    { "source": "/p=761/", "destination": "https://saqtaka.com/docker/trouble/not-start" },
    { "source": "/p=852/", "destination": "/post/docker/dockerfile-with-add-and-copy/" }
  ]
}
```
サイト内でのリダイレクトであれば`/`より前は必要ありません。
サイト外のリダイレクトはフルのURLが必要です。
