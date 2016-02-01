# TVShowTime - API

## Use

    var tvapi = require('tvshowtime-api')

## Methods

### Get

    tvapi.get(proto, options, function(results){
      console.log(results)
    })

#### Proto

##### user
Get the user info.

##### to-wath
Get the user to-watch list.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| page	|integer	|Page number. Default: 0|
| limit |integer	|Elements per page. Default: 10|
| lang	|string	|Language of the content (en, fr, es, it, pt). Default: user lang|

##### agenda
Get the user agenda.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| page	|integer	|Page number. Default: 0|
| limit |integer	|Elements per page. Default: 10|
|include_watched | boolean | Include watched episodes in results. |

##### library
Get the user library.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| page	|integer	|Page number. Default: 0|
| limit |integer	|Elements per page. Default: 10|

##### explore
Discover trending shows.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| page	|integer	|Page number. Default: 0|
| limit |integer	|Elements per page. Default: 10|

##### show
Get show data.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer |The TVDB ID of the show.|
|show_name *|string |The name of the show.|
|include_episodes	|boolean	|Include all episodes in results.|
|exact	|boolean	|Exact match for show name. Default: 0|

##### follow
Follow a show.

Options:

| Name | Type | Description |
|:----|:------|:-------------|
|show_id *|integer|The TVDB ID of the show.|
