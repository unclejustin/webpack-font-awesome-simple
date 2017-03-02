const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

var config = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000',
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

module.exports = config;