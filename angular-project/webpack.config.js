const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the path if necessary
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
};
