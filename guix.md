---
layout: default.ejs
title: GUIX利用ガイド
---

# GUIX利用ガイド

## 検証環境

    Operating System: Kubuntu 20.04
    カーネルバージョン: 5.4.0-29-generic
    OS の種類: 64-bit
    プロセッサ: 4 × Intel® Core™ i5-4278U CPU @ 2.60GHz
    メモリ: 15.5 GiB of RAM

## インストール

GUIXのインストールには幾つかの方法があるが、標準的なLinux環境ではシェルインストーラスクリプトを使用するのが便利である。
このインストーラはダウンロードしたパッケージ郡をPGPで検査するので、実行前にGUIXの開発者のPGP公開鍵をインポートしておく必要がある。
なお、検証は管理者権限で行われるのでrootユーザのキーチェインにPGP公開鍵を保存しておく。

```shell
$ wget -qO - 'https://sv.gnu.org/people/viewgpg.php?user_id=15145' | sudo gpg --import -
```

管理者権限でインストーラーを実行させる。これは`/gnu`をパッケージの保存場所に使ったり、`/etc`に設定ファイルを保存することから必要な権限である。

```shell
$ wget -qO - 'https://git.savannah.gnu.org/cgit/guix.git/plain/etc/guix-install.sh' | sudo sh -
```

これでLinux環境に各種ファイルが設置され、GUIX用のユーザとデーモンが作成される。なお、`guile: warning failed to install locale`と表示された場合は、[下記](#troubleshooting)を参考に対応する。

## <a name="troubleshooting">トラブルシューティング</a>

以下では日本語環境でGUIXを使用する際のよくある問題とその解決方法を示す。

1. コマンド`guix`を実行すると`guile: warning: failed to install locale`と表示される。
 
   上記のようなエラーが出るときは、guixで`glibc-utf8-locales`ではなく **`glibc-locales`をインストール** し、 **環境変数`GUIX_LOCPATH`を設定**する。
   これは、`glibc-utf8-locales`にはUTF-8の全てのロケールがインストールされるのではなく、欧米圏の限られたロケールしかインストールされないことから、
   `glibc-locales`をインストールする必要がある。しかし、警告と同時に表示されるヒントでは、
   `glibc-utf8-locales`をインストールするよう促されているため、日本語環境を使用しているユーザーは注意が必要である。
   
   ```shell
   $ guix install glibc-locales
   $ echo 'export GUIX_LOCPATH="$HOME/.guix-profile/lib/locale"' >> $HOME/.bashrc
   $ source $HOME/.bashrc
   ```
