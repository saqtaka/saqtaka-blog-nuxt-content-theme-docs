---
title: Docker + AWS LightsailでWordPressをインストールする
description: ''
position: 10
category: 'docker'
---
## はじめに

AWSのVPSであるLishtsailは安いプランだと500円以内で、固定IPが無料だしAWSでドメインも取得できるし、AWSのアカウントさえあれば独自ドメインのWordPressのサイトを構築できます。

LightsailのプランでWordPressがインストール済みのものもあるのですが、今回はそれを使わずに素のAmazon LinuxにDockerをインストールしてWordPress公式DockerイメージからWordPressを構築します。

~~このサイトもAWSのLightsailを使用して作られています。~~

※今はNuxtで作り直してしまいました。

## インストール方法
### 1. Dockerをインストール
```bash
# LightsailのUPDATEとDOCKERのインストール
sudo yum update -y
sudo yum install -y docker
sudo service docker start
```
この WordPress のイメージは Debian をベースに作られているようです。

### 2. Dockerを自動起動設定
OSを再起動した時にDockerが自動的に起動するようにします。
```bash
# docker自動起動
sudo chkconfig docker on
```

### 3. WordPressとMySQLの公式イメージをダウンロード
MySQLをWordPressのイメージをダウンロードします。
両方とも公式イメージなので安心感あります。

```bash
# image download
sudo docker pull mysql:5.7
sudo docker pull wordpress
```

最新版のmysqlだと認証エラーになってしまったので5.7を使います。

### 4. コンテナ作成
```bash
# コンテナの作成と起動
sudo docker container run --name [mysql] -e MYSQL_ROOT_PASSWORD=XXXXXX -d -m 448m --oom-kill-disable=true mysql:5.7

sudo docker container run --name [wordpress] --link [mysql]:mysql -d -p 80:80 -p 443:443 -m 192m --oom-kill-disable=true --log-driver=syslog -v /home/[user]/html:/var/www/html -v /home/[user]/letsencrypt:/etc/letsencrypt wordpress
```

|オプション|解説|
|:--:|:--:|
|–log-driver=syslog|コンテナのログをsyslogに出力する|
|-v /home/[user]/html:/var/www/html
-v /home/[user]/letsencrypt:/etc/letsencrypt|ホストに用意したフォルダとコンテナのフォルダを共有することができます|

これでWordPressが作れました。

### 5. ドメインの設定
LightsailのIPをドメインのレコードに設定します。

## 作り直す時
うまく作れなくてやり直す時は下のコードを流してコンテナを一度削除してからやり直します。

OSからやり直す事なくリトライできるので便利です。

```bash
# コンテナ停止
sudo docker stop [mysql] [wordpress]

# コンテナ削除
sudo docker rm [mysql] [wordpress]
```
