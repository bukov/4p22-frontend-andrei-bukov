'use strict'

// const num = 5; // number | +-(2^53-1))
// console.log(typeof num); // 'number'

// const floatNum = 5.2; // number | +-(2^53-1))
// const typeOfFloatNum = typeof floatNum;
// console.log(typeOfFloatNum);

// const bigNum = BigInt(9007199254740992); //bigint | число произвольной длины
// console.log(typeof bigNum);

// const strDoubleQuote = "String"; // строка в двойных кавычках
// const strSimglrQuote = 'String'; // строка в одинарных кавычках
// const name = 'Hello! I\'m Andrew';
// const quote = "He said: \"I wanna go home\"";
// const strItalicQuote = `Hello, I have ${bigNum} apples`
// const strWithApples = 'Hello, I have ' + bigNum + ' apples';
// console.log(typeof strWithApples);

// // Hello! I'm Andrew
// // He said: "I wanna go home"


// const isVisible = true; //boolean
// const isHidden = false; //boolean
// const hasApples = true;
// console.log(typeof hasApples)

// // --------------

// const someConstant = null; // null
// let someVariable; // undefined

// console.log(typeof someConstant);
// console.log(typeof someVariable);

// Строковый тип преобразования
// const num = 5;
// const bool = false;

// const strFromNum = '' + num;
// console.log(typeof str);

// const strFromBool = String(bool);
// console.log(strFromBool);

// Числовой тип преобразования
// const str = '5';
// const bool = false;

// const numberFromStr = +str;
// console.log(numberFromStr);

// const numberFromBool = +bool;
// console.log(numberFromBool);

// Булевский тип преобразования
// const str = 'lkm';
// const num = 5;

// const boolFromStr = Boolean(str);
// console.log(boolFromStr);

// const boolFromNum = Boolean(num);
// console.log(boolFromNum);

// falsey-значения
// 0, null, undefined, '', NaN

// выражени 
// операторы - - + / *
// операнды - числа, с которыми производится операция
// 5 + 10
// типы операторов: унарные и бинарные
// *, /, -, + - бинарные
// +sum - унарный

// Математика
const result = 5 + 10 * 5 / 10 - 7;
console.log(result);

const division = 15 % 4 * result;
console.log(division);

const pow = 5 ** 2;
console.log(pow);

// const res = 5 - 'qwerty';
// console.log(res);

const divisiomByZero = BigInt(9.0071993e+15);
console.log(divisiomByZero);

// Сокращенная арифметика
let n = 1;
const res = n++;

// n = n + 2;
// n = n * 3;
// n *= 3; // n = n * 3;
// n += 3; // n = n + 3;
// n /= 3; // n = n / 3;
// n -= 3; // n = n - 3;
// console.log(n);

// n++; // инкремен (постфикс)
// n--; // декремент (постфикс)

// --n; // декремент (префикс)
// ++n; // инкремент (префикс)
console.log(res);