const path = require("path");

module.exports = [{
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        library: "VG",
        filename: "vg.js"
    },
    devServer: {
        inline: true,
        port: 10001,
        hot: true,
        host: "127.0.0.1"
    }
}, {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "../arena-game/static/js/vendor"),
        libraryTarget: "umd",
        library: "VG",
        filename: "vg.js"
    }
}];

