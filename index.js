const words = [ 'aan', 'uit', 'gaan', 'fruit', 'banaan', 'buskruit', 'verbaast']

const vowels = [ 'a', 'e', 'i', 'o', 'u', 'y' ]
const consonants = [ 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z' ]

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/*
 * The last part of the word will be the part containing the last vowel(s)
 */
function lastPartOfWord(word) {
  if(word.length === 0) return word
  if(word.length === 1) return word
  return word.split('').reverse().filter((c, i) => {
    if(i === 0) return c
    if(vowels.indexOf(c) > -1) return c
  }).reverse()
}

function areRiming(word1, word2) {
  if(word1 === word2) return true
  if(word1.split('').splice(1, word1.length) === word2.split('').splice(1, word2.length)) return true
}

console.log('\noh hai!\n')

const mInt = randomInt(0, words.length)
console.log('word: ', words[mInt])
console.log('last: ', lastPartOfWord(words[mInt]))
console.log('\nbye nao\n')
