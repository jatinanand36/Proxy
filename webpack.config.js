const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackVersionFilePlugin = require('webpack-version-file-plugin');
const execa = require('execa');

const gitHash = execa.sync('git', ['rev-parse', '--short', 'HEAD']).stdout;
const gitNumCommits = Number(execa.sync('git', ['rev-list', 'HEAD', '--count']).stdout);
const gitDirty = execa.sync('git', ['status', '-s', '-uall']).stdout.length > 0;

module.exports = {
  entry: './index',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `api.bundle.js`
  },
  plugins: [
    new WebpackVersionFilePlugin({
      packageFile: path.join(__dirname, 'package.json'),
      template: path.join(__dirname, 'version.ejs'),
      outputFile: path.join('dist/', 'version.json'),
      extras: {
          'githash': gitHash,
          'gitNumCommits': gitNumCommits,
          'timestamp': Date.now(),
          'dirty': gitDirty
      }
  }),
  ],
};