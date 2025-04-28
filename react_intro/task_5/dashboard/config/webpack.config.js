const path = require('path');

module.exports = {
  entry: './src/index.js', // Path to your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Babel presets
          }
        }
      },
      {
        test: /\.css$/, // If you have CSS files
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // If you have images
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Allow import without specifying extension for .js and .jsx files
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000 // Set the port for webpack-dev-server
  }
};
