---
title: AmazonLinuxの時間を設定する
description: ''
position: 10
category: 'Linux'
---

Linux_POST_

※この記事は2020-05-18に投稿されました。
## やり方

### 1. 現時刻を確認する
```bash
date
```

### 2. 使用する時間帯を検索
```bash
ls /usr/share/zoneinfo
```
Japan があるのを確認

### 3. clockファイルを変更
```bash
sudo vim /etc/sysconfig/clock
```

変更後
```
#ZONE="UTC"
ZONE="Japan"
UTC=true
```

### 4. 時間帯ファイルにシンボリックリンクをはる
```bash
sudo ln -sf /usr/share/zoneinfo/Japan /etc/localtime
```

### 5. 再起動
```
sudo reboot
```

これでログが日本時間で記録されるようになります。
