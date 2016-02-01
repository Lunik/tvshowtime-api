# TVShowTime - API

## Use

    var tvapi = require('tvshowtime-api')

## Methods

### User
Get the user info.

    tvapi.getUser(function(results){
      console.log(results)
    })

### To-Watch
Get the user to-watch list.

    tvapi.getToWatch(options, function(results){
      console.log(results)
    }))

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| page	|integer	|Page number. Default: 0|
| limit |integer	|Elements per page. Default: 10|
| lang	|string	|Language of the content (en, fr, es, it, pt). Default: user lang|

### Agenda
Get the user agenda.

    tvapi.getAgenda(options, function(results){
      console.log(results)
    }))

Options:

| Name | Type | Description |
|:----|:------|:-------------|
| page	|integer	|Page number. Default: 0|
| limit |integer	|Elements per page. Default: 10|
|include_watched | boolean | Include watched episodes in results. |
