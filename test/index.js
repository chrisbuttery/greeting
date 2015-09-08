'use strict'
var test = require('tape')
var greeting = require('../')

test('should return one greeting', function (t) {
  t.ok(greeting.random(), 'A greeting was returned')
	t.end()
})

test('should return all greetings', function (t) {
  t.ok(greeting.all.length > 0, "An array of greetings was returned")
	t.end()
})
