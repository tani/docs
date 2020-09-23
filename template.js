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
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+SC:wght@400;700&family=Source+Code+Pro&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <style>
        ${fs.readFileSync("node_modules/picnic/picnic.min.css", "utf-8")}
        ${fs.readFileSync("node_modules/highlight.js/styles/default.css", "utf-8")}
        nav {
            position: absolute;
        }
        header, main, footer {
            font-family: 'Source Sans Pro', 'Noto Sans JP', 'Noto Sans SC', sans-serif;
            width: min(800px, 100%);
            padding: 0px 20px;
            margin: 50px auto;
        }
        code {
            font-family: 'Source Code Pro', monospace;
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
        <main>
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
