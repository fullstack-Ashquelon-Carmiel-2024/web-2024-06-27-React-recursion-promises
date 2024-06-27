/** VARIABLES */

/** FOR CLOCK */

const dateDiv = document.querySelector('.date');
const timeDiv = document.querySelector('.time');

const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

/** FOR QUOTES */

/** FOR PALINDROMES */

/** FOR PALINDROMES */

/** FOR GEMATRIA */


/** FUNCTIONALITY */

/** FOR CLOCK */

// T.B.D.
////////////////////////////////
//
//  - when seconds or minutes are comprised of 1 digit - add 0 before this digit
//  - change hours to be seen with AM/PM
//  - add function that calls both displayDate() and displayTime() functions
//  - move let currDate = new Date() to this function

function displayDate() {
    
    let currDate = new Date();
    let y = currDate.getFullYear();
    let m = currDate.getMonth() + 1;
    let d = currDate.getDate();
    
    let weekDay = weekDays[currDate.getDay()];
    
    dateDiv.innerText = `${weekDay} | ${d}/${m}/${y}`
}

function displayTime() {
    
    let currDate = new Date();
    let hour = currDate.getHours();
    let min = currDate.getMinutes();
    let sec = currDate.getSeconds();
    
    // other option, use
    // let timeStr = currDate.toTimeString();
    
    timeDiv.innerText = `${hour}:${min}:${sec}`
    
    let t = setTimeout(displayTime, 500);
}

displayDate();
displayTime();

console.log(quotes[0])

/** FOR QUOTES */

// T.B.D.
////////////////////////////////
//
//  - create function that gets random number 
//    from 0 to the last "quotes" array index

//  - create function that gets quote by this number 
//    from the array "quotes" and sets it into it's place

//  - run the function with "onclick" or eventListener
//

/** FOR PALINDROMES */

// T.B.D.
////////////////////////////////
//
//  - create function that gets random number 
//    from 0 to the last "palindromes" array index

//  - create function that gets quote by this number 
//    from the array "palindromes" and sets it into it's place

//  - run the function with "onclick" or eventListener
//    on the button "Palindrome Example"
//
//  - create function that 
//    1) takes palindrome from it's field,
//    2) strips it of spaces, commas, dots and other non-letter characters,
//    3) exchanges final Hebrew letters by the usual ones 
//    4) splits the string into array of letters and uses method reverse() 
//    5) joins the letters to string and compares the string to the not reversed string
//    6) if they're same shows "Yes!", if not - "No:("

//  - run the function with "onclick" or eventListener
//    on the button "Is this a Palindrome?"

let hebStr = 'ילד כותב בתוך דלי'
let newStr = hebStr.replaceAll('ם','מ')
                   .replaceAll('ן','נ')
                   .replaceAll(' ','')
                   
/** FOR GEMATRIA */


// T.B.D.
////////////////////////////////
//
//  - create function that 
//    1) takes the phrase from it's field,
//    2) strips it of spaces, commas, dots and other non-letter characters,
//    3) exchanges final Hebrew letters by the usual ones 
//    4) splits the string into array of letters 
//    5) uses "for" loop or method "forEach()" or method "reduce()" 
//       to go over each letter and add it's value to the total sum
//
//      You may use these arrays to get the value of each letter. 
//      For example, if the letter is found (indexOF()!) in tens, 
//      it's value is equal to it's index multiplied by 10.
        var digits = ['','א','ב','ג','ד','ה','ו','ז','ח','ט'];
        var tens = ['','י','כ','ל','מ','נ','ס','ע','פ','צ'];
        var hundreds = ['','ק','ר','ש','ת'];

//    6) displays the sum

//  - run the function with "onclick" or eventListener


