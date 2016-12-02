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

function indexOfFirstVowel(word) {
  return word.indexOf(word.split('').filter( (c) => vowels.indexOf(c) > -1 )[0])
}

function areRiming(word1, word2) {
  // Words are the same
  if(word1 === word2) return true
  // Words are the same after first vowel
  if(word1.substring(indexOfFirstVowel(word1), word1.length) ===
     word2.substring(indexOfFirstVowel(word2), word2.length)) return true

  return false
}

function recursive(payload) {
  const { word1, word2 } = payload
  console.log(payload)
  if(word1.charAt(word1.length - 1) === word2.charAt(word2.length - 1)) {
    return recursive({
        word1: word1.split('').splice(0, word1.length - 1).join(''),
        word2: word2.split('').splice(0, word2.length - 1).join('')
    })
  }
}

recursive( { word1: words[11], word2: words[12] } )
/*
 *
 * let word1 = words[0]
 * let word2 = words[1]
 * console.log('%s en %s %s', word1, word2, areRiming(word1, word2))
 *
 * word1 = words[2]
 * word2 = words[3]
 * console.log('%s en %s %s', word1, word2, areRiming(word1, word2))
 *
 * word1 = words[0]
 * word2 = words[4]
 * console.log('%s en %s %s', word1, word2, areRiming(word1, word2))
 *
 * word1 = words[11]
 * word2 = words[12]
 * console.log('%s en %s %s', word1, word2, areRiming(word1, word2))
 *
 *
 * word1 = words[13]
 * word2 = words[14]
 * console.log('%s en %s %s', word1, word2, areRiming(word1, word2))
 */
