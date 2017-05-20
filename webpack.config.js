const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    'app/app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      appSass: 'app/styles/app.scss',
      Main: 'app/components/Main.js',
      Header: 'app/components/Header.js',
      Inputer: 'app/components/Inputer.js',
      TodoList: 'app/components/TodoList.js',
      TodoRow: 'app/components/TodoRow.js',
      AddBar: 'app/components/AddBar.js',
      SearchBar: 'app/components/SearchBar.js',
      Filter: 'app/api/Filter.js'
    },
    extensions: ['', '.jsx', '.js']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'inline-source-map'
};
