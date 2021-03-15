const eleventyRemark = require('@fec/eleventy-plugin-remark');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyRemark, {
    enableRehype: false,
    plugins: [
      require('remark-math'),
      {
        plugin: require('remark-rehype'),
        options: { allowDangerousHtml: true }
      },
      require('rehype-mathjax'),
      require('rehype-raw'),
      require('rehype-stringify')
    ]
  });
};
