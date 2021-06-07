---
title: Windowsでグループポリシーを強制的にアップデートして結果を確認する
description: ''
position: 10
category: 'Windows'
---
## はじめに

Active Directoryでグループポリシーを変更した後に、端末側で変更を反映させるやり方を紹介します。

## グループポリシーを強制的にアップデートする

```powershell
gpupdate /force
```

## グループポリシーを確認する

```powershell
rsop
```
