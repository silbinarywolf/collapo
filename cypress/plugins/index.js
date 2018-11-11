// https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/preprocessors__typescript-webpack/cypress/plugins/index.js
const wp = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = {
    webpackOptions: require('../../webpack.config'),
  }
  on('file:preprocessor', wp(options))
}
