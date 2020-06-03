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
        ${fs.readFileSync('node_modules/picnic/picnic.min.css', 'utf-8')}
        ${fs.readFileSync('node_modules/highlight.js/styles/default.css', 'utf-8')}
        nav {
            position: absolute;
        }
        main, footer {
            font-family: source-han-serif-japanese, serif !important;
            font-feature-settings: "palt";
            max-width: 800px;
            padding-left: 20px;
            padding-right: 10px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
        }
        code {
            font-family: source-code-pro, monospace !important;
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
                    <a class="pseudo button" href="/profile/">PROFILE</a>
                </div>
            </nav>
        </header>
        <main>
            ${node}
        </main>
        <footer>
            <p>Copyright &copy; 2020 TANIGUCHI Masaya All Rights Reserved.</p>
            <p>Please tell me on <a href="https://github.com/nzt/docs">GitHub</a> if you found any typos and misstatements.</p>
        </footer>
        <script>
        (function(d) {
            var config = {
            kitId: 'bzi0cwq',
            scriptTimeout: 3000,
            async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
        </script>
    </body>
</html>
`