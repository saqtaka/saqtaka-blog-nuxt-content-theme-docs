---
title: Linuxでsedの結果をファイルに出力する
description: ''
position: 10
category: 'Linux'
---
※この記事は2019/09/23に投稿されました。

## はじめに
Linuxでコマンドを使っていると、sedコマンドはすごく便利ですよね。
使ってて、sedで編集した結果をファイルに出力したい時があると思います。

Linuxのsedコマンドの`-i`オプションの使い方を説明します。

## やり方
`-i`オプションを付けることで、出力結果をファイルに上書きできる。

```bash
sed -i '1,3d' $file
```
## ダメな例
はじめ、echoで上書きしていて改行がなくなっていた。

ダメな例。改行が消える。
```bash
echo `sed '1,3d' $file` > $file
```

## 関連記事
<CategoryPost :category-name-props="category" />
