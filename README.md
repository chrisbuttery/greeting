# greeting

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![js-standard-style][standard-image]][standard-url]

Different ways to say hello.

## Install

```sh
$ npm i --save greeting
```

## Usage

```js
import greeting from 'greeting'

greeting.random()
//> Hello

greeting.all
//> ["'Allo", "'Allo 'Allo", "Aye oop", ... ]
```

## CLI

```sh
$ npm -i -g greeting
```

```sh
$ greeting --help

  Examples
    $ greeting
    Howdy

    $ greeting --all
    Hello
    Hi
    ...

  Options
    --all   Get all greetings instead of a random greeting
```

Inspired by [sindresorhus](https://github.com/sindresorhus/dog-names)

## License

MIT © [Chris Buttery](http://chrisbuttery.com)

[npm-image]: https://img.shields.io/npm/v/greeting.svg?style=flat-square
[npm-url]: https://npmjs.org/package/greeting
[travis-image]: https://img.shields.io/travis/chrisbuttery/greeting.svg?style=flat-square
[travis-url]: https://travis-ci.org/chrisbuttery/greeting
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[coveralls-image]: https://img.shields.io/coveralls/chrisbuttery/greeting.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chrisbuttery/greeting?branch=master
