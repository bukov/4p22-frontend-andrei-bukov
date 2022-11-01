'use strict'

// const str = 'строка'.toUpperCase();
// const str2 = 'СтрОка'.toLowerCase();

// const str = 'строка';
// const strUpper = str.toUpperCase;
// console.log(str.toUpperCase());
// console.log(str);
// console.log(strUpper);

// console.log('Строка'.includes('рок'));
// console.log('Строка'.startsWith('Стр'));
// console.log('Строка'.endsWith('ока'));

// console.log('А роза упала на лапу Азора'.replace('А', 'а'));
// console.log('А роза упала на лапу Азора'.replaceAll('А', 'а'));

// const str = '        строка с пробелами по краям       ';
// console.log(str.trim());

// const str = 'Привет!';
// console.log(str[6]);
// console.log(str.length);

// const startWith = '   Строка  '.trim().toLowerCase().startsWith('стр');
// console.log(startWith);

//  || - ИЛИ
//  && - И
// ! - НЕ

// const a = null;
// const b = 'Строка';
// const c = 0;

// const resultOr = a || b || c;

// const resultAnd = a && b && c;

// console.log(resultAnd);

// const num1 = 'A';
// const num2 = 'a';
// const num3 = 6;
// const result = num1 == num2; не строгое сравнение
// console.log(result);
// const result = num1 === num2; строгое сравнение
// console.log(result);

// const result = num1 !== num2;
// console.log(result);

// console.log(num1 > num2)
// console.log(num1 >= num2)
// console.log(num1 < num2)
// console.log(num1 <= num2)

// const num = 5;
// const num2 = 10;
// if (num >= 5) {
//   console.log('Число больше и равно 5');
// } else {
//   console.log('ИНАЧЕ')
// }

// const age = 10;
// const firstName = 'Pawel';
// const lastName = 'Macivoda';

// if (age > 18 && age <40) {
//   console.log('Ваш возраст от 18 до 40');
// }

// if ((firstName === 'Pawel' || firstName === 'Pavel') && age > 18) {
//   console.log('Условие выполнилось');
// }

// const someVariable = 'Значение 2';

// switch (someVariable) {
//   case 'Значение 1': console.log('1'); break;
//   case 'Значение 2': console.log('2'); break;
//   case 'Значение 3': console.log('3'); break;
//   default: console.log('default');
// }

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const button = document.getElementById('submit');

// loginInput.addEventListener('input', (event) => {
//   console.log(event.target.value);
// });

// passwordInput.addEventListener('input', (event) => {
//   console.log(event.target.value);
// });

button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(loginInput.value);
  console.log(passwordInput.value);

  if (loginInput.value === passwordInput.value) {
    console.log('Значения совпадают');
  } else {
    console.log('Значения не совпадают');
  }
})