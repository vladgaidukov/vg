const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vg.js',
    },
    devServer: {
        inline: true,
        port: 10001,
        hot: true,
        host: '0.0.0.0'
    }
};