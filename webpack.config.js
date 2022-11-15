const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: { 
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.s?css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpe?g|gif|ico)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        })
    ],
    // devServer: {
    // }
    devtool: 'source-map',
}