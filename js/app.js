'use strict';

alert('welcome to our page')
console.log("welcome to our page")

let userName=prompt('enter your name')
{
 console.log('Hello' + userName);}
 alert ('hello'+ userName)

let love= prompt('do you love watching anime?')
if (love='yes')
{console.log('yay')}
else if (love="no")
{console.log("why")}

let feel=prompt('are you happy today?')
if (feel="yes"){
    console.log('cool')

}

else if (feel="no"){
    console.log('dont be')
}


 let answer= prompt('enter how many anime you have watched?');

 if (answer >= 2) {

     console.log('true');
 } else {

    console.log('false');
 }

 let hours= prompt('enter how many hours do you work in week?');
 if (hours>=50){
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


