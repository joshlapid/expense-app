const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCSSExtract = new MiniCssExtractPlugin({
    filename: 'style.css'
});

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }

        }, {
            test: /\.s?css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ],
        }]
    },
    plugins: [
        MiniCSSExtract
    ]
};