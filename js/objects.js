let firstName='Yocheved'

const student1 = {
    firstName: 'Johnny',
    lastName: 'Depp',
    grades: [73, 80, 95, 66, 78],
    age: 50,
    showFullName: function(reverse) { // if true 'Depp, Johnny', if false 'Johnny Depp'

/*         if (reverse) {
            console.log(`${this.LastName}, ${this.firstName}`)
        } else {
            console.log(`${this.firstName} ${this.lastName}`)
        }
 */     
        this.fullName = reverse 
            ? `${this.lastName}, ${this.firstName}`
            : `${this.firstName} ${this.lastName}`

        console.log(this.fullName)

    },
    showFirstName: function() {
        console.log(firstName) // Yocheved
    }
}

const student2 = {
    firstName: 'Tom',
    lastName: 'Cruise',
    grades: [83, 85, 97, 90, 88],
    showFullName: function(reverse) { 
     
        reverse 
            ? console.log(`${this.lastName}, ${this.firstName}`)
            : console.log(`${this.firstName} ${this.lastName}`)

    },
    calcAverage: function() {

        this.sum = this.grades.reduce((total,grade) => {
            total += grade
        },0)

        /* (0, 83), return 83,
           (83, 85), return 168,
           (168, 97), return 265,
            (265, 90), return 355,
            (355, 88), return 443 */

        //(83+85+97+90+88)/5
        // 83/5 + 85/5 + 97/5 + 90/5 + 88/5
        //this.average = this.grades.reduce((avg,grade,idx,ar) => {
        //this.average = this.grades.reduce((avg,grade,_,ar) => avg + grade/ar.length,0)
        this.average = this.grades.reduce((sum,grade) => sum + grade,0)/this.grades.length; 
    }
}

const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);

const student3 = {
    firstName: 'Mila',
    lastName: 'Kunis',
    grades: [83, 88, 97, 90, 97],
    showFullName: (reverse) => { 
     
        reverse 
            ? console.log(`${this.lastName}, ${this.firstName}`)
            : console.log(`${this.firstName} ${this.lastName}`)

    }
}

const student4 = {
    firstName: 'Jennifer',
    lastName: 'Lopez',
    grades: [83, 88, 97, 90, 97],   
}

// show student1's grades:
console.log(student1.grades)

// call student1's showFullName method:
student1.showFullName(false)

function multiplyBy5(num) {

    console.log(num * 5)

}

multiplyBy5(40) // 200

function calc(action, n1, n2) {

    switch (action) {
        case '+':
            console.log(n1 + n2)
            break
        case '-':
            console.log(n1 - n2)
            break
        default: 
            console.log('unknown action')
    }

}

calc('+',50, 70)

function showFullName(reverse,firstName, lastName) { // if true 'Depp, Johnny', if false 'Johnny Depp'

 
            reverse 
                ? console.log(`${lastName}, ${firstName}`)
                : console.log(`${firstName} ${lastName}`)
    
}

student2.showFullName(false) // Tom Cruise

student3.showFullName(true) // undefined, undefined, because student3.showFullName
                            // is an arrow function and it's "this" is "window"

student4.eyeColor = 'hazel'

student4.showFullName = function (reverse) { 
     
    reverse 
        ? console.log(`${this.lastName}, ${this.firstName}`)
        : console.log(`${this.firstName} ${this.lastName}`)

}

student4.showFullName(true)

student1.hair = 'black';

/** MISSION:
 * 
 * 1. For student2 inside the definition of student2
 *    create new method calcAverage, that calculates average
 *    and creates new property "average"
 * 
 * 2. For student3 create calcAverage method outside of the definition
 * 
 */

/** PROTOTYPE */

class Furniture {

    constructor() {
        this.name = 'chair';
    }

    color = '#000000';
    fabric = 'velvet';

}

// Furniture() - constructor of the class Furniture
// operator new - 1. gets space in the MEMORY
//                2. points "this" there
//                3. calls the Furniture() constructor
//       
const chair1 =  new Furniture();

class Student {

    constructor(firstName, lastName, hair) {

        this.firstName = firstName
        this.lastName = lastName
        this.hair = hair

    }

    showFullName() {
        this.fullName = this.firstName + ' ' + this.lastName;
        console.log(this.fullName);
    }
}

const currDate = new Date();
const yesterday = new Date('2024-04-17');

let currYear = currDate.getFullYear();
let currWeeekDay = currDate.getDay();

const student1Keys = Object.keys(student1);
const student1Values = Object.values(student1);
const student1Entries = Object.entries(student1);

console.log(`student1Keys=\n`,student1Keys);
console.log(`student1Values=\n`,student1Values);
console.log(`student1Entries=\n`,student1Entries);

console.log('\n********\nStudent1:\n**********\n')
student1Keys.forEach((key,ind) => {
    console.log(`The key number ${ind+1} is ${key}
    and it's value is ${student1[key]}`)
})

/** MISSION:
 * Go over student1Entries and get the same result as 
 * in the previous action without performing ${student1[key]}
*/

console.log('\n********\nStudent1 (from Entries):\n**********\n')
student1Entries.forEach((entry,ind) => {
    console.log(`The key number ${ind+1} is ${entry[0]}
    and it's value is ${entry[1]}`)
})

// Our target is to filter student1Values to get only
// the static properties (not functions)

const student1StaticValues = student1Values.filter(val => {
    
    return typeof val !== 'function'
    
})

console.log(`student1StaticValues=\n`,student1StaticValues);

/** MISSION:
 * create new array student1StaticEntries - filter student1Entries
 * to get only static properties (with values)
 */
/*********************************************
 * TWO IMPORTANT THEMES:
 * 1. primitive vs compound values
 * ( Primitive: undefined, null, bulean, string, number )
 * 2. by value vs by reference (parameters of functions)
 *************************************************************/
/* const student1StaticEntries = student1Entries.filter(entry => {
    
    return typeof entry[1] !== 'function'
    
}) */
student1Entries.filter(entry => typeof entry[1] !== 'function')
               .map(entry => `entry ${entry[0]} is ${entry[1]}`)
               .forEach(str => {
                // String - is a primitive value. It's IMMUTABLE
                str.replace('e','E')
                str[0] = 'E'
                // in the next row we are not attempting to change,
                // but replace the old primitive value by new one
                str = str.replace('e','E')
                console.log(str)
                console.log(str.length)
               })

//console.log(`student1StaticEntries=\n`,student1StaticEntries);

console.log('BEFORE\n*****')
console.log(`student1StaticValues=\n`,student1StaticValues);
student1StaticValues.forEach((value,ix) => {
    if (typeof value === 'string') {
        value = value.toUpperCase() // changes only the value
        student1StaticValues[ix] = value.toUpperCase() // changes the array
        console.log(`value = ${value}`)
    } else if (typeof value === 'number') {
        value++; //works because of value++ is like value = value+1
        console.log(`age = ${value}`) // by value
        //student1StaticValues[ix] = value // changes the array
    } else {
        value[0] = 100
    }
})
console.log('AFTER\n*****')
console.log(`student1StaticValues=\n`,student1StaticValues);

function calc1(result,n1,n2,n3) {
    result = (n1 - n2) * n3
    globalResult = result
}

function calc2(resultObj,n1,n2,n3) {
    resultObj.result = (n1 - n2) * n3
}

let n1 = 10, n2 = 2, n3 = 15, result = 0, globalResult = 0;
const resultObj = {}

calc1(result,n1,n2,n3)
calc2(resultObj,n1,n2,n3)
console.log(`result=${result}`)
console.log(`globalResult=${globalResult}`)
console.log(`resultObj = \n`,resultObj)