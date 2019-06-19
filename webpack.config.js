var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/board.js',
  output: {
    path: path.resolve(__dirname,),
    filename: 'main.js'
  },
 module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
      ]},
  devServer: {
    proxy: {
      '/api': 'http://localhost:8089'
    }
  }

}