const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        entry: {
            desktop: './src/js/desktop.js',
            config: './src/js/config.js'
        },
        output: {
            path: path.resolve(__dirname, 'plugin', 'js'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: 'env'
                            }
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                },
                {
                    test: /\.(gif|jpg|jpeg|tiff|png)$/,
                    use: 'url-loader'
                }
            ]
        },
        plugins: []
    },
    {
        entry: {
            desktop: './src/css/desktop.scss',
            config: './src/css/config.scss'
        },
        output: {
            path: path.resolve(__dirname, 'plugin', 'css'),
            filename: '[name].css'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader?minimize',
                            'sass-loader'
                        ]
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('[name].css')
        ]
    }
];
