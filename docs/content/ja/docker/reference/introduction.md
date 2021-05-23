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
