
// const path = require('r');
module.exports = {
    module: {
        rules: [
            {
                test: /\.(pdf|gif|png|jpe?g|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                    },
                ],
            },
        ],
    },
};