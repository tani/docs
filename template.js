const fs = require("fs")
const { html, doctype } = require("rehype-template")

module.exports = (node, frontmatter) => html`
${doctype}
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${frontmatter.title} - wwww.typed.cc</title>
        <link rel="icon" href="data:," />
        <style>
        ${fs.readFileSync("node_modules/picnic/picnic.min.css", "utf-8")}
        ${fs.readFileSync("node_modules/highlight.js/styles/default.css", "utf-8")}
        nav {
            position: absolute;
        }
        main, footer {
            font-family: "Palatino Linotype", Palatino, "URW Palladio L", "Yu Mincho", YuMincho, "Noto Serif CJK JP", serif !important;
            font-feature-settings: "palt";
            width: min(800px, 100%);
            padding: 0px 20px;
            margin: 50px auto;
        }
        code {
            font-family: "Lucida Console", Monaco, "Noto Mono", monospace !important;
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
`