---
title: Linuxのエラー集
description: ''
position: 10
category: 'Linux'
---
※この記事は2019/09/23に投稿されました。
## VPSを入れ替えたら警告が出た
ある日、運用しているクラウドのWebサーバーを入れ替えたらエラーが出ました。

```
WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!
```
サーバーのフィンガープリントが変わってるから、サーバーがなりすましにあってるかもよ。という警告。

意図的にサーバーを変えた場合は下記のコマンドで警告が出なくなる。

```bash
ssh-keygen -R [hostname]
```

## シェルスクリプトがうまく実行できないとき
うまくいかないコマンドに`echo`をつけて実行してみると、変数がうまく持ってこれてなかったりするのを発見できる。コマンドの前にechoをつけるだけなので簡単に試せる。

## 関連記事
<CategoryPost :category-name-props="category" />
