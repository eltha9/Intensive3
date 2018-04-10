// Path resolve
const path = require('path')

// PLugins
const uglifyPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPLugin = require('extract-text-webpack-plugin')

// Input & Output
const dev = process.env.NODE_ENV === 'dev' 
const jsInput = './index.js'
const jsDir = path.resolve('./bundle')
const jsOutput = 'bundle.js'
const cssOutput = '../css/app.css'

let config = {
    entry: jsInput,
    output: {
        path: jsDir,
        filename: jsOutput
    },
    watch: true,
    module: {
        rules:[ 
            { test: /\.js$/,use: ['babel-loader'] },
            { test: /\.css$/, use: ['style-loader','css-loader'] },
            { test: /\.scss$/, use: ExtractTextPLugin.extract({fallback: 'style-loader',use: ['css-loader','sass-loader' ]}) }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [new ExtractTextPLugin({filename: cssOutput})]
}

// Uglify test
if (!dev) {
    config.plugins.push(new uglifyPlugin({sourceMap: true}))
}


module.exports = config