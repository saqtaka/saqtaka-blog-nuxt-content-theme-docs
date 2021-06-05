---
title: Firebaseで出来るちょっと高度なこと
description: ''
position: 1
category: 'Firebase'
---
## はじめに
Firebaseで出来ることを紹介していきます。

## Firebase Authenticationで管理者ユーザーを作る
Admin SDKの`setCustomUserClaims`を使うことで実現出来ます。

`setCustomUserClaims`は毎回上書きされるので注意が必要です。

[カスタム クレームとセキュリティ ルールによるアクセスの制御 | Firebase](https://firebase.google.com/docs/auth/admin/custom-claims)

## Firebaseのデプロイを分割する
`--only`オプションを使う。
例えば、functionsであるfunctionだけデプロイする場合。

```bash
firebase deploy --only functions:function1
```

## Firebase hostingを使ってVPN内にサイトデプロイすることができるか
Firebase公式サイトのサイト内検索にVPNと入力して検索してみました。

その結果、2021年6月5日の時点ではFirebase hostingでVPNという単語が使われていませんでした。
なので現時点ではFirebase hostingを使ってVPN内にサイトをデプロイすることができないと思われます。
