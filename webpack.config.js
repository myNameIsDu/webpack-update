const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
    ],

    devServer: {
        port: 3001,
        compress: true,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
};
