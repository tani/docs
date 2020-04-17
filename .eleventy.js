const markdownIt = require('markdown-it')
const markdownItMathjax3 = require('markdown-it-mathjax3')
const markdownItPrism = require('markdown-it-prism')
const htmlMinifier = require('html-minifier')

module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("CNAME")
    eleventyConfig.setLibrary("md", markdownIt().use(markdownItMathjax3).use(markdownItPrism))
    eleventyConfig.addTransform("html-minifier", (content, outputPath) => {
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
    });
}
