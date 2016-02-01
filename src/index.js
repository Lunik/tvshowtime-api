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

TVSAPI.prototype.Explore = function(options, callback){
  API.get('explore', options, callback)
}

TVSAPI.prototype.getShow = function(options, callback){
  API.get('show', options, callback)
}

TVSAPI.prototype.follow = function(options, callback){
  API.post('follow', options, callback)
}
module.exports = new TVSAPI()
