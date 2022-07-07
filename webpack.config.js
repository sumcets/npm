module.exports = {
    module: {
        rules: [
            {
                test:/\.(ttf|eot|woff|woff2|svg)$/,
                use:['file-loader']
            }
        ]
    }
}
