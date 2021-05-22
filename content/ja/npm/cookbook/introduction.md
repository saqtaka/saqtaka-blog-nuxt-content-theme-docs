---
title: npmのクックブック
description: ''
position: 10
category: 'npm'
---

## npmにインストールしているライブラリのダウングレード
一度、ライブラリを削除してからバージョン指定でインストールする。

```bash
npm remove @nuxt/content-theme-docs
npm install @nuxt/content-theme-docs@0.9.0
```