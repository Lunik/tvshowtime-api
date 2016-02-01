const Settings = require('./settings.json')

function Configurable () {
  this.queryParams = {
    user: 'user',
    to_watch: 'to_watch',
    agenda: 'agenda',
    library: 'library',
    explore: 'explore',
    show: 'show',
    follow: 'follow',
    isfollowed: 'follow',
    unfollow: 'unfollow',
    archive: 'archive',
    isarchived: 'archive',
    unarchive: 'unarchive',
    show_progress: 'show_progress',
    delete_show_progress: 'delete_show_progress',
    episode: 'episode',
    checkin: 'checkin',
    ischecked: 'checkin',
    checkout: 'checkout',
    progress: 'progress',
    emotion: 'emotion',
    delete_emotion: 'delete_emotion'
  }
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
