const numberButton = document.querySelectorAll("number")

const plus = document.querySelector("sum")
const minus = document.querySelector("minus")
const multi = document.querySelector("multiply")
const divi = document.querySelector("divide")
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
      result = divide(number1, number2)
      break
    default:
      result = 'ERROR'
  } return result
}

function add(number1, number2) {
  return number1 + number2;
};
  
function subtract(number1, number2) {
  return number1 - number2;
};
  
function multiply(number1, number2)  {
  return number1 * number2
};

function divide(number1, number2) {
  return number1/number2
}



numberButton.forEach(button => {
  button.addEventListener('click',function(){})
})

dot.addEventListener('click',function(){})
plus.addEventListener('click',function(){})
minus.addEventListener('click',function(){})
multi.addEventListener('click',function(){})
divi.addEventListener('click',function(){})
equal.addEventListener('click',function(){})
erase.addEventListener('click',function(){})
clear.addEventListener('click',function(){})
