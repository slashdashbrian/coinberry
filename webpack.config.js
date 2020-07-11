const path = require("path")


module.exports = {
mode: 'development',
entry: ['babel-polyfill', './src/index.js'],
output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
},
devServer: {
    port: 1346,
    contentBase: path.join(__dirname, 'dist')
},
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
}

}