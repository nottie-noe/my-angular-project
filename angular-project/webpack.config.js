const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the entry point as necessary
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Replace contentBase with static
    port: 3000,
    hot: true, // Optional: Enable Hot Module Replacement
  },
};
