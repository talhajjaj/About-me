'use strict';

alert('welcome to our page')
console.log("welcome to our page")

let userName = prompt('enter your name')
{
    console.log('Hello' + userName);
}
alert('hello' + userName)

let love = prompt('do you love watching anime?')
if (love = 'yes') { console.log('yay') }
else if (love = "no") { console.log("why") }

let feel = prompt('are you happy today?')
if (feel = "yes") {
    console.log('cool')

}

else if (feel = "no") {
    console.log('dont be')
}


let answer = prompt('enter how many anime you have watched?');

if (answer >= 2) {

    console.log('true');
} else {

    console.log('false');
}

let hours = prompt('enter how many hours do you work in week?');
if (hours >= 50) {
    console.log("false")
}
else {
    console.log('True')
}

let animetype = prompt('do you like action anime?').toUpperCase();

switch ('animeType') {
    case 'YES':
        console.log('true');
        break;
    case 'NO':
        console.log('false');
        break;
    default:
        console.log('wrong answer');
        break;
}

let drinkstype = prompt('do you like cold or hot drinks?').toLocaleLowerCase();

switch ('drikstype') {
    case 'hot':
        console.log('yummy');
        break;
    case 'cold':
        console.log('awch');
        break;
    default:
        console.log('wrong answer');
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






for (let i = 0; i < 4; i++) {
    let age = prompt('what do you think how old am i ?');
    if (age < 22 || age > 22) {

        alert('too high');

        console.log('too high');
    }
    else if (age = 22) {
        alert('great job')
        console.log('great job')

        break;
    }

    else if (age < 0) {
        alert('too low')
        console.log('too low')
    }

}

// for(let i =0;i<6;i++)
// let colors = [];
// let useranswer = prompt('what is my fav rainbow color?');
// let hint = false;
// for (let i = 0; i < colors.length; i++) {
//     if (userAnswer === colors[i]) {
//         console.log('yes it is');
//         hint = true;
//         break;
//     }
// }
// if (hint=== false) {
//     alert ('wrong')
//     console.log('wrong');
// }

let rainbowcolor = ['Red', 'yellow', 'green', 'blue', 'purple', 'pink'];
let hint=false ;
for(let attempt=1; attempt <=6;attempt++)
let userAnswer = prompt('what is my rainbow fav color?');
for (let i = 0; i < 6; i++) {
    if (userAnswer === rainbowcolor[i]) {
        alert('yes it is right ');
        flag = true;
        break;
    }
}
if (flag === true) {
    break;
}
alert('the right answer is Red, yellow, green,blue, purple, pink')