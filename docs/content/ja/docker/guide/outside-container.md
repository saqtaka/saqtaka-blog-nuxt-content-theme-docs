---
title: Dockerでコンテナ外からコマンドを実行する
description: ''
position: 10
category: 'docker'
---

## コンテナ外からコマンドを実行したい

コンテナの外からコンテナに対してコマンドを実行したいときに調べました。

```bash
docker exec [container-name] [command]
```

実際にはこんな感じ。

```bash
docker exec wordpress wp menu location list --allow-root --path="/var/www/html/"
```
上の例だと`wordpress`というコンテナに`wp menu location list --allow-root --path="/var/www/html/"`というコマンドを実行しています。

## 関連記事
<CategoryPost :category-name-props="category" />
