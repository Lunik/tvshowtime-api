const Settings = require('./settings.js')

function Configurable () {
  this.queryParams = {}
}

Configurable.prototype.set = function (options) {
  var url = Settings.api + this.queryParams[options.req] + '?'
  for (var key in options) {
    url += '&' + key + '=' + options[key]
  }
  url += '&access_token=' + Settings.token
  console.log(url)
  return url
}

module.exports = new Configurable()
