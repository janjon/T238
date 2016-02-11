var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')

module.exports = {
    context: path.join(__dirname, './client'),
    entry: {
        jsx: './index.js',
        html: './index.html'
    },
    output: {
        path: path.join(__dirname, './static'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.css$/,
            // loader: ExtractTextPlugin.extract('style-loader',
            //       'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            //       'postcss-loader')
            loaders: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: [
                'react-hot',
                'babel-loader'
            ]
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'url-loader?limit=10000',
        }, { // bootstrap font-awesome
            test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url',
            query: {
                limit: 10000
            }
        }]

    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    postcss: [
        rucksack({
            autoprefixer: true
        })
    ],
    devServer: {
        contentBase: './client',
        hot: true
    }
}
