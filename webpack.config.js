const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
// console.log('development: ', isDev);

const isProd = !isDev;

const filename = ext => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

// optimization
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new CssMinimizerWebpackPlugin(),
    ];
  }

  return config;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: ['babel-plugin-react-scoped-css'],
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'scoped-css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        use: ['file-loader'],
        generator: {
          filename: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // расширение по умолчанию
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename('js'),
  },
  optimization: optimization(),
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: path.resolve(__dirname, './src/index.html'), // шаблон
      filename: 'index.html', // название выходного файла
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //     {
    //         from: './src/assets/images',
    //         to: './dist/images',
    //     }
    // ]),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  devServer: {
    static: './dist',
    hot: isDev,
    port: 8080,
    open: true,
  },
  ...isDev && { devtool: 'source-map' },
};
