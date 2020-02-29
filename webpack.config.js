const path = require('path');
const { argv } = require('yargs');

const { watch = false, prod = false, port = 8080 } = argv;

/*  Webpack */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = {
  source: path.join(__dirname, 'src'),
  target: path.join(__dirname, 'docs')
};

console.log('================================');
console.log(`Production: ${prod}`);
console.log(`Watch:      ${watch}`);
console.log('================================');

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
    filename: prod ? '[name].[hash].js' : '[name].bundle.js'
  },
  watch,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/
  },
  devtool: 'source-map',
  mode: prod ? 'production' : 'development',
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
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?_=[hash]'
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
          'postcss-loader'
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: ['css-loader']
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
      template: path.resolve(paths.source, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  devServer,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
};
