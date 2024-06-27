/*

    <div class="queston">
        <p class="text"></p>
        <ul>
            <li class='answ a0'><input type="radio" name="answers">
                <span class="answer-text"></span>
            </li>
            <li class='answ a1'><input type="radio" name="answers">
                <span class="answer-text"></span>
            </li>
            <li class='answ a2'><input type="radio" name="answers">
                <span class="answer-text"></span>
            </li>
            <li class='answ a3'><input type="radio" name="answers">
                <span class="answer-text"></span>
            </li>
        
        </ul>

    </div>

    // Place for the score
    // Buttons: to skip a question, to stop the game ...

*/


// let q1 = `Does elephant is frightened by mice?
//             a) Yes
//             b) Sometimes
//             c) Only in the Zoo
//             d) No
// `

const q1 = {

    question: 'Does elephant is frightened by mice?',
    /* answers: {
        a: 'Yes',
        b: 'Sometimes',
        c: 'Only in the Zoo',
        d: 'No'
    } */
    answers: ['Yes','Sometimes', 'Only in the Zoo',  'No'],
    rightAnswer: 'Yes',
    questionImg: './img/elefant.gif',
    answerImg: ''
}
const q2 = {

    question: 'Which animal has 2 legs?',
    answers: ['Kangaroo','Shark', 'Spider',  'Cat'],
    rightAnswer: 'Kangaroo',
    questionImg: '',
    answerImg: ''
}
const q3 = {

    question: 'Who hunts at night?',
    answers: ['Lion','Lioness', 'Elefant',  'Mouse'],
    rightAnswer: 'Lioness',
    questionImg: '',
    answerImg: ''
}

const animalSet = [q1,q2,q3];


/* function createQuestionEl(q) {
    // המעטפת של כל השאלה
    const newDiv = document.createElement('div');
    document.append(newDiv);
    // we've prepared class styled .question in CSS
    newDiv.classList.add('question');

    // טקסט השאלה
    const qDiv = document.createElement('div');
    qDiv.innerText = q.question;
    newDiv.append(qDiv);

    // תשובות
    q.answers.forEach((ans,)) */
