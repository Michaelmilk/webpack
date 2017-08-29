var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

const extractLib = new ExtractTextPlugin('lib.css');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  resolveLoader: {
      moduleExtensions: ['-loader']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { 
              configFileName: helpers.root('src', 'tsconfig.json') 
            }
          } , 
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        //include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        //exclude: helpers.root('src', 'app'),
        use: ExtractTextPlugin.extract(
          { 
            fallback: 'style-loader', 
            use: 'css-loader?sourceMap' 
        })
      },
      

      // {
      //       test: /\.scss$/,
      //       use: [{
      //           loader: "style-loader"
      //       }, {
      //           loader: "css-loader"
      //       }, {
      //           loader: 'sass-loader',
      //           options: {
      //               includePaths: [
      //                   helpers.root('src', 'assets', 'sass'),
      //               ]
      //           }
      //       }]
      //   },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract("style", 'css!sass') 
      //   //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
      // },
      // {
      //   test: /\.scss$/i,
      //   include: helpers.root('src', 'assets', 'sass'),
      //   loader: extractLib.extract({
      //       fallback: 'style-loader',
      //       use: [
      //           {
      //               loader: 'css-loader',
      //           },
      //           {
      //               loader: 'sass-loader'
      //           }
      //       ]
      //   })
      // },

      //for bootstrap
      { 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "file" 
      },
      { 
        test: /\.(woff|woff2)$/, 
        loader:"url?prefix=font/&limit=5000" 
      },
      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&mimetype=application/octet-stream" 
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&mimetype=image/svg+xml" 
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};

