/***
 * 
 * regular expression is a class of objects,
 * and it is not a string
 * 
 */

let str1 = 'She CRies and makes the onions cry';

// replace every 'cr' by 'fl'(no matter the case)
console.log(`With 'replaceAll' and 'toLowerCase:'`);
console.log(str1.toLowerCase().replaceAll('cr','fl'));

console.log('With toooo simple regular expression')
console.log(str1.replace(/cr/,'fl'));

/*** REGULAR EXPRESSION MODIFIERS:
 * i - ignorecase
 * g - global
*/

console.log('With regular expression with "i":')
console.log(str1.replace(/cr/i,'fl'));


console.log('With regular expression with "i" and "g":')
console.log(str1.replace(/cr/gi,'fl'));

let str2 = `If you have to sHOOt, sHoot, don't talk!`

/*** MISSION:
 * replace each "shoot" by "jump"
 */
console.log(str2.replace(/shoot/ig,'jump'))

// [fhs] - list of characters, equivalent to "or 'f' or 'h' or 's'"
console.log(str2.replace(/[fhs]/ig,'$'))

/** MISSION:
 * replace all "o",spaces,and ' by 0
 */
console.log(str2.replace(/[o ']/gi,'0'))

let str3 = `1,1,1 - littlE dog run, 2,2,2 - \\cat sEe you,
            3,3,3 - bIRd on THE TREe`

//console.log(str3.replace(/[0123456789]/g,'&'))   
// INSTEAD of this we will  use RANGE:
console.log(str3.replace(/[0-9]/g,'&'))      
console.log(str3.replace(/[2-7a-e]/g,'&'))  

// \ - ESCAPE character, cancels the special meaning 
// of the next character
console.log(`If you have to sHOOt, sHoot, don't talk!`)
console.log("If you have to sHOOt, sHoot, don't talk!")
console.log('If you have to sHOOt, sHoot, don\'t talk!')

console.log(str3.replace(/[2-7a\-e]/g,'&'))  

/** MISSION:
 * 1. To the previous add also the range of D-L
 * 2. and cancel \
 */

console.log(str3.replace(/[2-7a\\-eD-L]/g,'&'))

console.log(str3.replace(/[T-d]/g,'&'))

let str4 = 'שבועות שמח!'
console.log(str4.replace(/[מ-ק]/g,'&'))

if ('A'>'D') {
    console.log('A bigger than D')
} else {
    console.log('A smaller than D')
}

let str5 = `There are people that like dogs and people that like cats and people that like cats and dogs. Is there a dog that like people and people?`

/// () - group
/// (cat|dog|cow) - "or cat or dog or cow"
console.log(str5.replace(/(cat|dog|cow)/g,'whale'))

// string outside the group () is common (belongs) for
// each string in the group, i.e.:
// /(cat|dog|cow)s/ - "or cats or dogs or cows"
console.log(str5.replace(/(cat|dog|cow)s/g,'whales'))

// MISSION: 
// 1. in str5 replace people, dog, cat, bird by dolfin 
// 2. concatenate to the previous : replace "like" by "don't like"
// 3. In the original str5 replace every "and dogs", "and people",
//    "and cows", "and birds" by "and lions"

console.log(str5.replace(/(dog|cat|bird|people)/g,'dolfin')
       .replace(/like/g,'don\'t like'));

console.log(str5.replace(/and (dogs|people|cows|birds)/g,'and lions'))

// ^ - start of string, $ - end of string
let str6 = 'I like summer and I like Madagascar'
console.log(str6.replace(/^I like/g,'I hate'))
console.log(str6.replace(/^/,'La-la-la, '))

let str7 = 'As much as I like rain, so I like umbrellas'

/***MISSION:
 * 1. Replace "as" in any case in the beginning of str7 by 😃
 * 2. Also Replace "as" in any case in the end of str7 by 😀
 * 3. Again take the original str7 and insert into the end ☔
 */
console.log(str7.replace(/^as/i,'😀').replace(/as$/i,'😀'));
console.log(str7.replace(/$/,'☔'))
console.log(str7.replace(/^as|as$/ig,'😀'));

let str8 = 'I like rain'
console.log(str7.replace(/^I like rain$/,'☔'))
console.log(str8.replace(/^I like rain$/g,'☔'))
console.log(str8.replace(/^I | rain$/g,'☔'))

/**
 * let str3 = `1,1,1 - littlE dog run, 2,2,2 - \\cat sEe you,
            3,3,3 - bIRd on THE TREe`
 */

// ^ - when in square brackets, it is a NEGATION
console.log(str3.replace(/[^a-z ]/gi,''))

/********************************************
 * 
 *                 TEST(str) - method of Regular Expressions
 * 
 **********************************************************/

console.log("/dog/.test(str3)")
console.log(/dog/.test(str3))
console.log("/bird/.test(str3)")
console.log(/bird/.test(str3))
console.log("/bird/i.test(str3)")
console.log(/bird/i.test(str3))
console.log("/dolfin|cow|whale|lion/i.test(str3)")
console.log(/dolfin|cow|whale|lion/i.test(str3))
console.log("/dolfin|cow|whale|lion|cat/i.test(str3)")
console.log(/dolfin|cow|whale|lion|cat/i.test(str3))

console.log(`str7 = ${str7}`)
console.log(`str8 = ${str8}`)

console.log("/^I like rain$/.test(str7)")
console.log(/^I like rain$/.test(str7))
console.log("/^I like rain$/.test(str8)")
console.log(/^I like rain$/.test(str8))

// We've checked here if str8 contains smth
// except of a-z and space
console.log(/[^a-z ]/i.test(str8))
// We've ensured here that str8 contains 
// only a-z and spaces
console.log(!/[^a-z ]/i.test(str8))