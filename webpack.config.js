const path = require('path');
 
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vg.js',
  },
  devServer: {
    inline:true,
    port: 10000,
    hot: true
  },
};
