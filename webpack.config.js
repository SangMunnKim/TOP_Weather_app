const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename: '[name].html',
            title: 'Webpack Output',
            template: './src/index.html',
        }),
        new DotenvWebpackPlugin(),
    ],
    watch: true,
};