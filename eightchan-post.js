#!/usr/bin/env node

const cheerio = require('cheerio')

require('stdin')(post_source => {
  const $ = cheerio.load(post_source)

  const post_uri = $('.intro>a[href]:last-of-type').attr('href')
  const post_content = $('.body').text()
  const post_timestamp = $('time').attr('unixtime')
  const poster_id  = $('span.poster_id').text()
  const poster_name = $('span.name').text()

  console.log(JSON.stringify({
    post_uri,
    post_source,
    post_content,
    post_timestamp,
    poster_id,
    poster_name
  }, null, 2))

})
