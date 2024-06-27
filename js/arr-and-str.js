/* arr.splice(1,2,3)
1 - from which index we start our action
2 - how many elements we delete (could be 0, 
      if we don't delete)
3 - could be 3,4,5, .... - new elements
*/

const foods = ['lasagna','pizza','pasta','calzona','shwarma','hamburger','revioli']

/** MISSION: write a command that will replace 'shwarma' and 'hamburger' 
 * by 'soup' and 'potatoes'
*/

console.log('before:\n', foods)

foods.splice(4,2,'soup','potatoes')

console.log('after:\n', foods)