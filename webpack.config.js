const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: [path.join(__dirname, "src", "index")],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: "./index.html",
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css",
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: "babel-loader",
      },
      // {
      //   test: /\.css$/i,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      // {
      //   test: /\.(jpg|png|svg)$/,
      //   exclude: /node_modules/,
      //   include: /src/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[path][name].[hash].[ext]",
      //   },
      // },
    ],
  },
};
