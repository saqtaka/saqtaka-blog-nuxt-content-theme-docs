---
title: Dockerとは？基本的な操作
description: ''
position: 9
category: 'docker'
---


#Dockerの基本知識
## ファイルの転送
コンテナにファイルを送る
```
docker cp [file_name] [container_id]:[path]
```
* [file_name]は拡張子まで書く
* [path]はファイル名までいれない。/tmpのような形

### コンテナからファイルを送る
第1引数と第2引数を逆にする

### フォルダごと送る
* フォルダごと転送するのもcpコマンド
* ディレクトリ名の後に`/.`を付ける

```
docker cp [dir_name]/. $mysql_name:[dir_name]
```

## Dockerのコンテナ一覧
Dockerのコンテナ一覧を表示する。
```
docker ps -a
```
さらにCOMMANDを省略しないで表示するには、
```
sudo docker ps -a --no-trunc
```
と入力します。

## Dockerのイメージ一覧
```
sudo docker images
```

## Dockerの掃除
```
docker system prune
```
```
WARNING! This will remove:
        - all stopped containers
        - all networks not used by at least one container
        - all dangling images
        - all build cache
Are you sure you want to continue? [y/N] y
```
一度でいろんなものが削除されるので注意。


# Docker_POST_Dockerで自働起動を設定する後付け可
## コンテナの自動起動を設定する


## 後からrestartを設定する
```
docker update --restart=always [container]
```
`[container]`にはコンテナ名を入れます。
