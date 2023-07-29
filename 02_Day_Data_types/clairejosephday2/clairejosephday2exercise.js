let challenge = '30 Days of JavaScript'
console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.substr(3, 4))

console.log(challenge.substring(3, 7))

console.log(challenge.slice(3, challenge.length))

console.log(challenge.includes('Script')

const spl = challenge.split(' ')
console.log(spl)

const splComma = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const splittingCommas = splComma.split(',', 4)
console.log(splittingCommas)

console.log(challenge.replace('JavaScript', 'Python')

console.log(challenge.charAt(15))

console.log(challenge.indexOf('a')

console.log(challenge.lastIndexOf('a')



const becauseSee = 'You cannot end a sentence with because because because is a conjunction'

console.log(becauseSee.indexOf('because')


console.log(becauseSee.lastIndexOf('because')


console.log(becauseSee.search('because')


console.log(challenge.trim(' ')

console.log(challenge.startsWith('30')


console.log(challenge.endsWith('script')



console.log(challenge.match(/a/gi)


const beg = '30 days Of'
const endd = 'JavaScript'
console.log(beg.concat(' ', endd))

console.log(challenge.repeat(2))


//Exercise 2 

const quote = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another`

console.log(quote)

const mtheresaq = `Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same --with charity you give love."`

console.log(mtheresaq)

function convertingNum(numten) {
  numten = '10'
if (typeof numTen  === 10) {
 return 'equals'
} else {
 let parsing = parseInt(numten)
  return parsing
}

}

console.log(convertingNum())




function checkingFloat(numFloat) {
numFloat = '9.8'
if (parseFloat(numFloat) === 10) {
 return 'float equal'
}
return Math.ceil(numFloat)

}

console.log(checkingFloat())

console.log('python'.includes('on')

console.log('jargon'.includes('on')



const jarg = 'I hope this course is not full of jargon.'

console.log(jarg.find('jargon')



const rando = Math.round(Math.random() * 100)

console.log(rando)


function randNum(min, max) {

 min = Math.ceil(50)
 max = Math.floor(100)
  return Math.floor(Math.random() * (max - min + 1) + min)

} 

console.log(randNum())


function rando3(min, max) {
 min = Math.ceil(0)
 max = Math.floor(255)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(rando3)

const randz = Math.ceil(Math.random() * 10)

const rans = (len) => {
 let result = ''
  const strin = 'Javascript'
  len = strin.length

 result += strin.substr(Math.floor(Math.random() * len), 4)
 return result

})

console.log(rans())



console.log(1 1 1 1 1\n
           2 1 2 4 8\n
          3 1 3 9 27\n
         4 1 4 16 64\n
        5 1 5 25 125)

let becauseSen = 'You cannot end a sentence with because because because is a conjunction'

console.log(becauseSen.substr(32, 55)


//Exercise 3

let loveStuff = `love is the best thing in this world. Some have found
 their love and some are still looking for their love`

console.log(loveStuff.match('love')


let becauseSentence = `You cannot end a sentence with because
 because because is a conjunction`


console.log(becauseSentence.matchAll('because').length)

const sentence `%I $am@% a %tea@cher%, %and& I lo%#ve %te@a@ching%.`

console.log(sentence.replace(/[%#@&$]/g, ''))




const earnings = `He earns 5000 euro from salary per month,
 10000 euro annual bonus, 15000 euro online courses per month`
const regexx = /\d+/g
const subtotals = earnings.match(regexx)
let arr = Array.from(subtotals)
console.log(arr)
let nos = arr.map(nums => {
 return Number(nums)
})
console.log(nos)



