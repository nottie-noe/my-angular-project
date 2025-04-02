const path = require('path');

module.exports = {
  entry: './src/main.ts', // Update this to point to the correct entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Replace contentBase with static
    port: 3000,
    hot: true, // Optional: Enable Hot Module Replacement
  },
  resolve: {
    extensions: ['.ts', '.js'], // Add '.ts' extension if using TypeScript
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader', // Ensure you have ts-loader installed for TypeScript files
        exclude: /node_modules/,
      },
      // You can add other rules here if necessary
    ],
  },
};
