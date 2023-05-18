module.exports = {
    output: "export",
    async generateStaticPaths() {
      return {
        
        '/': { page: '/' },
        '/articles/article1': { page: '/articles/[slug]', query: { slug: 'article1' } },
        '/articles/article2': { page: '/articles/[slug]', query: { slug: 'article2' } },
        '/articles/article3': { page: '/articles/[slug]', query: { slug: 'article3' } },
        // Add more paths as needed
      };
    },
  };
  