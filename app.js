//app.js


//single line comment
/*
multiline
*/
/*
This is a file for learning js
*/

console.log("hello");
console.log(144);
console.log('Hello'.length);

console.log("aaaaaa".toUppercase());

console.log(Math.floor(Math.random()*100));
console.log(Number.isInteger(2017));


var myName = 'Pat';
console.log(myName);


let price;
console.log(price);

const CannotChange = 'Can\'t change me';

let Shroom;
Shroom +=1;

var myName = 'stupid';
var myCity= 'jersey';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);

newVariable = 1;
console.log(typeof newVariable);

let haha = true;
if (haha) {
    console.log("laugh now");
} else {
    console.log("cry for me");
}
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

let isLocked = false;


isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');


function getReminder() {
  console.log('Water the plants.');
}

console.log(getReminder());
