---
lang: en
title: Continuations in Programming Language
---

We can use continuations everywhere. I lists the programming languages that have functionalities to use continuations.

## Full continuation

- Scheme
- Racket
- Standard ML
  - MLton
  - SML/NJ
- Ruby
  - CRuby
- JavaScript
  - Rhino
 - Continuation based C

## Delimited Continuation

- Racket
  - cont
- Prolog
  - SWI Prolog
- OCaml
  - delimcc
- Scala
  - scala-continuations (for Scala 2.12 and earlier)
- Common Lisp
  - [cl-cont](https://common-lisp.net/project/cl-cont/)
- Clojure
  - [cont](https://clojars.org/cont)
  - [delimc](https://clojars.org/delimc)
- Java
  - [Project Loom](https://openjdk.java.net/projects/loom/)
- C
  - [libshift0](https://github.com/tilk/libshift0)

## Continuation Monad

- Haskell
  - Control.Monad.Cont
- Scala
  - Cats.data.ContT
- Clojure
  - algo.monads.cont-m
- F#
  - FSharpPlus.Data.Cont
