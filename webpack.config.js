const path = require("path")

module.exports = {
  watch: true,
  entry: {
    background: "./src/background.ts",
    script: "./src/script.ts"
  },

  output: {
    filename: "[name].js",
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
