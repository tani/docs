const eleventyRemark = require('@fec/eleventy-plugin-remark');
const eleventyTOC = require('eleventy-plugin-toc');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyRemark, {
    enableRehype: false,
    plugins: [
      require('remark-gfm'),
      require('remark-math'),
      {
        plugin: require('remark-rehype'),
        options: { allowDangerousHtml: true }
      },
      {
        plugin: require('rehype-add-classes'),
        options: {
          table: 'table'
        }
      },
      require('rehype-slug'),
      require('rehype-mathjax'),
      require('rehype-raw'),
      require('rehype-stringify'),
    ]
  });
  eleventyConfig.addPlugin(eleventyTOC);
  eleventyConfig.addCollection("tagList", collection => {
    return Array.from(new Set(collection.getAll().reduce((p, c)=>p.concat(c.data.tags), []).filter(tag => !!tag).sort()))
  });
  eleventyConfig.addLiquidFilter("toUTCString", value => {
    return value.toUTCString();
  })
};
