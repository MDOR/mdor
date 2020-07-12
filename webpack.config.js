const path = require('path');
const { argv } = require('yargs');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminSvgo = require('imagemin-svgo');

/*  Webpack */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { watch = false, production = false, port = 8080 } = argv;
const paths = {
  source: path.join(__dirname, 'src'),
  target: path.join(__dirname, 'docs')
};

console.log('================================');
console.log(`Production: ${production}`);
console.log(`Watch:      ${watch}`);
console.log('================================');

const devServer =
  (watch && {
    // Remove useless webpack dev server logs
    clientLogLevel: 'none',
    // Enable gzip compression of generated files
    compress: true,
    // Serving files to the target folders and watch content
    contentBase: paths.target,
    watchContentBase: true,

    quiet: true,
    hot: true,
    liveReload: true,
    port,
    stats: 'errors-only',
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }) ||
  {};

const htmlMinifyConfig = Boolean(production) && {
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true,
  minifyCSS: true,
  minifyJS: true
};

module.exports = {
  entry: [path.resolve(paths.source, 'js/index.js')],
  output: {
    path: paths.target,
    filename: production ? '[name].[hash].js' : '[name].bundle.js'
  },
  watch,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: ['node_modules/**']
  },
  devtool: 'source-map',
  mode: production ? 'production' : 'development',
  target: 'web',
  stats: 'errors-only',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      })
    ]
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
              svgo: {
                plugins: [
                  { removeTitle: true },
                  { minifyStyles: true },
                  { removeAttrs: false },
                  { removeUselessDefs: true },
                  { removeEmptyAttrs: true }
                ]
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
        test: /\.s(c|a)ss$/i,
        use: [
          ...(!production ? ['style-loader'] : [MiniCssExtractPlugin.loader]),
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')()]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          ...(!production ? [] : [MiniCssExtractPlugin.loader]),
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.jpeg',
      '.jpg',
      '.png',
      '.js',
      '.ts',
      '.jsx',
      'scss',
      'css',
      'html'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.source, 'img'),
          to: path.resolve(paths.target, 'img')
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.source, 'index.html'),
      minify: htmlMinifyConfig
    }),
    ...(!production
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: production ? '[name].[hash].css' : '[name].bundle.css',
            inject: true
          }),
          new CompressionPlugin({
            test: /\.(js|html)$/,
            minRatio: 0
          }),
          new ImageminPlugin({
            bail: false,
            cache: true,
            plugins: [
              imageminMozjpeg({ quality: 70 }),
              imageminSvgo({
                plugins: [{ removeViewBox: false }, { removeDimensions: true }]
              })
            ]
          })
        ]),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.scss$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ],
  devServer
};
