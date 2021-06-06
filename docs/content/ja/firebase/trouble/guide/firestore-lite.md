---
title: Firestore Liteとは？
description: ''
position: 10
category: 'firebase'
---
## Firestore Liteって何?
FirebaseのJavascript SDKにFirestore Liteなるものが追加されるそうです。
Firebaseの公式Youtubeチャンネルで紹介されていました。

新しく追加されるFirestore Liteは、

* ライブラリの要領の80パーセント近くの軽量化

が実現できるそうです。

その代わり、

* リアルタイムストリーミングができない
* オフライン永続化ができない

の制約があります。

## 使ってみるには

ライブラリをインストールします。

```bash
npm i firebase@exp
```
expタグを使います。

```javascript

import { initializeApp } from 'firebase/app'
import { initializeFirestore, getDocs } from 'firebase/firestore/lite'

const firebaseApp = initializeApp({ /* config */ })
const firestoreLite = initializeFirestore(firebaseApp)
const docs = await getDocs(firestoreLite, 'testDocs')
```
このような感じで呼び出すみたいです。



## 参考

[Reducing bundle size: Previewing a new Firebase for the web | Session](https://www.youtube.com/watch?v=r5eJQ3nPc6A)