---
title: Linuxでよく使うコマンド
description: ''
position: 10
category: 'Linux'
---

ディストリビューションはバラバラかも知れないです。


## sftp サーバーとファイルをやりとりする

FTPは暗号化されてないのでSFTPやFTPSを使用するべきです。SFTPはSSH、FTPSはSSLを利用するプロトコルです。

サーバーにSFTPでログインするには

```bash
sftp -i [key_filepath] -P [port] [user]@[domain]
```

でログインします。

cdでディレクトリを変更して

ファイルを送るのは

```bash
put [filename]
```

ファイルを持ってくるのは

```bash
get [filename]
```

ログアウトするのは

```bash
bye
exit
```

どちらかです。


## file ファイルの文字コードを確認する
```bash
file -i example.txt
```

## Ping 疎通確認する
pingは疎通確認に使われるコマンドです。

```bash
ping xxx.xxx.xxx.xxx
```

ヘルプを表示する。
```bash
ping -h
```

```bash
Usage: ping [-aAbBdDfhLnOqrRUvV] [-c count] [-i interval] [-I interface]
            [-m mark] [-M pmtudisc_option] [-l preload] [-p pattern] [-Q tos]
            [-s packetsize] [-S sndbuf] [-t ttl] [-T timestamp_option]
            [-w deadline] [-W timeout] [hop1 ...] destination
```

|オプション|詳細|
|--|--|
|-c|pingを送る回数|
|-i|pingを送る間隔|

## nmap ポートスキャン
全ポートをスキャンする。
```bash
nmap -p 0-65535 xxx.xxx.xxx.xxx
```

## ifconfig 自分のIPアドレスを調べる
```bash
ifconfig
```

Windowsではipconfigですが、Linuxではifconfigです。

## vim テキストを編集する

編集モードになる

`[i]`

編集モードを終了

`[Esc]`

保存して終了

`[:]` + `[w]` + `[q]`

保存しないで終了

`[:]` + `[q]`

## rm ファイルの削除

```bash
rm test.txt
```

## mkdir フォルダの作成

```bash
mkdir [folder_name]
```

## rm フォルダの削除

```bash
rm [folder_name] -r -f
```

## cd ディレクトリ移動
基本。
```
cd [path]
```

前の階層のディレクトリに移動する。
```bash
cd ../
```

## printenv 環境変数の一覧表示

```bash
printenv
```

## find ファイルの検索
これはOSの中の拡張子が.shのファイルを全て検索する書き方。
```bash
sudo find / -name \*.sh
```


## ps プロセスを確認
プロセスを確認するためのコマンド。

```bash
# 基本
ps

# 全てのプロセス
ps -A
```

## df ディスク容量を確認する
```bash
df -h
```

hオプションで単位を付けています。


## free メモリを確認する
```bash
free
```

## top プロセスをリアルタイムで確認する
```bash
top
```

## sudo コマンドをroot実行
毎回入力するのが面倒くさい時はこれ。

```bash
sudo su -
```
でもこれはよく使うわけではない。