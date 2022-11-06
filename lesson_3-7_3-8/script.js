'use strict'

// console.log('Hello', 1)
// console.log('Hello', 2)
// console.log('Hello', 3)
// console.log('Hello', 4)
// console.log('Hello', 5)
// console.log('Hello', 6)
// console.log('Hello', 7)

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log('Hello', i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log('Hello', i);
// }

// let isLoopContinues = true;
// let i = 0;

// while (isLoopContinues) {
//   i = Math.random();
//   console.log(i);

//   if(i > 0.5) {
//     isLoopContinues = false
//   }
// }

// do {
//   i = Math.random();
//   console.log(i);

//   if(i > 0.5) {
//     isLoopContinues = false;
//   } else {
//     isLoopContinues = true;
//   }
// } while (isLoopContinues);

// while (isLoopContinues) {
//   i = Math.trunc(10 * Math.random() + 1)
//   console.log(i);

//   if (i === 8) {
//     isLoopContinues = false;
//   }
// }

// res = a * b + k


// Function Declaration
function sayHello() {
  console.log('Hello!');
}

// Function Expression
const sayHello2 = function () {
  console.log('Hello!');
}

// Function Expression (lambda - стрелочная функция)
const sayHello3 = () => {
  console.log('Hello!')
}

// IIFE - Immediately Invoked Function Expression
(function(name) {
  console.log('Hello from IIFE', name)
})('Andrey');

//

function sayHelloToUser(firstName = '', lastName = '') {
  console.log(`Привет, ${firstName} ${lastName}`)
}

sayHelloToUser('Иван')
sayHelloToUser('Elon', 'Musk')

let someVariable = '';

function sayHelloToUserName(userName = 'Гость') {
  someVariable = 39;
  console.log(`Привет, ${userName}`)

  function innerFunction() {
    console.log(someVariable);
  }

  innerFunction();
}

console.log(someVariable);
sayHelloToUserName();

// var someVariable1 = 'Hello!';

// function sayHelloVar() {
//   var someVariable1 = 'Hello'
// }

// if (true) {
//   const someVariable1 = 'Hello';
// }

// console.log(someVariable1)

function sayHello4() {
  console.log('Hello World!')
}

function getSum(a, b) {
  return a + b;
}

const sum = getSum(4, 5) + getSum(5, 6);
console.log(sum)