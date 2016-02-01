'use strict'

const Settings = require('./settings.js')
const Extractor = require('./extractor.js')

function TVSTAPI () {
  this.defaultCallback = function (data) {console.log(data)}
}

TVSTAPI.prototype.get = function (proto, options, callback) {
  options = typeof options !== 'undefined' ? options : {}
  callback = typeof callback !== 'undefined' ? callback : this.defaultCallback
  //maybe verif que le proto existe
  options.req = proto.toLowerCase()

  Extractor.request(options, callback)
}

TVSTAPI.prototype.set = fucntion(proto, options, callback) {
  options = typeof options !== 'undefined' ? options : {}
  callback = typeof callback !== 'undefined' ? callback : this.defaultCallback
  //maybe verif que le proto existe
  options.req = proto.toLowerCase()

  Extractor.request(options, callback)
}
module.exports = new TVSTAPI()
