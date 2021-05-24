---
title: Linuxについて
description: ''
position: 9
category: 'Linux'
---

## 改行コード
windowsとLinuxでは改行コードが違う。
windowsは`CRLF`でLinuxは`LF`が改行コードになる。

## ディレクトリ構造
Linuxのディレクトリ構成の指針となるものがあります。Filesystem Hierarchy Standardといいます。

[https://ja.wikipedia.org/wiki/Filesystem_Hierarchy_Standard](https://ja.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)

## パーミッションについて
### パーミッションを確認する

ディレクトリ内のパーミッションを確認するには、

```bash
ls -l
```

で確認できる。

```bash
ls -l [file_name]
```

で個別に確認できます。

```
-rw-r--r-- 1 root root  242 Jun  6 14:37 AmazonLinux_setup.sh
drwxr-xr-x 2 root root 4096 Jun  6 14:37 mysql
-rw-r--r-- 1 root root   16 Jun  6 14:37 README.md
-rw-r--r-- 1 root root  132 Jun  7 11:56 settings
-rw-r--r-- 1 root root   65 Jun  7 11:51 settings.example
drwxr-xr-x 2 root root 4096 Jun  7 13:56 wordpress
```

### 結果の読み方

1文字目はファイルの種類を表しています。

|表示|内容|
|--|--|
|–|ファイル|
|d|ディレクトリ|
|l|シンボリックリンク|

2文字目から10文字目までは権限について表しています。

|表示|内容|
|--|--|
|r|読み|
|w|書き|
|x|実行|

```bash
chmod 777 [file_name]
```

と実行すると、全ユーザーに全権限をつけることができます。

## 現在のデフォルトのシェルを確認する

```bash
echo $SHELL
```

```bash
/bin/bash
```

と返ってくればbashが使用されています。

## 文字コードを確認する
```bash
echo $LANG
```
```bash
en_US.UTF-8
```
等の情報が返ってくる。

## sslの脆弱性をテストする

[https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/)
