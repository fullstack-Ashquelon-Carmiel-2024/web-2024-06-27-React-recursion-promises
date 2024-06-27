const nums1 = [55, 20, 32, 45, 88, 90];
             //0,  1,  2,  3,  4,   5

nums1.forEach((num,idx) => {

    // showing the values in the even places
    if (idx % 2 === 0) console.log(num);

})

/** MISSION: 
 *  Use nums1.map() and create new numeric array 
 * comprised of the old elements divided by their indexes
 * (except of 0 - return just the number itself)
 */

// const nums2 = nums1.map((num,idx) => {
//     return idx === 0 ? num : num/idx;
// })

// We could shorten our ARROW function:
// 1. If there is only one argument - we could remove the brackets
// 2. If there is only 1 command inside the ARROW function body, we could
//     rid of the curly brackets 
// 3. Without curly brackets it performs "return" anyway - so we should 
//    remove "return" also.

const nums2 = nums1.map((num,idx) => idx === 0 ? num : num/idx )

const drinks = ['water','soda','cola','fanta','tea','coffee','wine']
const foods = ['sushi','pasta','pizza','humburger','soup','cheese','apple']

/** MISSION:
 * Go over the array drinks with forEach and show the list like
 * 1. water and sushi
 * 2. soda and pasta
 * 3. cola and pizza ...
 * 
 */

drinks.forEach((item,index) => 
    console.log(`${index+1}. ${item} and ${foods[index]}`));

// We want to Capitalize each drink

drinks.forEach((drink,idx) => {

    drinks[idx] = drink[0].toUpperCase() + drink.slice(1).toLowerCase()
    console.log(drink)

})

// drinks = [1,2,3] - causes error: Assignment to constant variable

foods.forEach((food, idx, ar) => {

    ar[idx] = food[0].toUpperCase() + food.slice(1).toLowerCase()
    console.log(food)

})

/// Like in homework 2024-05-09
///
/**
 * const drinks = ['water','soda','cola','fanta','tea','coffee','wine']
const foods = ['sushi','pasta','pizza','humburger','soup','cheese','apple']
 */

const menu = drinks.map((el,ix) => {

    return {
        serialNum: ix+1,
        drink: el,
        food: foods[ix]
    }

})

console.log(menu)

// const nums1 = [55, 20, 32, 45, 88, 90];
let result = nums1.reduce((sum,el) => sum + el)
console.log(result)