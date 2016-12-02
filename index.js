/*
 * Holy crap this is more difficult than I thought...
 */

const words = ['aan', 'gaan', 'uit', 'fruit', 'banaan', 'buskruit', 'verbaast', 'kerst', 'gerst', 'worst', 'borst', 'bosje', 'klosje', 'worstje', 'borstje']

const vowels = [ 'a', 'e', 'i', 'o', 'u', 'y' ]
const consonants = [ 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z' ]

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function hasVowels(word) {
  return vowels.filter((v) => word.indexOf(v) > -1 ).length > 0
}

function recursive(payload) {
  const { word1, word2, rimeWord = '' } = payload
  if(word1 === word2) return true
  if(word1.charAt(word1.length - 1) === word2.charAt(word2.length - 1)) {
    // Words are the same check next char
    return recursive({
        word1: word1.substring(0, word1.length - 1),
        word2: word2.substring(0, word2.length - 1),
        rimeWord: word1.charAt(word1.length - 1) + rimeWord,
    })
  }
  if(hasVowels(rimeWord) && rimeWord.length > 1) {
    console.log(rimeWord)
    return true
  }
  return false
}

word1 = 'banaan'
word2 = 'gaan'
console.log('%s en %s %s', word1, word2, recursive({ word1, word2 }))

word1 = 'fantasie'
word2 = 'niet'

console.log('%s en %s %s', word1, word2, recursive({ word1, word2 }))
word1 = 'soepkommen'
word2 = 'komkommer'
console.log('%s en %s %s', word1, word2, recursive({ word1, word2 }))

word1 = 'verandering'
word2 = 'behandeling'
console.log('%s en %s %s', word1, word2, recursive({ word1, word2 }))

word1 = 'klosje'
word2 = 'bosje'
console.log('%s en %s %s', word1, word2, recursive({ word1, word2 }))


/*
 * function run() {
 *   setTimeout(() => {
 *     let word1 = 'bids' //words[randomInt(0, words.length)]
 *     let word2 = 'ids' //words[randomInt(0, words.length)]
 *     console.log('%s en %s %s', word1, word2, recursive({ word1, word2 }))
 *     return run ()
 *   }, 500)
 * }
 *
 * run()
 */
