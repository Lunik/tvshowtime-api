const config = require('./configurable.js')
var Configurable

var request = require('request')

function Extractor (token) {
  Configurable = new config(token)
}

Extractor.prototype.request = function (options, callback) {
  request(Configurable.set(options), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body))
    }
  })
}

Extractor.prototype.post = function (options, callback) {
  request.post(Configurable.set(options), {form: options}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body))
    }
  })
}
module.exports = Extractor
