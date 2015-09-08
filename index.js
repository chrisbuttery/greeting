'use strict'
var uniqueRandomArray = require('unique-random-array')
var greetings = require('./greetings.json')

exports.all = greetings
exports.random = uniqueRandomArray(greetings)
