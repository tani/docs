---
layout: default.ejs
title: GUIX
---

# GUIX

## トラブルシュート

以下では日本語環境でGUIXを使用する際のよくある問題とその解決方法を示す。

1. コマンド`guix`を実行すると`guile: warning: failed to install locale`と表示される。
 
   上記のようなエラーが出るときは、guixで`glibc-utf8-locales`ではなく **`glibc-locales`をインストール** し、 **環境変数`GUIX_LOCPATH`を設定**する。
   これは、`glibc-utf8-locales`にはutf8の全てのロケールがインストールされるのではなく、欧米圏の限られたロケールしかインストールされないことから、
   `glibc-locales`をインストールする必要がある。しかし、警告と同時に表示されるヒントでは、
   `glibc-utf8-locales`をインストールするよう促されているため、日本語環境を使用しているユーザーは注意が必要である。
   
   ```sh
   $ guix install glibc-locales
   $ echo 'export GUIX_LOCPATH="$HOME/.guix-profile/lib/locale"' >> $HOME/.bashrc
   $ source $HOME/.bashrc
   ```
