const fs = require("fs")
const { html, doctype, comment } = require("rehype-template")

module.exports = (node, frontmatter) => html`
${doctype}
<html lang=${frontmatter.language}>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${frontmatter.title} - www.docs.casa</title>
        <link rel="icon" href="data:," />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Noto+Serif+SC:wght@400;700&family=Source+Code+Pro&family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
        <style>
        ${fs.readFileSync("node_modules/picnic/picnic.min.css", "utf-8")}
        ${fs.readFileSync("node_modules/highlight.js/styles/default.css", "utf-8")}
        body {
            font-family: 'Source Serif Pro', 'Noto Serif JP', 'Noto Serif SC', sans-serif;
            background: #e6dfdf;
        }
        nav {
            position: absolute;
        }
        main {
            width: min(900px, 100%);
            margin: 70px auto 20px auto;
        }
        footer {
            width: min(900px, 100%);
            padding: 0px 80px;
            margin: 0 auto;
        }
        code {
            font-family: 'Source Code Pro', monospace;
        }
        .paper {
          background: #fff;
          padding: 30px 80px;
          position: relative;
        }
        .paper,
        .paper::before,
        .paper::after {
          /* Styles to distinguish sheets from one another */
          box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
          border: 1px solid #bbb;
        }
        .paper::before,
        .paper::after {
          content: "";
          position: absolute;
          height: 95%;
          width: 99%;
          background-color: #eee;
        }
        .paper::before {
          right: 15px;
          top: 0;
          transform: rotate(-1deg);
          z-index: -1;
        }
        .paper::after {
          top: 5px;
          right: -5px;
          transform: rotate(1deg);
          z-index: -2;
        }
        </style>
    </head>
    <body>
        <header>
            <nav>
                <a class="brand" href="/">HOME</a>
                <input id="bmenub" type="checkbox" class="show"/>
                <label for="bmenub" class="burger pseudo button">MENU</label>
                <div class="menu">
                    <a class="pseudo button" href="/profile.html">PROFILE</a>
                </div>
            </nav>
        </header>
        <main class="paper">
            ${node}
        </main>
        <footer>
            <p>Copyright (c) 2020 TANIGUCHI Masaya All Rights Reserved.</p>
            <p>Please tell me on <a href="https://github.com/nzt/docs">GitHub</a> if you found any typos and misstatements.</p>
        </footer>
    </body>
</html>
${comment("\npicnic\n"+fs.readFileSync("node_modules/picnic/LICENSE", "utf-8"))}
${comment("\nhighlight.js\n"+fs.readFileSync("node_modules/highlight.js/LICENSE", "utf-8"))}
<!-- MathJaX just generates images and stylesheet but there are no original code. -->
`
