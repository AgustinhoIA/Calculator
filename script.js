const numberButton = document.querySelectorAll(".number")

const plus = document.querySelector(".sum")
const minus = document.querySelector(".substract")
const multi = document.querySelector(".multiply")
const divi = document.querySelector(".divide")
const equal = document.querySelector(".equal")
const erase = document.querySelector(".erase")
const dot = document.querySelector(".dot")
const clear = document.querySelector(".clear")

let number1 = ""
let number2 = "0"
let operator = ""

function operate(number1, number2, operator) {
  switch(operator) {
    case " + ":
      result = add(number1, number2)
      break
    case ' - ':
      result = subtract(number1, number2)
      break
    case ' X ':
      result = multiply(number1, number2)
    case ' ÷ ':
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


function getNumber() {
numberButton.forEach(button => {
  button.addEventListener('click',function(){
    let numberToDisplay = button.querySelector("p").textContent
    number1 = number1 + `${numberToDisplay}`
    console.log(Number(number1))
  })
})
console.log(numberButton)
}

/* next step is making a switch case into GetNumber in witch if a operetor has been imputed 
then any new number get puts into number 2, to do that any operator has to switch a variable to indicate that
 in principle the result in the display should show the numbers that you imput into then, the operator and the second number
 when you press equal that display should be replaced with the matematical result of the operation, and once you press any
 other number then it gets reseted to showing the current imput*/
 
dot.addEventListener('click',function(){})
plus.addEventListener('click',function(){})
minus.addEventListener('click',function(){})
multi.addEventListener('click',function(){})
divi.addEventListener('click',function(){})
equal.addEventListener('click',function(){})
erase.addEventListener('click',function(){})
clear.addEventListener('click',function(){})

getNumber()