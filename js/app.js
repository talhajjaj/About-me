'use strict';

alert('welcome to our page')
console.log("welcome to our page")

let userName = prompt('enter your name')
{
    console.log('Hello' + userName);
}
alert('hello ' + userName + ' lets play a guessing game')
 
let score =0;

let lovewatching = prompt('do you think i love watching anime?')
if (lovewatching == 'yes'|| lovewatching == 'y' ){
// console.log('correct');
alert('correct');
}
else if (lovewatching == "no"||"n") {
    // console.log('wrong');
    alert('wrong')
    score++;
}


// let feel = prompt('are you happy today?')
// if (feel = "yes") 
// alert('cool')

// else if (feel = "no") 
// alert('dont be')


let answer = prompt('enter how many anime do you think i have watched?');

if (answer >= 5) {

    // console.log('correct');
    alert('correct');
    score++
} else {

    // console.log('wrong');
    alert('wrong')
}

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

let drinkstype = prompt('what do you think i like to drink cold or hot drinks?').toLocaleLowerCase();

switch ('drikstype') {
    case 'hot':
        // console.log('yummy');
        alert('correct')
        score++

        break;
    case 'cold':
        // console.log('awch');
        alert('wrong')
        break;
    default:
        // console.log('wrong answer');
        alert('wrong answer')
        break;
}


// let age = prompt('what do you think how old am i ?');
// while (age <22  || age >22 ) {
//    alert ('too high');

//   console.log('too high');
// }
//   if (age =22) {
//     alert('great job')
//       console.log ('great job')
//   }
//   else if (age <0 ){
//       alert ('too low')
//       console.log('too low')
//   }






for (let i = 0; i < 4; i++){
    let myage = prompt('what do you think how old am i ?');
    if (myage > 22) {
        alert('too high');

        // console.log('too high');
    }
    else if (age = 22) {
        alert('correct')

        // console.log('correct')
          score++
        break;
    }

    else if (age < 22) {
      
        alert('too low')
        // console.log('too low')
        
    }

}



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
alert('the right answer is cherry apple strawberry oranges') ;
alert('your score is '+ score + ' of 7');
alert('Thank you for your time ');