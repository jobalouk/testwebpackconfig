const {resolve} = require('path')


module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: '/node_modules/',
        use: ['babel-loader']
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  }
}
