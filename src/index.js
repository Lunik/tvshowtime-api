'use strict'

const Settings = require('./settings.js')
const Extractor = require('./extractor.js')

function TVSTAPI () {
  this.defaultCallback = function(data){console.log(data)}
}

TVSTAPI.prototype.getUser = function (callback) {
  callback = typeof callback !== 'undefined' ? callback : this.defaultCallback
  Extractor.get({req: 'user'}, callback)
}

TVSTAPI.prototype.getToWatch = function (options, callback) {
  options = typeof options !== 'undefined' ? options : {}
  options.req = 'to_watch'
  callback = typeof callback !== 'undefined' ? callback : this.defaultCallback

  Extractor.get(options, callback)
}

TVSTAPI.prototype.getAgenda = function(options, callback){
  options = typeof options !== 'undefined' ? options : {}
  options.req = 'agenda'
  callback = typeof callback !== 'undefined' ? callback : this.defaultCallback

  Extractor.get(options, callback)
}

TVSTAPI.prototype.getLibrary = function(options, callback){
  options = typeof options !== 'undefined' ? options : {}
  options.req = 'library'
  callback = typeof callback !== 'undefined' ? callback : this.defaultCallback

  Extractor.get(options, callback)
}

module.exports = new TVSTAPI()
