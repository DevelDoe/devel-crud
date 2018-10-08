/**
 * @Author: Morgan Andree Ray DevelDoe
 * @Date:   29-04-2018
 * @Email:  info@andreeray.se
 * @Filename: webpack.dev.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 08-05-2018
 * @License: MIT
 */


 const webpack = require('webpack')
 const path = require('path')
 const CleanWebpackPlugin = require('clean-webpack-plugin')
 const merge = require('webpack-merge')
 const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inlinesourcemap',
    devServer: {
        contentBase: path.join(__dirname, "../devbuild"),
        compress: false,
        inline: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['../devbuild']),
        new webpack.HotModuleReplacementPlugin(),
    ],
})
//
