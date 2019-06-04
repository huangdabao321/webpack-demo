const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "./css/[name].css"
})

module.exports = {
    mode: "production",
    entry: './src/js/index.js',
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: './images',
                        publicPath: './images'

                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [{
                    loader: "file-loader",
                    options:{
                        outputPath:'./fonts/'
                    }
                }]
            },{
                test:/\.html$/,
                loader:'html-loader'
            }]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: "./js/bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        extractSass,
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            title: '团购报名页面',
            minify: {
                removeComments: true,//去掉注释,
                collapseWhitespace: false//去除空格
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'sign.html',
            template: './src/sign.html',
            title: '报名页面 hehe',
            minify: {
                removeComments: true,//去掉注释,
                collapseWhitespace: false//去除空格
            },
        })
    ]
};
