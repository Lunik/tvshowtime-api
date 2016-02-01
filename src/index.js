var API = require('./main.js')

function TVSAPI(){
}

TVSAPI.prototype.getUser = function(callback){
  API.get('user', {}, callback)
}

TVSAPI.prototype.getToWatch = function(options, callback){
  API.get('to-watch', options, callback)
}

TVSAPI.prototype.getAgenda = function(options, callback){
  API.get('agenda', options, callback)
}

TVSAPI.prototype.getLibrary = function(options, callback){
  API.get('library', options, callback)
}
module.exports = new TVSAPI()
