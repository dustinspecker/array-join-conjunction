# array-join-conjunction

[![NPM version](https://badge.fury.io/js/array-join-conjunction.svg)](http://badge.fury.io/js/array-join-conjunction) [![Build Status](https://travis-ci.org/dustinspecker/array-join-conjunction.svg?branch=master)](https://travis-ci.org/dustinspecker/array-join-conjunction) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/array-join-conjunction.svg)](https://coveralls.io/r/dustinspecker/array-join-conjunction?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/array-join-conjunction/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/array-join-conjunction) [![Dependencies](https://david-dm.org/dustinspecker/array-join-conjunction.svg)](https://david-dm.org/dustinspecker/array-join-conjunction/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/array-join-conjunction/dev-status.svg)](https://david-dm.org/dustinspecker/array-join-conjunction/#info=devDependencies&view=table)

> Join an array with a conjunction

## Install

```bash
npm install --save array-join-conjunction
```

## Usage

```javascript
import arrayJoinConjuction from 'array-join-conjunction'

arrayJoinConjuction([])
// => ''

arrayJoinConjuction([1, 2])
// => '1 and 2'

arrayJoinConjuction(['blue', 'red', 'green'])
// => 'blue, red, and green'

arrayJoinConjuction(['blue', 'red', 'green'], 'or')
// => 'blue, red, or green'
```

## API
### arrayJoinConjuction(array, [conjunction])

Returns a `string` joined from `array` using an optional `conjunction`.

#### array
type: `array`

The array to join into a string. An empty array returns an empty string.

#### conjunction
type: `string`

default: `'and'`

A conjunction to join two or more words with. The default is to use `'and'`.

## License
MIT © [Dustin Specker](https://github.com/dustinspecker)
