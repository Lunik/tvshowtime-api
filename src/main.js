const ext = require('./extractor.js')
var Extractor
function Main (token) {
  Extractor = new ext(token)

  this.defaultCallback = function (data) {console.log(data)}
}

Main.prototype.get = function (proto, options, callback) {
  options = typeof options !== 'undefined' && options !== null ? options : {}
  callback = typeof callback !== 'undefined' && callback !== null ? callback : this.defaultCallback
  // maybe verif que le proto existe
  options.req = proto.toLowerCase()

  Extractor.request(options, callback)
}

Main.prototype.post = function (proto, options, callback) {
  options = typeof options !== 'undefined' && options !== null ? options : {}
  callback = typeof callback !== 'undefined' && callback !== null ? callback : this.defaultCallback
  // maybe verif que le proto existe
  options.req = proto.toLowerCase()

  Extractor.post(options, callback)
}
module.exports = Main
