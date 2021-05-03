---
layout: default
lang: en
tags: blog
title: Isabelle in Emacs
date: 2021-05-02
---

## Isabelle in Emacs

About a decade ago, proof-general maintainers decided to stop maintaining the plugin for the proof assistant, Isabelle. The reason was the API is not stable between Emacs and Isabelle. We, hence, needed to use jEdit to develop our proofs. We can see enough buttons to apply Isabelle functions on the editor, but which is an inconvenient interface to write code with friendly keybindings such as Emacs and Vim. On the other hand, proof-general maintainers provide an easy interface to use Coq in Emacs. This fact was a solid disadvantage for Isabelle users.

In 2018, the developer of Isabelle changed the surrounding state. The first cry is the appearance of Isabelle/VSCode, which means that they implemented the Language Server Protocol (LSP), known as a stable API developed by Microsoft. You might have a question, “How to display the Isabelle symbols?” if you have the experience to use the proof assistant. The answer is, “There is an extension to display Mathematical symbols.” It, however, is not the best extension for me, at least because the extension is cranky and slow to display symbol.

In 2021, I found the excellent project named isabelle-emacs, previously called isabelle-release, a plugin for lsp-mode of emacs. So, we lastly brought back the perfect emacs interface for the proof assistant. The developer of this package relies on LSP, but they extend the API of Isabelle by their hand to show hints in Emacs, same as jEdit actively maintained by Isabelle. Thus, the facilities are almost the same as jEdit, but also we can write the code with the usual keybindings. What’s fantastic news!

As I introduced above, we now have enough interface to start learning Isabelle instead of, or parallelly, Coq. Cheers!
