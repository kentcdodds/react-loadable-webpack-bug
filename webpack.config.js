module.exports = {
  entry: './index.js',
  output: {
    filename: './bundle.js'
  },
  externals: {
    react: 'React'
  }
}