---
title: VBAで今日の日付を入れたファイル名を作る
description: ''
position: 10
category: 'VBA'
---
## ファイル名を日付と時間付きで作りたい
こんにちは、サクたか([\@saqtaka](https://twitter.com/saqtaka))です。

VBAでコードを書いていてデータをCSVでエクスポートするような時に、ファイル名に日付を時間付きで入れたくなる時があると思います。
そんな時に役立つコードの書き方を紹介します。

Now関数で現在の日付を取得してFormat関数で整形しています。
文字列は`&`で結合することができます。
```vba
dim date as string
date = Now

dim fileName as string
fileName = "xxxx_" & Format(date, "yyyymmddhhnn")
```

上のコードだとファイル名は、

```
xxxx_201906172315
```

のような形式になります。
