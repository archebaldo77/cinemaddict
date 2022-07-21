const path = require(`path`);

module.exports = {
  entry: `./src/main.js`,
  output: {
    path: path.resolve(__dirname, `public`),
    filename: `bundle.js`,
  },
  devtool: `source-map`,
  devServer: {
    static: `./public`,
    port: 8080,
    open: true,
  },
};
