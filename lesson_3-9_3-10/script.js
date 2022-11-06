'use strict';

// hoisting 

// sayHello();

// function sayHello() {
//   console.log('Hello From Declaration');
// }

// const sayHello2 = function () {
//   console.log('Hello From Expression');
// }

// const sayHello3 = () => {
//   console.log('Hello From Lambda Expression');
// }

// sayHello();
// sayHello2();
// sayHello3();

// let x = '3';

// function printX() {
//   console.log(x)

//   let x ='5';
// }

// printX();

// Замыкания
// Closures

// Способностьм функции запоминать переменные из контекста, где она была создана

// let func;

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     func = function () {
//       console.log(i);
//     }
//   }
// }

// // console.log(i);
// func();

// const button = document.getElementById('button')
// const someVariable = 'Hello World!'

// button.addEventListener('click', () => {
//   console.log(someVariable);
// })

const person = {
  fristName: 'Andrei',
  lastName: 'Garfield',
  // body: {
  //   age: 50,
  //   height: 185
  // }
}


// const person2 = person;

// person2.firstName = 'Andrew';

// console.log(person.firstName);

// if (person.body) {
// console.log(person.body.age);
// }

console.log(person?.body?.age);