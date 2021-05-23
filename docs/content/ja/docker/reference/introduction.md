---
title: Dockerでよく使うコマンドを紹介
description: ''
position: 1000
category: 'docker'
---


## stats コンテナのCPUやメモリの確認
DockerでCPUやメモリの状態を把握することができます。

```bash
docker stats [container-1] [container-2]
```

* コンテナ名は1つでも可。
* 終わらせるには`[Ctrl] + [c]`と入力する。

## cp ファイルの転送
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

## ps コンテナ一覧を表示
Dockerのコンテナ一覧を表示する。
```
docker ps -a
```
さらにCOMMANDを省略しないで表示するには、
```
sudo docker ps -a --no-trunc
```
と入力します。

## images イメージ一覧を表示
```bash
sudo docker images
```

## コンテナの自動起動を後付けで設定する

```bash
docker update --restart=always [container]
```
`[container]`にはコンテナ名を入れます。