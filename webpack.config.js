const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, { mode }) => {
  const isDev = mode === 'development';

  const filename = ext => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

  return {
    context: path.resolve(__dirname, 'src'),
    entry: './index.jsx',
    mode,
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
            filename: 'assets/images/[name][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name][ext]',
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
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      ...!isDev && {
        minimizer: [new CssMinimizerWebpackPlugin()],
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'App',
        template: 'assets/index.html', // шаблон
        filename: 'index.html', // название выходного файла
        minify: {
          collapseWhitespace: !isDev,
        },
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({ patterns: [{ from: 'assets/public', to: 'public' }] }),
      new MiniCssExtractPlugin({
        filename: filename('css'),
      }),
    ],
    devServer: {
      hot: isDev,
      port: 8080,
      open: true,
    },
    ...isDev && { devtool: 'source-map' },
  };
};
