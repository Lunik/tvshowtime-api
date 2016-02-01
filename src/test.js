var tv = require('./index.js')

tv.getUser()

tv.getToWatch()

tv.getAgenda()

tv.getLibrary()

tv.explore()

tv.getShow({show_id:121361})

tv.follow({show_id:121361})

tv.isfollow({show_id:121361})

tv.unfollow({show_id:121361})

tv.archive({show_id:121361})

tv.isArchived({show_id:121361})

tv.unArchive({show_id:121361})

tv.getEpisode({episode_id:3254641})

tv.unwatchEpisode({episode_id:3254641})

tv.setWatchedEpisode({episode_id:3254641})

tv.isWatchedEpisode({episode_id:3254641})
