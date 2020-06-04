const gulp = require("gulp")
const rename = require("gulp-rename")
const htmlmin = require("gulp-htmlmin")
const Engine = require("unified-engine-gulp")
const unified = require("unified")
const remark = require("remark-parse")
const remark2rehype = require("remark-rehype")
const frontmatter = require("remark-frontmatter")
const extract = require("remark-extract-frontmatter")
const math = require("remark-math")
const mathjax = require("rehype-mathjax")
const highlight = require("rehype-highlight")
const stringify = require("rehype-stringify")
const { template } = require("rehype-template")
const removeUnusedCss = require("rehype-remove-unused-css")
const { parse } = require("yaml")

const processor = unified()
    .use(remark)
    .use(math)
    .use(frontmatter)
    .use(extract, {yaml: parse})
    .use(remark2rehype)
    .use(template, {template: require("./template")})
    .use(highlight)
    .use(mathjax)
    .use(removeUnusedCss)
    .use(stringify)

const engine = new Engine({
    name: "remark",
    processor,
})

exports.default = () => 
    gulp.src("*.md")
        .pipe(engine())
        .pipe(htmlmin({
            minifyCSS: true,
            collapseWhitespace: true,
            conservativeCollapse: true
        }))
        .pipe(rename({extname: ".html"}))
        .pipe(gulp.dest("build/"))