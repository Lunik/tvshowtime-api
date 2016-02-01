'use strict'

const Settings = require('./settings.js')
const Extractor = require('./extractor.js')

function TVSTAPI () {
  this.defaultCallback = function (data) {console.log(data)}
}

TVSTAPI.prototype.get = function (proto, options, callback) {
  options = typeof options !== 'undefined' ? options : {}
  callback = typeof callback !== 'undefined' ? callback : this.defaultCallback
  switch (proto) {
    case 'user':
      options.req = 'user'
      break
    case 'to_watch':
      options.req = 'to_watch'
      break
    case 'agenda':
      options.req = 'agenda'
      break
    case 'library':
      options.req = 'library'
      break
    case 'explore':
      options.req = 'explore'
      break
    case 'show':
      options.req = 'show'
      break
    default:

  }
  Extractor.get(options, callback)
}

module.exports = new TVSTAPI()
