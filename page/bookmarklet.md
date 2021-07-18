---
layout: default
lang: en
tags: blog
title: Bookmarklet
---

## Bookmarklet

Have you heard the term bookmarklet? You might know some ways to customize your web browsers, such as web extensions, add-ons, and userscripts, which are secure and well-known technologies developed by giants like Google, Microsoft, and Mozilla. The bookmarklet is the oldest technology that firstly appeared in the 1990s by Netscape. 

The bookmarklet is based on that the browser can interpret a snippet in a href attributes. You might see the link beginning at 'javascript:', which is a bookmarklet. As we know the term bookmark in the name, we can add the link to the browser bookmark list. Compared to the other modern technologies, the benefit is that we don't need to add an extra extension to use it, which depends on the browser default functionalities only. You can share your idea and can use other one's idea easily. In this post, I show my bookmarklets using daily.

### GitHub1s

```
javascript:location.href = location.href.replace(/github(1s)?.com/, (_, p1) => (p1 ? 'github.com' : 'github1s.com'))
```

I borrowed this bookmarklet from GitHub1s project README with some modifications.
After adding it, you can jump a VSCode-like viewer of the current file in GitHub by clicking this link from your bookmark list.

### Gitpod

```
javascript:location.href = (location.href.match(/^https:\/\/github\.com/)? 'https://gitpod.io/#' : '') + location.href
```

This is an original bookmarklet. After adding it, you can jump a VSCode-like editor for the current file in GitHub by clicking this link from your bookmark list.


### Other Bookmarklets

I will update the list if I add new bookmarklet in my browser. Enjoy your nice web browsing. Cheers!