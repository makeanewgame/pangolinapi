module.exports = () => ({
    upload: {
        config: {
          sizeLimit:  10 * 1024 * 1024,
          breakpoints: {
            full: 2048,
            xlarge: 1920,
            large: 1000,
            medium: 750,
          },
        },
      },
});
