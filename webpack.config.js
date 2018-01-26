const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: "./src/entry.tsx",
        vendor: [
            'react',
            'react-dom'
        ],
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: "/dist/",
        watchContentBase: true
    },
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json"
        ]
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                use: [
                    'awesome-typescript-loader',
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}