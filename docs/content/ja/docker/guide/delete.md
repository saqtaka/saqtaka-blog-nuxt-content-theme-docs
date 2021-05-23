---
title: Dockerのコンテナやイメージをいろんな方法で削除する
description: ''
position: 10
category: 'docker'
---

## はじめに
Dockerを使っていて、コンテナを削除したくなることあると思います。

* コンテナを個別に削除したい
* 環境を整理するためにコンテナを一掃したい

といったことをするためのコマンドを紹介します。

## コンテナを一括停止する

コンテナは削除する前に停止する必要があります。
```bash
docker stop `docker ps -q`
```
バッククォートの中にコマンドを書くことで、`docker stop`の引数にコンテナIDを動的に割り当てることができます。
```bash
docker ps -q
```
はコンテナIDだけを出力するコマンドです。

## コンテナを一括削除する
```bash
docker rm `docker ps -aq`
```

## イメージの一括削除
```bash
docker rmi `docker ps -aq`
```

## Dockerの掃除
```bash
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

停止している全てのコンテナや、ビルド時のキャッシュ等も消されます。

## 参考
[https://docs.docker.com/engine/reference/commandline/rm/](https://docs.docker.com/engine/reference/commandline/rm/)
