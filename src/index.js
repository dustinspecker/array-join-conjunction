module.exports = (array, conjunction = 'and') => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array to be provided')
  }

  if (!array.length) {
    return ''
  }

  if (array.length === 1) {
    return array[0]
  }

  if (array.length === 2) {
    return `${array[0]} ${conjunction} ${array[1]}`
  }

  return `${array.slice(0, array.length - 1).join(', ')}, ${conjunction} ${array[array.length - 1]}`
}
