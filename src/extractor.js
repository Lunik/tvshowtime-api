const Settings = require('./settings.js')
const Configurable = require('./configurable.js')

var request = require('request')

function Extractor () {
}

Extractor.prototype.request = function (options, callback) {
  request(Configurable.set(options), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body))
    }
  })
}

module.exports = new Extractor()
