var API = require('./main.js')

function TVSAPI(){
}

TVSAPI.prototype.user = function(callback){
  API.get('user', {}, callback)
}
module.exports = new TVSAPI()
