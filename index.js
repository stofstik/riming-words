console.log('oh hai!')

const words = [ 'aan', 'uit', 'gaan', 'fruit', 'banaan', 'buskruit', 'verbaast']

const vowels = [ a, e, i, o, u, y ]
const consonants = [ b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, z ]

/*
 * The last part of the word will be the part conataining the last vowel(s)
 */
function lastPartOfWord(word) {
  if(word.split('').length === 0) return word
  if(word.split('').length === 1) return word
}

function areRiming(word1, word2) {
  if(word1 === word2) return true
}
