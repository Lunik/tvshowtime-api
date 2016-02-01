var API = require('./main.js')

function TVSAPI(){
}

TVSAPI.prototype.getUser = function(callback){
  API.get('user', {}, callback)
}


module.exports = new TVSAPI()
