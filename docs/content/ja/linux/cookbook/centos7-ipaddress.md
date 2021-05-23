---
title: LinuxのCentOS7でIPアドレスを確認して変更する
description: ''
position: 10
category: 'Linux'
---

※この記事は2020-05-18に投稿されました。

## はじめに
CentOS7ではifconfigコマンドは非推奨になったので、ipコマンドを使う

## やり方
### 1. ipアドレスを確認する
```bash
ip address show
```

### 2. ipアドレスを変更する
```bash
nmtui
```
