'use strict'

const Settings = require('./settings.js')
const Extractor = require('./extractor.js')

function TVSTAPI () {

}

TVSTAPI.prototype.getUser = function (callback) {
  Extractor.get({req: 'user'}, callback)
}

module.exports = new TVSTAPI()
