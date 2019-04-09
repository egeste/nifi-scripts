#!/usr/bin/env node

const cheerio = require('cheerio')

require('stdin')(htmlInput => {
  const $ = cheerio.load(htmlInput)
  console.log($('.intro>a[href]:last-of-type').attr('href'))
})
