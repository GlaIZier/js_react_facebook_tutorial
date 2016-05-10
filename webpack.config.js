var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/scripts/components/entry.js',
  output: {
    path: __dirname + "/public/build",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loaders: ["react-hot", "babel-loader?presets[]=react,presets[]=es2015"],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
  ]
};
