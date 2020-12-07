---
language: ja
title: 日本語 LaTeX 作法
---

# 日本語 $\mathrm{\LaTeX}$ 作法

## TeX ディストリビューション

- Win32TeX
- TinyTeX
- TeXLive
  - minimal
  - basic
  - small
  - medium
  - full
- MacTeX
- BasicTeX
- Drag & Drop UpTeX
- Tectonic

## TeX エンジン

現在日本語組版ができる$\mathrm{\TeX}$処理系のうちメジャーなものは以下の通りである．

- pTeX, ε-pTeX (枯れた日本語対応の TeX 処理系．最も古くから存在する．1987 年誕生）
- upTeX, ε-upTeX (内部エンコーディングが Unicode になっている TeX 処理系．2007 年誕生）
- XeTeX（内部エンコーディングが Unicode になっており，システムのフォントを直接利用する TeX 処理系．2004 年誕生）
- pdfTeX (枯れた TeX 処理系，直接 PDF を出力する．1997 年誕生）
- LuaTeX (pdftex の後継で内部エンコーディングが Unicode であり，Lua でマクロがかける TeX 処理系，2007 年誕生)

日本語で LaTeX の組版するときのおすすめ順は，LuaTeX, upTeX, pTeX, XeTeX, pdfTeX である．

LuaTeX は現在 TeX コミュニティでフラグシップの TeX 処理系であり，日本語組版の開発も活発です．
とくにフォントと PDF 関連の機能は LuaTeX が最も充実しています．インターネット上にあるテンプレートを使用しない場合は
迷わず LuaTeX で十分なことが多いです．

upTeX は日本において pTeX に続いて使用人口の多いと推定される TeX 処理系である．
pTeX のほぼ上位互換であり，Unicode を使用できる pTeX であることから従来の pTeX を対象に作られた資産の移行先として有望である．
また，LuaTeX は依然として他の TeX 処理系よりレンダリング速度が遅いので，巨大なドキュメントを頻繁にコンパイルするような環境では
upTeX を使うと開発が快適になるかもしれない．しかし，内部エンコーディングが pTeX と異なるので，いくつかのクラスファイルは
upTeX に移行できない．

pTeX は日本において最も使用人口の多い TeX 処理系である．
もっとも古くから使用されていることから，ほとんどの TeX の資産が pTeX で使用できる．
内部エンコーディングが Unicode ではないため，直接レンダリングできない文字がある．
手っ取り早くドキュメントを作る場合は，pTeX がもっともトラブルが少ないかもしれない．

XeTeX は海外でよく使われている TeX の処理系です．システムのフォントを簡単に使用できるのでフォントにこだわる人は XeTeX も良い選択肢である．
しかし，XeLaTeX で使用される日本語用のドキュメントクラスは，十分な禁則処理を実装しきれておらず，貢献者を募っている状況がある．

pdfTeX は海外で最も使用人口の多い TeX 処理系である．
もっとも古くから使用されていることから，ほとんどの TeX の資産が pdfTeX で使用できる．
内部エンコーディングが Unicode ではないので，適当な処理をせずに直接 pdflatex を使って日本語のドキュメントをコンパイルしようとすると，
失敗する．また pdfTeX の日本語用のドキュメントクラスも，十分な禁則処理を実装しきれておらず，貢献者を募っている状況がある．

## ドキュメントクラス

日本語ドキュメントクラスは`jclasses`と`jsclasses`, `ltjsclasses`, `Bxjscls`がある．

`jsclasses`は`jclasses`の後継であり，日本でもっとも使用されているドキュメントクラスである．
このドキュメントクラスは，pTeX と upTeX でコンパイルできる．

`ltjsclasses`は`jsclasses`を LuaTeX でコンパイルできるように改変したもので，
フォント等の部分で LuaTeX の機能が十分に発揮できるように機能が追加されている．

`Bxjscls`は`jsclasses`を pTeX, upTeX, pdfTeX, XeTeX, LuaTeX などでコンパルできるように改変したものである． クロスプラットフォームなので，テンプレートを作ったりする分には便利かもしれない．

とくに理由がなければ，`jsclasses`か`ltjsclasses`を使用する TeX 処理系によって選べばよい．
ちなみに `jclasses` 系のクラスファイルと `jsclasses` 系では組版結果が大きく異なるので安易に書き換えてはいけない．

## 本文組版の際の書体について

| 結果 | コマンド | 意味 |
|:-----|:-------|:----|
| 立体 | `\textrm{立体}` | 本文の通常の書体 |
| 太字 | `\textbf{太字}` | 見出し用の書体 |
| イタリック | `\textit{イタリック}` | 欧文の強調用の書体，書名用の書体 |
| 斜体 | `\textsl{斜体}` | イタリックの代替 |
| スモールキャピタル | `\textsc{スモールキャピタル}` | 
| サンセリフ | `\textsf{サンセリフ}` | 見出し用の書体 |
| Typewriter | `\texttt{Typewriter}` | 計算機の入出力 |
| 明朝体 | `\textmc{明朝体}` | 本文の通常の書体 |
| ゴシック体 | `\textgt{ゴシック体}` | 強調，見出し用の書体 |

## Beamer

通常の beamer ドキュメントクラスに`luatexja`パッケージを読み込むことで，日本語で Beamer ドキュメントを作ることができる．

## 参考文献
- [TeX 処理系御伽話](https://web.archive.org/web/20190521132203/https://qiita.com/yyu/items/6404656f822ce14db935)
- [文字修飾とフォント](https://hwb.ecc.u-tokyo.ac.jp/wp/applications-2/latex/font-2/)
