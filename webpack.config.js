const path = require("path")

module.exports = {
  entry: "./src/background.ts",

  output: {
    filename: "background.js",
    path: path.resolve(__dirname, "dist")
  },

  mode: "production",

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".js"]
  }
}
