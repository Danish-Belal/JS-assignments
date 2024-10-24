// import { quizData } from "./data";
 const quizData = [{
     "question": "Which language runs in a web browser?",
     "a": "Java",
     "b": "C",
     "c": "Python",
     "d": "JavaScript",
     "correct": "d",
 },
 {
     "question": "What does CSS stand for?",
     "a": "Central Style Sheets",
     "b": "Cascading Style Sheets",
     "c": "Cascading Simple Sheets",
     "d": "Cars SUVs Sailboats",
     "correct": "b",
 },
 {
     "question": "What does HTML stand for?",
     "a": "Hypertext Markup Language",
     "b": "Hypertext Markdown Language",
     "c": "Hyperloop Machine Language",
     "d": "Helicopters Terminals Motorboats Lamborginis",
     "correct": "a",
 },
 {
     "question": "What year was JavaScript launched?",
     "a": "1996",
     "b": "1995",
     "c": "1994",
     "d": "none of the above",
     "correct": "b",
 },
 // you can add more quiz here
 ]

 function setValues(i){
     const question = document.getElementById('heading');
     question.innerText = quizData[i].question;

     const op1 = document.querySelector('label[for="op1"]');
     const op2 = document.querySelector('label[for="op2"]');
     const op3 = document.querySelector('label[for="op3"]');
     const op4 = document.querySelector('label[for="op4"]');
    
     op1.innerText = quizData[i].a;
     op2.innerText = quizData[i].b;
     op3.innerText = quizData[i].c;
     op4.innerText = quizData[i].d;

}

function getSelectedAnswer(){
    const ans = document.getElementsByTagName
}

function submitAnswer(score){
    console.log('ON Submite fun Triggered');
    const quizBoxes = document.getElementsByClassName('quizBox');

    Array.from(quizBoxes).forEach((box)=>{
        box.innerHTML =""
    })
    score=10;
    
    const finishTag = document.getElementById('finished');
    finishTag.innerText = `Your Totabl socre is ${score}`
    
}

let score = 0;
let  i =-1;
 const interval = setInterval(()=>{
    i++
    if(i < quizData.length){
        setValues(i);
    }

    if(i > 0){
        const seletedAns = getSelectedAnswer();
        if(seletedAns == quizData[i-1].correct){
            score +=10;
        }
    }

    if(i == quizData.length){
        clearInterval(i);
        submitAnswer(score)
    }
    

},10000)