const firstDiv = document.querySelector('.first');
const secondDiv = document.querySelector('.second');
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnShow = document.querySelector('#show');
const btnFirstColor = document.querySelector('#firstColor');
const btnBodyBlink = document.querySelector('#body-blink');
const btnChangeEmojee = document.querySelector('#change-em');

const inpNumBodyBlink = document.querySelector('#body-blink-num');
const btnStopBodyBlinkAfterNum = document.querySelector('#stop-body-blink');
const spanStopBodyAfterNum = document.querySelector('#stop-body-blink span');
const btnStopBodyBlinkNow = document.querySelector('#stop-body-blink-now');

const startHourglass = document.querySelector('.fa-hourglass-start');
const halfHourglass = document.querySelector('.fa-hourglass-half');
const endHourglass = document.querySelector('.fa-hourglass-end');

let sleepTime = 2500;
let timer1,timer2,timer3,timer4,timer5;
const emAr = ['😅','😈','🕺','💃'];
let emCnt = 0;
let numBodyBlinkStop = undefined, bodyBlinkCnt = 0, stopBodyBlink = false;

/** MISSION
 * 
 * Add twice setTimeout() to the callback function
 * of the next listener to make one more emojee appeare
 * next to the first after some time and then the third 
 * emojee after some time
 * 
 */

btnShow.addEventListener('click', () => {

    firstDiv.innerText = "Just a minute ..."
    
    
    // The timeout is in milliseconds
    timer2 = setTimeout(() => {
        
        firstDiv.innerText = "😁"
        // EMOJISENSE
        // or
        // Windows + v
        timer3 = setTimeout(() => {

            firstDiv.innerText += "😅"
            
            timer4 = setTimeout(() => {
                
                firstDiv.innerText += "😠"

            },sleepTime)

        },sleepTime)


    },sleepTime)

    console.log('The timer is still running ...')

})

/** MISSION:
 * Add listener to the second button.
 * 
 * When it clicked, it should change the color of the FIRST div
 * to orange after the "sleepTime" is over
 */

btnFirstColor.addEventListener("click", () => {

    // setTimeout is asyncronous function - זאת אומרת
    // הפונקציה הזאת עובדת מאחורי הקלעים במקביל
    // לפעולות פשוטות יותר של 
    // JS

    // setTimeout() returns it's id, and we get it into timer1
    timer1 = setTimeout(() => {

        firstDiv.classList.replace('purple','orange');
        secondDiv.innerText += "First div already has changed color\n"

    }, sleepTime*2)

    secondDiv.innerText += "First div is going to change color\n"

})

btnStart.addEventListener('click',() => {

    startHourglass.classList.remove('invisible');
    
    setTimeout(() => {
        
        halfHourglass.classList.remove('invisible');
        startHourglass.classList.add('invisible');

        setTimeout(() => {
        
            endHourglass.classList.remove('invisible');
            halfHourglass.classList.add('invisible');
   
        }, sleepTime/2)

    }, sleepTime)



})

btnStop.addEventListener('click', () => {

    console.log(`${timer1} Stopped`)
    secondDiv.innerText = 'Stopped!'
    clearTimeout(timer1);
    
})

/** MISSION:
 * Create variables timer2,timer3, timer4 for more timer IDs.
 * 
 * Get there the IDs of the timers that show EMOJEEs.
 * 
 * Stop them inside callback function of the new listener
 * on btnStop "click" event
*/

btnStop.addEventListener('click',() => {
    
    secondDiv.innerText = 'Emojees Stopped!'
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    
})

btnBodyBlink.addEventListener('click',() => {

    secondDiv.innerText = 'Body is going to blink ...'

    timer5 = setInterval(() => {

        bodyBlinkCnt++;

        (document.body.classList.contains('purple')) 

            ? document.body.classList.replace('purple','orange')
            
            : document.body.classList.contains('orange')
            
            ? document.body.classList.replace('orange','green')

            : document.body.classList.contains('green')

            ? document.body.classList.replace('green','yellow')

            : document.body.classList.contains('yellow') 

            ? document.body.classList.replace('yellow','red')

            : document.body.classList.replace('red','purple')


            if (stopBodyBlink && numBodyBlinkStop 
                   && bodyBlinkCnt >= numBodyBlinkStop) 
                    clearInterval(timer5);

    },sleepTime)  

    /** MISSION:
     * Add to the loop of the colors also "red" and "yellow"
     */

})

/** MISSION:
 * 
 *  1. Add listener to the button btnChangeEmojee. 
 * 
 *  2. On click it should write something in the secondDiv.
 * 
 *  3. After that it should start Interval timer.
 * 
 *  4. After the time passes it should 
 * 
 *     a) show in firstDiv the emojee from emAr with index emCnt (emojee counter).
 *     b) Change emCnt
 * 
 */

btnChangeEmojee.addEventListener('click',() => {

    secondDiv.innerText = 'Going to change emojees 🛠️'

    setInterval(() => {

        firstDiv.innerText = emAr[emCnt];

        emCnt === emAr.length - 1 ? emCnt = 0 : emCnt++; 
        // const emAr = ['😅','😈','🕺','💃'];
    }, sleepTime) // Step 1: emCnt = 0, 😅, 0 !== 3 => emCnt = 1
       // Step 2: emCnt = 1, 😈, 1 !== 3 => emCnt = 2
       // Step 3: emCnt = 2, 🕺, 2 !== 3 => emCnt = 3
       // Step 4: emCnt = 3, 💃, 3 === 3 => emCnt = 0


})

inpNumBodyBlink.addEventListener('input',function() {

    console.log(this)
    // if input.value is '' or 0, or negative we won't stop
    numBodyBlinkStop = +this.value <= 0 ? undefined : +this.value; 
    spanStopBodyAfterNum.innerText = numBodyBlinkStop 
                                     ? numBodyBlinkStop
                                     : 'X';

})

btnStopBodyBlinkAfterNum.addEventListener('click',() => {
    stopBodyBlink = true;
})

/**
 * MISSION:
 * Add listener to the button btnStopBodyBlinkNow - to stop immedieately
 * the body blinking. Use id that we assigned to "timer5"
 * 
 */

btnStopBodyBlinkNow.addEventListener('click',() => {

    clearInterval(timer5);    

})
