---
title: Dockerfileでコンテナ作成後の作業をなくす
description: ''
position: 10
category: 'docker'
---

## はじめに
### Dockerfileとは
自分オリジナルのイメージを作るためのファイルです。

### やりたいこと
Dockerfileを使ってコンテナを使った後の細かい設定作業を減らしたい。

DockerfileはGithubに上げておくことで、再利用しやすくする。

実現したいフローは、

1. ローカル環境でDockerfileを編集する
1. GithubへPush
1. サーバーにGithubからダウンロード
1. Dockerfileをビルド
1. ビルドしたイメージを使ってコンテナ作成

サーバーのOSはAmazon Linuxを使いました。

## 手順
### 1. Dockerfileを作る
```
# dockerfile
FROM wordpress

RUN echo 'start'; \
  apt-get update && \
  apt-get upgrade -y
```
コンテナのOSをアップデートするコマンドを実行するDockerfileです。

このファイルを継続的に直していきたいのでGithubにアップロードしました。

[https://github.com/make-ship/wp](https://github.com/make-ship/wp)

### 2. DockerfileをGithubからダウンロードしてくる
サーバーにgitをインストールしてGithubからクローンしてきます。
```bash
# Git install
sudo yum install git
```

```bash
vim wp_clone.sh
```

```bash
# wp delete
echo 'wp delete'
sudo rm wp -r -f

#wp clone
echo 'wp clone'
git clone https://github.com/make-ship/wp.git
```
```bash
sh wp_clone.sh
```

### 3. Dockerfileをビルドする

```bash
sudo docker build -t wordpress_wp:0.1 .
```

|オプション名|詳細|
|--|--|
|–no-cache=true|キャッシュを利用しないでビルドする|
|-t [image_name]:[tag]|イメージの名前をタグを指定する|

作成したイメージは、

```bash
sudo docker images
```

で確認できます。

## 躓いたこと
Dockerfileをはじめ、curlコマンドでダウンロードしようとしましたがうまいやり方が見つからず、gitをインストールしてクローンすることにしました。


## 【おまけ】Dockerfileで設定ファイルを編集したい
Dockerfileでアプリケーションをインストールした後に、設定ファイルをカスタマイズしたいことはよくあると思います。

DockerfileでVim等のテキストエディタをひらくことはできないので、ファイルを編集するには少しコツがいります。

テキストファイルの最後に追加する方法を紹介します。

__echoの内容をファイルに書き込むことで、編集する方法です。__

ファイルの最後にしか追加できないで注意です。

```
RUN echo 'Auth start'; \
  echo '' >> /var/www/html/.htaccess; \
  echo '# BEGIN server setting' >> /var/www/html/.htaccess; \
  echo '' >> /var/www/html/.htaccess; \
  echo '<Files wp-login.php>' >> /var/www/html/.htaccess; \
  echo 'AuthUserFile "/var/www/html/.htpasswd"' >> /var/www/html/.htaccess; \
  echo 'AuthName "Basic Auth"' >> /var/www/html/.htaccess; \
  echo 'AuthType Basic' >> /var/www/html/.htaccess; \
  echo 'Require valid-user' >> /var/www/html/.htaccess; \
  echo '</Files>' >> /var/www/html/.htaccess; \
  echo '' >> /var/www/html/.htaccess; \
  echo '# END server setting' >> /var/www/html/.htaccess
```

## 参考

[http://docs.docker.jp/engine/articles/dockerfile_best-practice.html](http://docs.docker.jp/engine/articles/dockerfile_best-practice.html)
