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
例えば、functionsで2つのfunctionだけデプロイする場合。

```bash
firebase deploy --only functions:function1,functions:function２
```
