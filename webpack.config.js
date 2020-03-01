const path = require('path');
const { argv } = require('yargs');
const imageminMozjpeg = require('imagemin-mozjpeg');

const { watch = false, production = false, port = 8080 } = argv;

/*  Webpack */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminSvgo = require('imagemin-svgo');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const paths = {
  source: path.join(__dirname, 'src'),
  target: path.join(__dirname, 'docs')
};

console.log('================================');
console.log(`Production: ${production}`);
console.log(`Watch:      ${watch}`);
console.log('================================');

function gzipMaxCompression(buffer, done) {
  return zlib.gzip(buffer, { level: 9 }, done);
}

let devServer = {};

if (watch) {
  devServer = {
    contentBase: paths.target,
    watchContentBase: true,
    compress: true,
    hot: true,
    liveReload: true,
    port,
    stats: 'errors-only',
    after: function(app, server, compiler) {
      console.log('Ready', app, server, compiler);
      require('opn')(`http://localhost:${port}`);
    }
  };
}

module.exports = {
  entry: [path.resolve(paths.source, 'js/index.js')],
  output: {
    path: paths.target,
    filename: production ? '[name].[hash].js' : '[name].bundle.js'
  },
  watch,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/
  },
  devtool: 'source-map',
  mode: production ? 'production' : 'development',
  target: 'web',
  stats: 'errors-only',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?_=[hash]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')()]
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          ...(!production ? [] : [MiniCssExtractPlugin.loader]),
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.jpeg', '.jpg', '.png', '.js', '.ts', '.jsx', 'scss', 'css']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: path.resolve(paths.source, 'img'),
        to: path.resolve(paths.target, 'img')
      }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.source, 'index.html'),
      minify: Boolean(production) && {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    ...(!production
      ? []
      : [
          new MiniCssExtractPlugin(),
          new ImageminPlugin({
            plugins: [
              imageminMozjpeg({ quality: 70 }),
              imageminSvgo({
                plugins: [
                  {
                    convertColors: true,
                    cleanupAttrs: true,
                    removeTitle: true,
                    minifyStyles: true,
                    convertStyleToAttrs: true,
                    removeUselessDefs: true,
                    removeEmptyAttrs: false
                  }
                ]
              })
            ]
          }),
          new CompressionPlugin({
            test: /\.(js|html)$/,
            minRatio: 0
          })
        ])
  ],
  devServer,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
};
