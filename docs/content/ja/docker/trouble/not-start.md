---
title: Dockerのコンテナが起動しない時に見るページ
description: ''
position: 100000
category: 'docker'
---

## Dockerfileを作ったけどコンテナが起動しない
こんにちは、サクたか([\@saqtaka](https://twitter.com/saqtaka))です。

公式イメージをダウンロードして利用するのに慣れた頃、Dockerfileにチャレンジしました。

簡単なことをするだけならすぐできましたが、それ以上のことしようとコンテナが起動せずうまくいきませんでした。

その時に調べたことを汎用的にまとめて記事にします。

OSはAmazon Linuxを使ってました。

## やること
### 1. エラーコードを確認してネットで検索

```bash
docker ps -a
```

を実行してSTATUSの欄が、

```
Up 7 hours
```

ではなく、

```
Exited (0)
```
みたいな感じだった場合はエラー番号等で検索してみると原因がわかる可能性があります。

ただ、エラーコードはかなり大雑把なので原因が特定できない場合も多くあります。

### 2. ログを確認する
ログの出力先を変更してない場合は

```bash
docker logs [container_name]
```

で、ログを出力することができます。

出力先を設定している場合は出力先でログを確認します。

### 3. 起動できなかったコンテナに入る
コンテナをコミットする。commitコマンドを使うことで、コンテナをイメージに変換することができます。

```bash
sudo docker commit -m "exited" xxxxxxxxxxxx
```

コミットしたイメージに入る。

```bash
sudo docker run --rm -it xxxxxxxxxxxx  bash
```

コンテナ作成時に実行されるCMDを実行してみると、なぜ起動しなかったかわかるかもしれません。

```bash
docker ps -a --no-trunc
```

を実行するとCOMMAND等が省略されずに表示されるので、そのコマンドを実行することでなぜ起動しなかったのかエラーメッセージを確認することができます。

## さいごに
原因特定する際に役立てば幸いです。

## 関連記事
<CategoryPost :category-name-props="category" />
