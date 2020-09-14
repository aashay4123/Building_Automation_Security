module.exports = {
  globDirectory: `${__dirname}`,
  globPatterns: ["**/*.{html,json,js,css}"],
  swDest: "/public/sw.js",
  globIgnores: ["../workbox-cli-config.js", "/node_modules"],

  // Define runtime caching rules.
  runtimeCaching: [
    {
      // Match any request that ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: "CacheFirst",

      options: {
        // Use a custom cache name.
        cacheName: "images",

        // Only cache 10 images.
        expiration: {
          maxEntries: 10,
        },
      },
    },
  ],
};
