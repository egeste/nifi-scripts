#!/usr/bin/env node

const cheerio = require('cheerio')

require('stdin')(thread => {
  const $ = cheerio.load(thread)

  console.log($('.post').map((index, post) => {
    const $post = cheerio.load(post)
    return {
      poster_id: $post('span.poster_id').text(),
      poster_name: $post('span.name').text(),
      post_uri: $post('.intro>a[href]:last-of-type').attr('href'),
      post_html:  $post.html(),
      post_content: $post('.body').text(),
      post_timestamp: $post('time').attr('unixtime')
    }
  }).get())

  process.exit(0)
})
