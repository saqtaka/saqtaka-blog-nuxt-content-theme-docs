---
title: Windowsでグループポリシーを強制的にアップデートして結果を確認する
description: ''
position: 10
category: 'Windows'
---
## はじめに

Active Directoryでグループポリシーを変更した後に、端末側で強制的に変更を反映させるやり方を紹介します。
本来は、端末を再起動すれば反映されるはずですが、何らかの不具合で反映されない時に使えるやり方です。

## グループポリシーを強制的にアップデートする

```powershell
gpupdate /force
```

## グループポリシーを確認する

```powershell
rsop
```
