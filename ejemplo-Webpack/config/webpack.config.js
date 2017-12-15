var webpack = require('webpack');
var path = require('path');
var basedir = path.dirname(__dirname);

var plugins = [
  new webpack.optimize.UglifyJsPlugin()
];

const rules = [
  {
    test: /\.html$/,
    loader: 'html-loader'
  },
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    }
  }
];

module.exports = {
	entry: {
		app: path.join(basedir, 'src/app/app.js'),
		vendor: ['angular']
	},
	output: {
		path: path.join(basedir, 'src/js/'),
		filename: '[name].bundle.js'
  },
  module: {
    rules: rules
  },
	plugins: plugins
};