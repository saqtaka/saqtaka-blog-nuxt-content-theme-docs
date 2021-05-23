---
title: dockerfileでコンテナ作成後の作業をなくす
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

### 開発環境
|項目名|詳細|
|--|--|
|エディタ|Atom|
|サーバー|Amazon Linux|
|ソース管理|Github|

## 手順
### Dockerfileを作る
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

### DockerfileをGithubからダウンロードしてくる
サーバーにgitをインストールしてGithubからクローンしてきます。
```
# Git install
sudo yum install git
```

```
vim wp_clone.sh
```

```
# wp delete
echo 'wp delete'
sudo rm wp -r -f

#wp clone
echo 'wp clone'
git clone https://github.com/make-ship/wp.git
```
```
sh wp_clone.sh
```

### Dockerfileをビルドする

```
sudo docker build -t wordpress_wp:0.1 .
```

|オプション名|詳細|
|--|--|
|–no-cache=true|キャッシュを利用しないでビルドする|
|-t [image_name]:[tag]|イメージの名前をタグを指定する|

作成したイメージは、

```
sudo docker images
```

で確認できます。

### 躓いたこと
Dockerfileをはじめ、curlコマンドでダウンロードしようとしましたがうまいやり方が見つからず、gitをインストールしてクローンすることにしました。

## さいごに
今後、コンテナに加える変更はDockerfileやスクリプトにまとめることにしました。

[https://github.com/make-ship/wordpress-auto](https://github.com/make-ship/wordpress-auto)

公式サイトを参考にしました。

[http://docs.docker.jp/engine/articles/dockerfile_best-practice.html](http://docs.docker.jp/engine/articles/dockerfile_best-practice.html)


# Docker_Dockerfile_Dockerfileでテキストファイルを編集する
## はじめに
### Dockerfileで設定ファイルを編集したい
こんにちは、サクたか([\@saqtaka](https://twitter.com/saqtaka))です。

Dockerfileでアプリケーションをインストールした後に、設定ファイルをカスタマイズしたいことはよくあると思います。

DockerfileでVim等のテキストエディタをひらくことはできないので、ファイルを編集するには少しコツがいります。

## 開発環境
```
Docker version 18.06.1-ce,
```

## 手順
### テキストファイルの最後に追加する
echoの内容をファイルに書き込むことで、編集する。ファイルの最後にしか追加できないのがデメリットです。

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
## さいごに
他にもやり方があるようなので追記していきます。
