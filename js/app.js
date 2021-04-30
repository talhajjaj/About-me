 'use strict';

alert('welcome to our page')
console.log("welcome to our page")

let userName = prompt('enter your name')
{
    console.log('Hello ' + userName);
}
alert('hello ' + userName + ' lets play a guessing game')
let score=0;

 function animeFunction () {
    let lovewatching = prompt('do you think i love watching anime?')
    if (lovewatching == 'yes'|| lovewatching == 'y' ){
    // console.log('correct');
    alert('correct');
    score++;
    }
    else if (lovewatching == "no"||"n") {
        // console.log('wrong');
        alert('wrong')
        
    }
 }    

animeFunction(); 



function animeMany (){
    let answer = prompt('enter how many anime do you think i have watched?');

    if (answer >= 5) {
    
        // console.log('correct');
        alert('correct');
        score++
    } else {
    
        // console.log('wrong');
        alert('wrong')
    }
} 

animeMany (); 

function study (){
    let studyhours = prompt('how many hours do you think i study in week?');
if (studyhours >= 50) {
    // console.log("correct")
    alert('correct')
    score++
}
else {
    // console.log('wrong')
    alert('wrong')
}
}
study();


function animeAction(){
    let animetype = prompt('do you think that i like action anime?').toUpperCase();

    switch ('animeType') {
        case 'YES':
            // console.log('correct');
            alert('correct')
            score++
            break;
        case 'NO':
            // console.log('wrong');
            alert('wrong')
            break;
        default:
            // console.log('wrong answer');
            alert('wrong answer')
            break;
    }
}
  animeAction (); 

 function drink () {
   let drinkstype = prompt('what do you think i like to drink cold or hot drinks?').toLocaleLowerCase();

switch ('drikstype') {
    case 'hot':
        // console.log('correct');
        alert('correct')
        score++

        break;
    case 'cold':
        // console.log('wrong');
        alert('wrong')
        break;
    default:
        // console.log('wrong answer');
        alert('wrong answer')
        break;
}
 }
 drink(); 




function devAge (){
    for (let i = 0; i < 4; i++) {
        let age = prompt('what do you think how old am i ?');
        if ( age > 22) {
    
            alert('too high');
    
            // console.log('too high');
        }
        else if (age = 22) {
            alert('great job');
            // console.log('great job')
            score++
            break;
        }
    
        else if (age < 22) {
            alert('too low');
            // console.log('too low')
        }
    
    }

}
 devAge();
 

let favfruit = ['cherry', 'apple', 'strawberry', 'oranges'];{
let hint=false ;
for(let attempt=1; attempt <=6;attempt++){
let userAnswer = prompt('what is my fav fruit ?');
for (let i = 0; i < favfruit.length; i++) {
    if (userAnswer === favfruit[i]) {

        alert('yes it is right ');
         // console.log('yes it is right');
        hint= true;
        score++;
        break;
    }
}
 if (hint === false) {
    // console.log('wrong');
    alert('wrong');
}
}
}
alert('the right answer is cherry, apple, strawberry, oranges') ;
alert('your score is '+ score + ' of 7');
alert('Thank you for your time ');