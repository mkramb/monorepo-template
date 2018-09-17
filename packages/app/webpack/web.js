const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./common');

module.exports = merge(config, {
    entry: {
        index: path.resolve(__dirname, '..', 'src/index.tsx')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.CDX_API_ENDPOINT': (
                process.env.CDX_API_ENDPOINT && JSON.stringify(process.env.CDX_API_ENDPOINT)
            )
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, '..', 'src/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        })
    ]
});
