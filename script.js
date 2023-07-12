const btn1 = document.querySelector("number 1")
const btn2 = document.querySelector("number 2")
const btn3 = document.querySelector("number 3")
const btn4 = document.querySelector("number 4")
const btn5 = document.querySelector("number 5")
const btn6 = document.querySelector("number 6")
const btn7 = document.querySelector("number 7")
const btn8 = document.querySelector("number 8")
const btn9 = document.querySelector("number 9")
const btn0 = document.querySelector("number 0")
const plus = document.querySelector("sum")
const minus = document.querySelector("minus")
const multi = document.querySelector("multiply")
const divide = document.querySelector("divide")
const equal = document.querySelector("equal")
const erase = document.querySelector("erase")
const dot = document.querySelector("dot")
const clear = document.querySelector("clear")

let number1 = 0
let number2 = 0
let operator = Any

function operate(number1, number2, operator) {
  switch(operator) {
    case "+":
      result = add(number1, number2)
      break
    case '-':
      result = subtract(number1, number2)
      break
    case 'X':
      result = multiply(number1, number2)
    case '÷':
      result = 
      break
    default:
      result = 'ERROR'
  } return result
}

const add = function(number1, number2) {
    return number1 + number2;
};
  
const subtract = function(number1, number2) {
  return number1 - number2;
};
  
const sum = function(numbers) {
  let result = 0
  for (i = 0; i < numbers.length; i++) {
  result += numbers[i];
  } return result
};
  
const multiply = function(numbers) {
  let result = 1;
  for (i = 0; i < numbers.length; i++) {
    result = result * numbers[i];
  } return result;
};

btn1.addEventListener('click',function(){})
btn2.addEventListener('click',function(){})
btn3.addEventListener('click',function(){})
btn4.addEventListener('click',function(){})
btn5.addEventListener('click',function(){})
btn6.addEventListener('click',function(){})
btn7.addEventListener('click',function(){})
btn8.addEventListener('click',function(){})
btn9.addEventListener('click',function(){})
btn0.addEventListener('click',function(){})
dot.addEventListener('click',function(){})
plus.addEventListener('click',function(){})
minus.addEventListener('click',function(){})
multi.addEventListener('click',function(){})
divide.addEventListener('click',function(){})
equal.addEventListener('click',function(){})
erase.addEventListener('click',function(){})
clear.addEventListener('click',function(){})
