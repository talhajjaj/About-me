'use strict';

alert('welcome to our page')
console.log("welcome to our page")

let userName = prompt('enter your name')
{
    console.log('Hello ' + userName);
}
alert('hello ' + userName)

function animeFunc () {
    let love = prompt('do you love watching anime?')
    if (love = 'yes')
    alert('correct')
    
    else if (love = "no") 
    alert('wrong')
}

animeFunc(); 

function happy (){
    let feel = prompt('are you happy today?')
    if (feel = "yes") 
    alert('cool')
    
    else if (feel = "no") 
    alert('dont be')

}

happy (); 

function animeMany (){
    let answer = prompt('enter how many anime you have watched?');

    if (answer >= 2) {
    
        console.log('true');
    } else {
    
        console.log('false');
    }    

}

animeMany (); 

function work (){
    let hours = prompt('enter how many hours do you work in week?');
    if (hours >= 50) {
        console.log("false")
    }
    else {
        console.log('True')
    }
}
 work (); 

 function animeAction(){
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
 }
 animeAction (); 

 function drink () {
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
 }
 drink(); 



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



function devAge (){
    for (let i = 0; i < 4; i++) {
        let age = prompt('what do you think how old am i ?');
        if ( age > 22) {
    
            alert('too high');
    
            console.log('too high');
        }
        else if (age = 22) {
            alert('great job')
            console.log('great job')
    
            break;
        }
    
        else if (age < 22) {
            alert('too low')
            console.log('too low')
        }
    
    }

}
 devAge(); 



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

function rainbow (){
    let rainbowcolor = ['red', 'yellow', 'green', 'blue', 'purple', 'pink'];
    let hint=false ;
    for(let attempt=1; attempt <=6;attempt++){
       let userAnswer = prompt('what is my fav rainbow color?');
    for (let i = 0; i < 6; i++) {
        if (userAnswer === rainbowcolor[i]) {
            alert('yes it is right ');
            hint= true;
            break;
        }
    }
    if (hint === true) {
        break;
    }
    }
    alert('the right answer is red, yellow, green,blue, purple, pink')

}

rainbow(); 