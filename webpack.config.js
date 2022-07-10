const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: resolve(__dirname, 'src', 'main.ts'),
  target: 'node',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts']
  },
  externals: [nodeExternals()],
}
