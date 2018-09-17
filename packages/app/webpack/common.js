require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const helpers = require('env-var-helpers');

module.exports = {
    mode: helpers.isProd ? 'production' : 'development',
    devtool: helpers.isProd ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
        overlay: { errors: true, warnings: true },
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    output: {
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].bundle.js',
        devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
        path: path.resolve(__dirname, '..', 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$|\.jsx$|\.tsx?$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$|\.jsx$|\.tsx?$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },
            {
                test: /\.js$|\.jsx$|\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [new webpack.NoEmitOnErrorsPlugin()]
};
