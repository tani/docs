const markdownIt = require("markdown-it");
const mathjax = require("markdown-it-mathjax");

module.exports = function(eleventyConfig) {
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(mathjax());
  
  eleventyConfig.setLibrary("md", markdownLib);
};
