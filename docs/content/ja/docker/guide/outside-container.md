---
title: Dockerでコンテナ外からコマンドを実行する
description: ''
position: 10
category: 'docker'
---

# Docker_POST_Dockerでコンテナ外からコマンドを実行する

コンテナの外からコンテナに対してコマンドを実行したいときに調べました。

```
docker exec [container-name] [command]
```

```
docker exec wordpress wp menu location list --allow-root --path="/var/www/html/"
```
上の例だと`wordpress`というコンテナに`wp menu location list --allow-root --path="/var/www/html/"`というコマンドを実行しています。
