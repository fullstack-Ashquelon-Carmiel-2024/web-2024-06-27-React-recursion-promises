// 5 steps
// step on each step, or jump above one step
// 12345
// 2345
// 1345
// 1245
// 245

// 1 x 2 x 3 x .... x n
function factorial(n) {

    // Exit condition - תנאי יציאה
    if (n === 0 || n === 1) {

        return 1;

    }

    // Recursive step - צעד של רקורסיה
    console.log(`going to run factorial(${n-1})`)
    return factorial(n-1)*n;

}

// n = 3, factorial(3)
// step 1: 3!==0 && 3!==1 => no exit, return factorial(2)*3
// step 2: 2!==0 && 2!==1 => no exit, return factorial(1)*2  (remember *3)
// step 3: 1!==0, but 1 === 1 => return 1 (remember *2 and *3)

function endless(n) {

    console.log(`n = ${n}`);

    endless(n+5);

}

// endless(5) // browser shouts: STACK OVERFLOW!!!!!

console.log(`factorial(6)`);
console.log(factorial(6));


/** 
 * MISSION: create recursive function power(a,n)
 * which calculates the power "n" of "a"
 * without using the operator ** or some predefined loop like "for" or "while".
 */

function power(a,n) {

    if (n === 0) return 1;
    if (n === 1) return a;

    return power(a,n-1) * 3;   

}

// power(3,5)
// Step1: 5!==0 && 5!==1 => no exit, return power(3,4) * 3
// Step2: 4!==0 && 4!==1 => no exit, return power(3,3) * 3 // keep *3
// Step3: 3!==0 && 3!==1 => no exit, return power(3,2) * 3 // keep * 3 * 3
// Step4: 2!==0 && 2!==1 => no exit, return power(3,1) * 3 // keep * 3 * 3 * 3
// Step5: 1!==0 but 1===1 => return 3 // * 3 - from the step4 and * 3 * 3 * 3 from the previous steps

// Copy array (not the pointer, but the array itself)
const ar1 = [false, 45, 'tree','bird',0.5,undefined];
const ar2 = ar1.map(el => el);
const ar3 = ar1.slice(0);
// SHALLOW COPY - good copy, but only of one layer

const ar4 = [667, {firstName: 'John'}, ['a','b','c'],'hello'];
const ar5 = ar4.map(el => el);

const ar6 = [{studentName: 'Mary', grades: [90,79, 85, 100, 100]}]

/***************************** */
const a1 = []
const a2 = [5]
const a3 = [5, 7, 100, 1024, 3444]
const a4 = [5, 7, 100, 1024, 344]
const a5 = [0.1, 6, 3000, 1024, 344]
const a6 = [-4, 3.5]
const a7 = [-4, -5]

function checkAscending(ar) {

    if (ar.length < 2 ) return false;
    if (ar.length === 2) return ar[0] < ar[1];

    return ar[0] < ar[1] && checkAscending(ar.slice(1));

}
// checking a3 = [5, 7, 100, 1024, 3444]
//step1: 5 < 7 && check if [7, 100, 1024, 3444] ascending
//step2: 7 < 100 && check if [100, 1024, 3444] ascending
//step3: 100 < 1024 && check if [1024, 3444] ascending
//step4: return 1024 < 3444
//           true

const aaa = [a1,a2,a3,a4,a5,a6,a7]

aaa.forEach(el => {

    console.log(`check `,el)
    console.log(checkAscending(el))

})

/******************** */
// Fibonacci series
// 1,1,2,3,5,8,13,21 ...
// MISSION:
// a) create recursive function fibonacci, that
//    calculate n-th number in the series
// b) create recursive function showFibonacci, that
//    shows n members of the series

function fibonacci(n) {

    if (n < 1) return "invalid input";
    if (n <= 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);

}
// sttep1: fibonacchi(6): return fibonacci(5)+fibonacci(4)
// sttep2: fibonacchi(5): return fibonacci(4)+fibonacci(3)
// sttep2: fibonacchi(4): return fibonacci(3)+fibonacci(2)=fibonacci(3)+1

console.log(fibonacci(9))













