const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

const cssPlugin = new ExtractTextPlugin("[name].styles.[hash].css");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html"
});

const cleanPlugin = new CleanWebpackPlugin();

const envPlugin = new webpack.EnvironmentPlugin({
    SERVER_URL: "0.0.0.0:8010"
});

module.exports = {
    entry: {
        index: "./index.jsx"

        // map: './map/map.js'
    },
    context: __dirname + "/src",
    output: {
        filename: "[name].bundle.[hash].js",
        path: __dirname + "/dist"
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },

    mode: "development",

    // Enable sourcemaps for debugging webpack"s output.

    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
    },

    plugins: [htmlPlugin, cssPlugin, cleanPlugin, envPlugin],

    module: {
        rules: [{
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|gif)$/,
                loader: "url-loader?limit=1000000"
            },
            {
                test: /\.(jpeg|png|jpg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]"
                    }
                }]
            }
        ]
    }
};