// Webpack
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var WebpackDevServer = require('webpack-dev-server');

// Dev Server for testing
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(1337, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:1337');
});
