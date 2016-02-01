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

TVSAPI.prototype.isfollow = function(options, callback){
  API.post('isfollow', options, callback)
}

TVSAPI.prototype.unfollow = function(options, callback){
  API.post('unfollow', options, callback)
}

TVSAPI.prototype.archive = function(options, callback){
  API.post('archive', options, callback)
}

TVSAPI.prototype.isArchived = function(options, callback){
  API.post('isarchived', options, callback)
}

TVSAPI.prototype.unArchive = function(options, callback){
  API.post('unarchive', options, callback)
}

TVSAPI.prototype.setShowProgress = function(options, callback){
  API.post('show_progress', options, callback)
}

TVSAPI.prototype.deleteShowProgress = function(options, callback){
  API.post('delete_show_progress', options, callback)
}

TVSAPI.prototype.getEpisode = function(options, callback){
  API.get('episode', options, callback)
}

TVSAPI.prototype.setWatchedEpisode = function(options, callback){
  API.post('checkin', options, callback)
}

TVSAPI.prototype.isWatchedEpisode = function(options, callback){
  API.post('ischecked', options, callback)
}
module.exports = new TVSAPI()
