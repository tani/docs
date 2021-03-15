---
layout: default
lang: en
tags: knowledge
title: Prolog Snippets
---

# CPS Transformation

<iframe style="border: solid 1px #ccc" width="560" height="315" src="https://prolog-player.netlify.app/?html=%3Cp%3ECPS%E5%A4%89%E6%8F%9B%E3%82%92%E8%A8%88%E7%AE%97%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%82%A2%E3%83%97%E3%83%AA%E3%81%A7%E3%81%99%E3%80%82%E4%B8%8B%E8%A8%98%E3%81%AE%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%97%E3%81%A6%3Ccode%3Eimply(a%2C%20imply(b%2C%20c)).%3C%2Fcode%3E%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92implication%E3%81%AE%E5%BD%A2%E3%81%A7%E5%BC%8F%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%99%E3%82%8B%E3%81%A8%E3%80%81%E4%B8%8B%E8%A8%98%E3%81%AB%E5%A4%89%E6%8F%9B%E7%B5%90%E6%9E%9C%E3%81%8C%E8%A1%A8%E7%A4%BA%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82%3C%2Fp%3E%0A%3Cdiv%20id%3D%22btn-container%22%3E%0A%20%20%3Cbutton%20id%3D%22btn%22%3ECPS%20Transform%3C%2Fbutton%3E%0A%3C%2Fdiv%3E%0A%3Ctable%20style%3D%22display%3A%20none%22%3E%0A%20%20%3Ctbody%3E%0A%20%20%20%20%3Ctr%3E%3Cth%3EInput%3C%2Fth%3E%3Ctd%3E%3Cspan%20id%3D%22input%22%3E%3C%2Fspan%3E%3C%2Ftd%3E%3C%2Ftr%3E%0A%20%20%20%20%3Ctr%3E%3Cth%3EOutput%3C%2Fth%3E%3Ctd%3E%3Cspan%20id%3D%22output%22%3E%3C%2Fspan%3E%3C%2Ftd%3E%3C%2Ftr%3E%0A%20%20%3C%2Ftbody%3E%0A%3C%2Ftable%3E%0A&css=%23btn-container%20%7B%0A%20%20display%3A%20flex%3B%0A%20%20justify-content%3Acenter%3B%0A%20%20align-items%3A%20center%3B%0A%20%20margin-bottom%3A%2010px%3B%0A%7D%0Atable%20%7B%0A%20%20color%3A%20%23666%3B%0A%7D%0Ath%20%7B%0A%20%20width%3A%205em%3B%0A%20%20padding-right%3A%2010px%3B%0A%20%20border-right%3A%20solid%201px%20%23aaa%3B%0A%7D%0Atable%20%7B%0A%20%20width%3A%20100%25%3B%0A%20%20border%3A%20solid%201px%20%23aaa%3B%0A%7D%0A%23btn%20%7B%0A%20%20padding%3A%205px%3B%0A%20%20font-size%3A%201.2em%3B%0A%20%20background%3A%20transparent%3B%0A%20%20color%3A%20green%3B%0A%20%20border%3A%20solid%201px%20green%3B%0A%20%20border-radius%3A%205px%3B%0A%7D%0A%23btn%3Ahover%20%7B%0A%20%20background%3A%20green%3B%0A%20%20color%3A%20white%3B%0A%7D&prolog=%3A-use_module(library(charsio)).%0A%3A-use_module(library(dom)).%0A%0Acps0(T%2C%20A%2C%20imply(imply(U%2CA)%2CA))%20%3A-%20cps1(T%2CA%2CU).%0Acps1(T%2C%20_%2C%20T)%20%3A-%20atom(T).%0Acps1(imply(T%2C%20S)%2C%20A%2C%20imply(X%2C%20Y))%20%3A-%20cps1(T%2CA%2CX)%2C%20cps0(S%2CA%2CY).%0A%0Amain%20%3A-%0A%20%20get_by_id(btn%2C%20Btn)%2C%0A%20%20get_by_id(output%2C%20Output)%2C%20%0A%20%20get_by_id(input%2C%20Input)%2C%0A%20%20get_by_tag(table%2C%20Table)%2C%0A%20%20bind(Btn%2C%20click%2C%20_%2C%20(%0A%20%20%20%20read(T)%2C%0A%20%20%20%20cps0(T%2C%20a%2C%20S)%2C%0A%20%20%20%20set_style(Table%2C%20display%2C%20block)%2C%0A%20%20%20%20html(Input%2C%20T)%2C%0A%20%20%20%20html(Output%2C%20S)%0A%20%20)).&limit=10000&query=main."></iframe>