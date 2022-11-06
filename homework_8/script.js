'use strict';

const button = document.getElementById('submit');
const answer = document.getElementById('answer');

button.addEventListener('click', (event) => {
  const input1 = document.getElementById('number1').value;
  const operator = document.getElementById('operator').value;
  const input2 = document.getElementById('number2').value;
  let result;
  
  if (input1 === '') {
    console.log('Первое число не указано');
  }

  if (input2 === '') {
    console.log('Второе число не указано');
  }

  if (isNaN(input1) && isNaN(input2)) {
    console.log('Некорректный ввод чисел');
  }

  if (operator === '/' && input2 === '0') {
    console.log('Операция некорректна');
  }

  switch(operator) {
    case '+': {
      result = Number(input1) + Number(input2);
     } break;
    case '-': {
      result = Number(input1) - Number(input2);
    } break;
    case '*': {
      result = Number(input1) * Number(input2); 
    }  break;
    case '/': { 
      result = Number(input1) / Number(input2);
    } break;
    case '': {
      console.log('Не введен знак');
    } break;
    default: console.log('Программа не поддерживает такую операцию');
  }
  console.log(result);
  answer.innerText = `${result}`;
  event.preventDefault();
})