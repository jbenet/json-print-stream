#!/usr/bin/env node

var through2 = require('through2')
var jsonprint = require('json-print')

 module.exports = function() {
  return through2.obj(function (data, encoding, callback) {
    data = JSON.stringify(data)
    data = jsonprint(data, {colors:true})
    this.push(data + "\n")
    return callback()
  })
}
