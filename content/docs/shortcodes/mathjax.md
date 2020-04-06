# MathJax

MathJax shortcode let you render math typesetting in markdown document. See [MathJax](https://mathjax.org/)

## Example
{{< columns >}}

```latex
{{</* mathjax [display] [class="text-center"]  */>}}
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
{{</* /mathjax */>}}
```

<--->

{{< mathjax >}}
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
{{< /mathjax >}}

{{< /columns >}}

## Display Mode Example

Here is some inline example: {{< mathjax >}}\pi(x){{< /mathjax >}}, rendered in the same line. And below is `display` example, having `display: block`
{{< mathjax display >}}
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
{{< /mathjax >}}
Text continues here.
