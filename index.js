console.log('Hello from index.js');
/*
  Comments
*/
let var1 = 1 // in-line comment

/*

This is a block comment

*/

// This is a line comment


/*
  Primitives / Value Types
*/ 
let interestRate = 0.3;
console.log(interestRate);

const pi = 3.14159265359;
console.log(pi);

let name = 'Tal';
console.log(typeof(name))
console.log(name);
// change type to a "number"
name = 4.2;
console.log(typeof(name))


/*
  Basic operations
*/
let num = 10;

console.log('basic-operations num =', num + 1);
console.log('basic-operations num =', num * 10);
console.log('basic-operations num =', num / 5);
console.log('basic-operations num =', num - 3);
num++;
console.log('basic-operations num =', num);
num--;
console.log('basic-operations num =', num);
num += 15;
console.log('basic-operations num =', num);
num -= 15;
console.log('basic-operations num =', num);
num *= 5;
console.log('basic-operations num =', num);
num /= 5;
console.log('basic-operations num =', num);

let remainer;
remainer = 10 % 3;
console.log('basic-operations remainer =', remainer);


/*
  Quotation
*/
let myStr = "I am a \"double quaote\" string"
console.log('Quotation myStr', myStr);
myStr = 'I am a "double quaote" string'
console.log('Quotation myStr', myStr);
myStr = `'I am a "double quaote" string'`
console.log('Quotation myStr', myStr);

/*
  Objects / Reference Types
*/ 
let person = {
  name: 'Tal Lanndert',
  age: 37
}
console.log(person);
// Dot Notation
console.log(person.name);
// Bracket Notation
console.log(person['name']);

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 'green';
// an array can have different types
selectedColors[3] = 45.2;
console.log(selectedColors.length);


/*
  Arrays
*/
let myArray = [[1,2,3], [4,5,6], [[7,8,9], 10, 11]];
console.log('Arrays', myArray[0][1]);
console.log('Arrays', myArray[2][0][1]);

myArray.push(['cat', 'dog']) // append to array
console.log('Arrays', myArray);

myArray.pop() // remove last element
console.log('Arrays', myArray);

myArray.shift() // remove first element
console.log('Arrays', myArray);

myArray.unshift(111) // add an element at the beginning
console.log('Arrays', myArray);


/*
  Functions
*/ 
function greet(name) {
  console.log('Hello ' + name)
}

greet('Sponge');

// return variable from function
function square(num) {
  return num * num
}

console.log(square(4))

/*
  Scope
*/
let scopeVar1 = 5;

function func1(){
  let scopeVar1 = 2; // local variable to function
  console.log(scopeVar1)
}
func1();
console.log(scopeVar1); // global variable to function


/*
  Simple Queue
*/
let queueArray = [1,2,3,4,5];
console.log('Queue Before: ' + JSON.stringify(queueArray));

function nextInLine(arr, item) {
  queueArray.push(item);
  return queueArray.shift();
}
console.log('Queue next in line: ', nextInLine(queueArray, 6));
console.log('Queue After: ' + JSON.stringify(queueArray));


/*
  Conditions logical operators
*/
let condVar = true;

if(condVar) {
  console.log('condVar is true')
}

condVar = 11;
if(condVar == 10) {
  console.log('condVar is 10')
} else {
  console.log('condVar is not 10')
}

// strict equality check type and value
console.log('Conditions: 3 === 3', 3 === 3)
console.log('Conditions: 3 === "3"', 3 === "3")
console.log('Conditions: 3 != 3', 3 != 3)
console.log('Conditions: 3 !== "3"', 3 !== "3")

// grater than
console.log('Conditions: 3 > 3', 3 > 3)
// grater than or equal
console.log('Conditions: 3 >= 3', 3 >= 3)


console.log('Conditions: condVar <= 50 && condVar >= 3', condVar <= 50 && condVar >= 3)
console.log('Conditions: condVar < 10 || condVar > 20', condVar < 10 || condVar > 20)


/*
  Switch
*/
let switchVar = 2;

switch(switchVar) {
  case 1:
    console.log('Switch - got one')
    break;
  case 2:
    console.log('Switch - got two')
    break;
  case 3:
    console.log('Switch - got three')
    break;
  case 4:
    console.log('Switch - got four')
    break;
  default:
    console.log(`I don't know this input`)
}


/*
  Condition (Ternary) Operator
*/
console.log('Condition (Ternary) 2 < 5 ? "true" : "false"', 2 < 5 ? "true" : "false")
num = 0;
console.log('Condition (Ternary) nested', num < 0 ? "negative": num > 0 ? "positive" : "zero")


/*
  Loops
*/
var loopArray = [];

var x = 0;
while(x <= 10 ) {
  loopArray.push(x)
  x++;
}
console.log('Loops loopArray is', loopArray)

x = 5;
do {
  console.log('Loops do-while x is', x);
  x--;
} while (x > 2)

for (let i = 0; i<=10; i++ ) {
  console.log('Loops for execution:', i)
}

loopArray = [1,2,3,4,5,6,7];
let loopSumOfArray = 0;
for (let i = 0; i < loopArray.length; i++){
  loopSumOfArray += loopArray[i];
}
console.log('Loops loopSumOfArray is', loopSumOfArray)


/*
  Build-In Function
*/
console.log('build-in functions Math.random()', Math.random())
console.log('build-in functions Math.random() * 100', Math.random() * 100)
console.log('build-in functions Math.floor(Math.random() * 10)', Math.floor(Math.random() * 10))
console.log(`build-in functions parseInt('23')`, parseInt('23'))
console.log(`build-in functions parseInt('abc')`, parseInt('abc'))

/*
  Anonymous Functions
*/
// long format
// let logIt = function(arg) {
//   console.log(arg)
// };

// short format
// let logIt = (arg) => {
//   console.log(arg)
// };

// one line :)
const logIt = (arg) => console.log(arg);
logIt('Sponge Bob')


/*
  Rest Operator
*/
function func2(...args) {
  for (i=0; i < args.length; i++) {
    console.log('printArgs', args[i])
  }
};

func2(1,2,3);


/*
  Spread Operator
*/
let arr1 = [1,2,3,4];
let arr2;
console.log('Spread Operator arr1', arr1);
console.log('Spread Operator arr2', arr2);
arr2 = arr1;
arr1[0] = 'changed';
console.log('Spread Operator arr1', arr1);
console.log('Spread Operator arr2', arr2);
arr2 = [...arr1];
arr1[0] = 'changed again';
console.log('Spread Operator arr1', arr1);
console.log('Spread Operator arr2', arr2);


/*
  Templating
*/
person = {
  name: 'Sponge Bob',
  mood: 'happy'
}

const template = `Hi there my name is ${person.name}!!!
I am ${person.mood} right now.`

console.log(template)


/*
  Concise Declarative Functions
*/
let car = {
  speed: 50,
  setSpeed: function(newSpeed) {
    this.speed = newSpeed;
  }
};

console.log(car)
car.setSpeed(100)
console.log(car)

// Concise function declaration
car = {
  speed: 10,
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
};

console.log(car)
car.setSpeed(55)
console.log(car)


/*
  Class Syntax to Define a Constructor Function
*/
function makePerson(){
  class Person {
    constructor(name){
      this._name = name;
      this._age = undefined;
    }
    get age(){
      return this._age
    }
    set age(newAge){
      this._age = newAge
    }
  }
  return Person
}

const Person = makePerson();
const tal = new Person('Tal Lannder')
console.log(tal)
tal.age = 37
console.log(tal)
