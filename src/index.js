'use strict'

const Settings = require('./settings.js')
const Extractor = require('./extractor.js')

function TVSTAPI () {

}

TVSTAPI.prototype.getUser = function (callback) {
  Extractor.get({req: 'user'}, callback)
}

TVSTAPI.prototype.getToWatch = function (options, callback) {
  options = typeof options !== 'undefined' ? options : {}
  options.req = 'to_watch'
  callback = typeof callback !== 'undefined' ? callback : function(data){console.log(data)}

  Extractor.get(options, callback)
}
module.exports = new TVSTAPI()
