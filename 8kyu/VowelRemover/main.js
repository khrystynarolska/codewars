// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

const shortcut = (string) => string.replace(/[aeiouy]/ig, '')

console.log(shortcut('how are you today'));