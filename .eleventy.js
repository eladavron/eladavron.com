module.exports = function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  
  // Create navigation collection
  eleventyConfig.addCollection("navigation", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.inNav)
      .sort((a, b) => (a.data.navOrder || 0) - (b.data.navOrder || 0));
  });
  
  // Filter to extract h2 headers from content
  eleventyConfig.addFilter("extractHeaders", function(content) {
    if (!content) return [];
    // Use [\s\S] instead of . to match across newlines
    const headerRegex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
    const headers = [];
    let match;
    while ((match = headerRegex.exec(content)) !== null) {
      // Extract text content, removing HTML tags but preserving whitespace
      let text = match[1].replace(/<img[^>]*>/gi, '').replace(/<[^>]+>/g, '').trim();
      // Generate ID from the text content
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      if (text && id) {
        headers.push({ text, id });
      }
    }
    return headers;
  });
  
  // Add IDs to h2 elements
  eleventyConfig.addTransform("addHeaderIds", function(content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      return content.replace(/<h2>(.*?)<\/h2>/gi, function(match, text) {
        const id = text.replace(/<[^>]+>/g, '').trim().toLowerCase()
          .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return `<h2 id="${id}">${text}</h2>`;
      });
    }
    return content;
  });
  
  // Set custom directories for input, output, includes, and layouts
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
