const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            /* "@primary-color": "#1DA57A" */
            "@font-family": "GraphieW01-Book",
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
