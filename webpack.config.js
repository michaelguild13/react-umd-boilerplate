var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // TODO: include or not to include?
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  //   'underscore': 'underscore'
  // },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap'}
    ]
  },
  plugins: [
    new ExtractTextPlugin( "./dist/StoryUI.css" , { allChunks: true } ),
    new webpack.NoErrorsPlugin()
  ]
};
