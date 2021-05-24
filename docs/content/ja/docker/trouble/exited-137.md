---
title: DockerでExited (137)とエラー出た
description: ''
position: 100000
category: 'docker'
---

## はじめに
こんにちは、サクたか([\@saqtaka](https://twitter.com/saqtaka))です。

Dockerで運用しているWordPressにある日突然Error establishing a database connectionとでて記事が表示されなくなっていました。

```
Error establishing a database connection
```

データベースに接続できないという意味。establishingは確立という意味です。

## 原因特定

まずAmazon Linuxにsshでログインして、動いているDockerコンテナの一覧を出しました。

```bash
sudo docker ps
```

あるはずのMySQLがないので落ちてしまっているみたいだったので、

```bash
sudo docker ps -a
```

で全てのコンテナ一覧をだしました。

すると生きているWordPressのコンテナは

```
Up 2 weeks
```

落ちてるMySQLのコンテナは
```
Exited (137) 9 hours ago
```

と出ていて、MySQLとの接続が確立できなかった理由はMySQLのコンテナが終了してしまっていたからでした。

## ログ解析

落ちた原因を探るためにコンテナのログを出しました。

```bash
sudo docker logs [container]
```

落ちた日にちのログは一件もなかったので、
```bash
sudo docker start [container]
```
でMySQLのコンテナを立ち上げて
```bash
sudo docker exec -it [container] bash
```
でMySQLのコンテナに入ってみました。

```bash
cd /etc
ls
```

でフォルダの中を覗くと
```
debian_version
```
というファイルを発見したのでMySQLの公式コンテナはDebianがベースみたいです

ログファイルが保存されている場所へ移動する。

```bash
cd /var/log
```
フォルダの中のファイルを確認したが分からず、、、

はじめに出てきた

```
Exited (137) 9 hours ago
```

の137が気になって調べてみると

[https://success.docker.com/article/what-causes-a-container-to-exit-with-code-137](https://success.docker.com/article/what-causes-a-container-to-exit-with-code-137)

に書いてありました。

メモリが足りなくなったようです。

サイトには

```bash
journalctl -k | grep -i -e memory -e oom
```

を試すと良いと書いてありますがAmazon Linuxにはjournalctlがないので、

```bash
sudo less messages | grep -i -e memory -e oom
```

で代用しました。すると、

```
Out of memory: Kill process 2957 (mysqld) score 301 or sacrifice child
```

とログが出ているのが確認できました。やっぱりメモリが足りなくなったようです。

## 参照
Dockerの公式ドキュメントサイトがあります。

[https://docs.docker.com](https://docs.docker.com)

で137とかエラーコードを入力すれば情報が出てきたので役立ちそうです。

## 関連記事
<CategoryPost :category-name-props="category" />
