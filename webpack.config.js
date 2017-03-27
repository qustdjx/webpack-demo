/**
 * Created by Jason Ding on 2017/3/27.
 */
var webpack = require('webpack')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg)$/, loader: "url-loader?limit=8192"}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by Jason Ding')
    ]
}