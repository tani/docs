---
layout: default
lang: en
title: Home
---

## Index

Welcome to my webpage. I am TANIGUCHI Masaya, a JSPS fellow at JAIST. <br>
My research interests lie in logic and linguistics, which related work I listed in the following collection.

{% for tag in collections.tagList %}

### {{ tag }}

{% for article in collections[tag]%}
-  [{{ article.data.title }}]({{ article.url }})
{% endfor %}

{% endfor %}