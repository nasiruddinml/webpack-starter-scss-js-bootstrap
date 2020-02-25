const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');

const glob = require('glob')

const entryFiles = glob.sync("./src/**/*.@(ts|js|tsx|jsx)").reduce((acc, item) => {
  const name = path.basename(item, path.extname(item));
  acc[name] = item;
  return acc;
}, {})

module.exports = (env, argv) => {
  return ({
    entry: entryFiles,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [{
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: argv.mode === 'development',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: argv.mode === 'development',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: argv.mode === 'development',
            },
          },
        ]
      },
      {
        test: /\.(jpe?g|png|gif|mp3)$/i,
        loaders: ['file-loader']
      }, {
        test: /\.ico$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            mimetype: 'application/font-woff'
          }
        }

        ]
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
      ]
    },
    plugins: [
      new Webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new CopyPlugin([
        { context: __dirname + '/src', from: '**/*.html' },
        { from: './src/assets', to: 'assets/' },
      ])
    ],
    devtool: argv.mode === 'development' ? 'source-map' : '',
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  })
};