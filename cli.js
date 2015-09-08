#!/usr/bin/env node
'use strict'
var meow = require('meow')
var greeting = require('./')

var cli = meow({
  help: [
    'Examples',
    '  $ greeting',
    '  Hello',
    '',
    '  $ greeting --all',
    '  Hello',
    '  Aye-oop',
    '  ...',
    '',
    'Options',
    '  --all   Get all greetings instead of a random greeting'
  ].join('\n')
})

console.log(cli.flags.all ? greeting.all.join('\n') : greeting.random())
