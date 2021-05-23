---
title: LinuxでのSSHについて
description: ''
position: 10
category: 'Linux'
---
※この記事は2019/09/25に投稿されました。

## SSHログインを簡単にする
`.ssh`ディレクトリの中にconfigという、sshの設定ファイルがあります。

このファイルに設定を記載することで、sshコマンドを実行する時に毎回ログインするユーザー名や鍵ファイルの場所を指定することなくサーバーにログインすることが出来ます。

`.ssh`ディレクトリはだいたい、どのOSでもユーザーフォルダの直下にあります。


```
Host saqtaka.com
	HostName saqtaka.com
	Port 22
	User [user_name]
	IdentityFile ~/.ssh/[key_file_name].pem
```

後はIdentityFileで指定したファイルを配置すれば、

```bash
ssh saqtaka.com
```

のような感じでログインできるようになります。


## サーバーのsshポートの変更をシェルで自動化する
毎回vimで編集するのが大変だったので、bashファイルにして自動化しました。

```bash
ssh_port=22

# ポート解放
iptables -A INPUT -p tcp --dport $ssh_port -j ACCEPT
# 保存
service iptables save

# configを編集
sudo sed -i "s/\#Port 22/Port $ssh_port/" /etc/ssh/sshd_config
# 設定を反映
service sshd reload
```
