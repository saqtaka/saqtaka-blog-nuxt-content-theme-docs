---
title: Linuxでディレクトリの中の全てのテキストファイルのn行目に文字を挿入する
description: ''
position: 10
category: 'Linux'
---

※この記事は2019-09-24に投稿されました。
## はじめに
WordPressの記事をテキストで管理していて、全ての記事ファイルにmoreタグを入れたくなったので作りました。

関係ないですが、moreタグとはWordPressで以下のHTMLコードをはさむと記事一覧で記事全文を表示することなくまるめてくれる便利なタグです。

```html
<!-- wp:more -->
<!--more-->
<!-- /wp:more -->
```

## やり方
ディレクトリ内のファイルをループで回して、`sed`コマンドでmoreタグを挿入しています。
```
for file in `find . -maxdepth 1 -type f | sed 's!^.*/!!'`; do
  sed -i -e '3i <!-- wp:more -->' $file
  sed -i -e '4i <!--more-->' $file
  sed -i -e '5i <!-- /wp:more -->' $file
done
```
