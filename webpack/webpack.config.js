const path = require("path");

const webpack = require("webpack");

const production = process.env.NODE_ENV === "production";

const projectRootPath = path.resolve(__dirname, "..");
const assetsPath = path.resolve(projectRootPath, "./static/dist");

module.exports = {
  devtool: "cheap-module-source-map",
  context: projectRootPath,
  resolveLoader: {
    modules: ["webpack", "node_modules"]
  },
  entry: "./src/client.tsx",
  output: {
    path: assetsPath,
    filename: "[name].js",
    publicPath: "/dist/"
  },
  devServer: {
    publicPath: "http://localhost:3001/dist/",
    stats: {
      assets: false,
      version: false,
      hash: false,
      chunks: false,
      chunkModules: false
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: !production,
      __DEVTOOLS__: !production
    }),

    new webpack.NamedModulesPlugin()
  ],
  stats: {
    children: false
  }
};
