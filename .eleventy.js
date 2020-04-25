const markdownIt = require('markdown-it')
const markdownItContainer = require('markdown-it-container')
const markdownItMathjax3 = require('markdown-it-mathjax3')
const markdownItPrism = require('markdown-it-prism')
const htmlMinifier = require('html-minifier')

const markdown =
    markdownIt()
        .use(markdownItMathjax3)
        .use(markdownItPrism)
        .use(markdownItContainer, 'proof')
        .use(markdownItContainer, 'theorem')
        .use(markdownItContainer, 'lemma')
        .use(markdownItContainer, 'definition')
        .use(markdownItContainer, 'axiom')
        .use(markdownItContainer, 'example')
        .use(markdownItContainer, 'remark')

const minify =
    (content, outputPath) => {
        if (outputPath.endsWith(".html")) {
            let minified = htmlMinifier.minify(content, {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                minifyCSS: true
            });
            return minified;
        }
        return content;
    }

module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("CNAME")
    eleventyConfig.setLibrary("md", markdown)
    eleventyConfig.addTransform("html-minifier", minify);
}
