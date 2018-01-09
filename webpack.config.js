let browserSyncPlugin = require('browser-sync-webpack-plugin');
let webpack = require('webpack');
let version = require('./package.json').version

const APP = 'app.js'
const APP_INDEX = 'app.index.js'
const APP_PATH = 'app/'
const BUILD_PATH = './dist'
const SRC_PATH = './src/js/'
const VERSION_NUMBER = '.' + version

module.exports = {
  watch: true,
  entry: {
    'js/app.index': SRC_PATH + APP_PATH + APP_INDEX,
    'js/app': SRC_PATH + APP_PATH + APP
  },
  output: {
    filename: '[name]' + VERSION_NUMBER + '.js',
    publicPath: ''
  },
  module: {
    rules : [
      {
        test: /\.(tag|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.html/,
        loader: 'html-loader',
        options: {
          name: './[name].[ext]'
        }
      },
      {
        // htmlとして吐き出したいファイルは「/src/www」配下に設定してください
        test: /\.html/,
        exclude: /assets/,
        loader: 'file-loader',
        options: {
          name: './[name].[ext]'
        }
      },
      // CSSファイルの読み込み
      {
        // 対象となるファイルの拡張子
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        // 対象となるファイルの拡張子
        test: /\.scss/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        loader: 'url-loader?mimetype=application/font-woff',
        // query: { name: '[name].[ext]?[hash]' }
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'url-loader?mimetype=application/font-woff',
      },
    ],
  },
  plugins: [
    // ミニファイ
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // console.log（）などのconsole.*系の記述を取り除いて出力する
        drop_console: true
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],// Bootstrap4対応
      Tether: 'tether'
    })
  ]
}
