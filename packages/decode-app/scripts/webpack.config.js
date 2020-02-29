const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../source/renderer');
const MONACO_DIR = path.resolve(__dirname, '../node_modules/monaco-editor');



module.exports = [
    {
        mode: 'development',
        entry: './source/index.ts',
        target: 'electron-main',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        module: {
            rules: [
                {
                    test: /\.json$/,
                    use: 'json-loader',
                },
                {
                    test: /\.ts$/,
                    include: /source/,
                    use: [{ loader: 'ts-loader' }],
                },
            ],
        },
        output: {
            path: path.join(__dirname, '../build'),
            filename: 'index.js'
        }
    },
    {
        mode: 'development',
        entry: './source/renderer/index.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        module: {
            rules: [
                {
                    test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|.pdf)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path][name].[hash].[ext]',
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    include: APP_DIR,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    include: MONACO_DIR,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.ts(x?)$/,
                    include: /source/,
                    use: [{ loader: 'ts-loader' }]
                },
            ],
        },
        output: {
            path: path.join(__dirname, '../build'),
            filename: 'renderer.js'
        },
        plugins: [
            new MonacoWebpackPlugin({
                // available options are documented at
                // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
            }),
            new HtmlWebpackPlugin({
                template: './source/window/index.html'
            }),
            new CopyWebpackPlugin([
                { from: './source/window/package.json', to: './package.json' },
                { from: './source/assets/', to: './assets/' },
            ]),
        ],
    },
];
