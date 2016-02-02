# TVShowTime - API
Simple module used to access the TVShowTime API

## Install
    npm install tvshowtime-api

## Use

    var api = require('tvshowtime-api')
    var tv = new api('YOUR_TOKEN')

## Get your token

    GOTO http://tvsapi.lunik.xyz

## Methods

##### getUser(callback)
Get the user info.

##### getToWatch(options, callback)
Get the user to-watch list.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| page	|integer	|Page number. Default: 0|
| limit |integer	|Elements per page. Default: 10|
| lang	|string	|Language of the content (en, fr, es, it, pt). Default: user lang|

##### getAgenda(options, callback)
Get the user agenda.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| page	|integer	|Page number. Default: 0|
| limit |integer	|Elements per page. Default: 10|
|include_watched | boolean | Include watched episodes in results. |

##### getLibrary(options, callback)
Get the user library.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| page	|integer	|Page number. Default: 0|
| limit |integer	|Elements per page. Default: 10|

##### explore(options, callback)
Discover trending shows.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| page	|integer	|Page number. Default: 0|
| limit |integer	|Elements per page. Default: 10|

##### getShow(options, callback)
Get show data.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer |The TVDB ID of the show.|
|show_name *|string |The name of the show.|
|include_episodes	|boolean	|Include all episodes in results.|
|exact	|boolean	|Exact match for show name. Default: 0|

##### follow(options, callback)
Check if a show is followed.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer|The TVDB ID of the show.|

##### isfollowed(options, callback)
Check if a show is followed.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer|The TVDB ID of the show.|

##### unfollow(options, callback)
Unfollow a show.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer|The TVDB ID of the show.|

##### archive(options, callback)
Archive a show.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer|The TVDB ID of the show.|

##### isArchived(options, callback)
Check if a show is archived.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer|The TVDB ID of the show.|

##### unArchive(options, callback)
Unarchive a show.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer|The TVDB ID of the show.|

##### setShowProgress(options, callback)
Set the progress for a show.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer|The TVDB ID of the show.|
|season	|integer|The season number.|
|episode|integer|The episode number.|
- If season is set, mark the whole season seen.
- If season and episode are set, mark all episodes seen until season and episode number (included).
- If nothing is set, mark the whole show as seen.

##### deleteShowProgress(options, callback)
Delete the progress for a show.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer|The TVDB ID of the show.|
|season	|integer|The season number.|
|episode|integer|The episode number.|

##### getEpisode(options, callback)
Get episode data.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| filename *|string|The filename of the episode. e.g. "game.of.thrones.s04e10.720p.hdtv.x264-killers.mkv"|
|episode_id *|integer|The TVDB ID of the episode.|
|imdb_id *|string	|The IMDB ID of the episode.|
|show_id*|integer	|The TVDB ID of the show.|
|season_number *|integer|Season number of the episode.|
|number	*|integer |Episode number of the episode.|

##### setWatchedEpisode(options, callback)
Mark an episode as watched.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| filename *|string|The filename of the episode. e.g. "game.of.thrones.s04e10.720p.hdtv.x264-killers.mkv"|
|episode_id *|integer|The TVDB ID of the episode.|
|imdb_id *|string	|The IMDB ID of the episode.|
|show_id*|integer	|The TVDB ID of the show.|
|season_number *|integer|Season number of the episode.|
|number	*|integer |Episode number of the episode.|
|publish_on_ticker|boolean|Publish on Facebook.|
|publish_on_twitter|boolean	|Publish on Twitter.|
|auto_follow|boolean|Auto-follow the show if not already followed. Default: 1|

##### isWatchedEpisode(options, callback)
Check if an episode was watched.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| filename *|string|The filename of the episode. e.g. "game.of.thrones.s04e10.720p.hdtv.x264-killers.mkv"|
|episode_id *|integer|The TVDB ID of the episode.|
|imdb_id *|string	|The IMDB ID of the episode.|
|show_id*|integer	|The TVDB ID of the show.|
|season_number *|integer|Season number of the episode.|
|number	*|integer |Episode number of the episode.|

##### unwatchEpisode(options, callback)
Unmark an episode as watched.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| filename *|string|The filename of the episode. e.g. "game.of.thrones.s04e10.720p.hdtv.x264-killers.mkv"|
|episode_id *|integer|The TVDB ID of the episode.|
|imdb_id *|string	|The IMDB ID of the episode.|
|show_id*|integer	|The TVDB ID of the show.|
|season_number *|integer|Season number of the episode.|
|number	*|integer |Episode number of the episode.|

##### getProgess(options, callback)
Get the progress for an episode.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| filename *|string|The filename of the episode. e.g. "game.of.thrones.s04e10.720p.hdtv.x264-killers.mkv"|
|episode_id *|integer|The TVDB ID of the episode.|
|imdb_id *|string	|The IMDB ID of the episode.|
|show_id*|integer	|The TVDB ID of the show.|
|season_number *|integer|Season number of the episode.|
|number	*|integer |Episode number of the episode.|

##### setProgess(options, callback)
Set the progress for an episode.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| filename *|string|The filename of the episode. e.g. "game.of.thrones.s04e10.720p.hdtv.x264-killers.mkv"|
|episode_id *|integer|The TVDB ID of the episode.|
|imdb_id *|string	|The IMDB ID of the episode.|
|show_id*|integer	|The TVDB ID of the show.|
|season_number *|integer|Season number of the episode.|
|number	*|integer |Episode number of the episode.|

##### setEmotion(options, callback)
Set the emotion for an episode.

| Name | Type | Description |
|:----|:------|:-------------|
|episode_id	*|integer	|The TVDB ID of the episode.|
|emotion_id *| integer|The emotion the user felt.|
emotion_id: 1 Good - 2 Fun - 3 Wow - 4 Sad - 6 Soso - 7 Bad

##### deleteEmotion(options, callback)
Delete the emotion for an episode.

| Name | Type | Description |
|:----|:------|:-------------|
|episode_id	*|integer	|The TVDB ID of the episode.|
