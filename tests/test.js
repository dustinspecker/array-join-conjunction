import test from 'ava'

import arrayJoinConjunction from '../lib'

test('throws a TypeError if an array is not passed', t => {
  const noArray = () => arrayJoinConjunction()

  t.throws(noArray, TypeError)
  t.throws(noArray, /Expected an array to be provided/)
})

test('returns empty string when empty array', t => {
  t.is(arrayJoinConjunction([]), '')
})

test('returns a single value if array has one value', t => {
  t.is(arrayJoinConjunction(['hi']), 'hi')
  t.is(arrayJoinConjunction([3]), 3)
})

test('returns two words joined with `and` when array has 2 values', t => {
  t.is(arrayJoinConjunction(['red', 'green']), 'red and green')
  t.is(arrayJoinConjunction([1, 2]), '1 and 2')
})

test('returns more than two words with comma and `and`', t => {
  t.is(arrayJoinConjunction(['red', 'green', 'blue']), 'red, green, and blue')
  t.is(arrayJoinConjunction([1, 2, 3, 4, 5]), '1, 2, 3, 4, and 5')
})

test('supports optional conjunction', t => {
  t.is(arrayJoinConjunction([1, 2], 'or'), '1 or 2')
  t.is(arrayJoinConjunction(['red', 'green', 'blue'], 'or'), 'red, green, or blue')
})
