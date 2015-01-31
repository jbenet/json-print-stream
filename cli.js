#!/usr/bin/env node

var ndjson = require('ndjson')
var jpstream = require('./index.js')

process.stdin
  .pipe(ndjson.parse({strict:false}))
  .pipe(jpstream())
  .pipe(process.stdout)
