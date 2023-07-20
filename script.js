const numberButton = document.querySelectorAll(".number")
const operatorBtn =document.querySelectorAll(".operator")

const plus = document.querySelector(".sum")
const minus = document.querySelector(".substract")
const multi = document.querySelector(".multiply")
const divi = document.querySelector(".divide")
const equal = document.querySelector(".equal")
const erase = document.querySelector(".erase")
const dot = document.querySelector(".dot")
const clear = document.querySelector(".clear")
const clDisplay = document.querySelector(".display")

let number1 = ""
let number2 = ""
let operatorValue = ""
let secondNumber = 0
let display = ""
let solution = ""

function operate(fn, sn, operatorValue) {
  let n1 = fn
  let n2 = sn
  console.log(`n1: ${n1}, n2: ${n2}`)
  console.log(`operator is: ${operatorValue}`)
  switch(operatorValue) {
    case "+":
      result = n1 + n2;
      console.log(result)
      break
    case '-':
      result = n1 - n2;
      break
    case 'X':
      result = n1 * n2
    case '÷':
      result = n1 / n2
      break
    default:
      result = 'ERROR'
    } 
    solution = result
    return result
    
}


function switchNumber(){
  if (secondNumber == 0) {
    secondNumber = 1
  }
  console.log(secondNumber)
}

function getNumber() {
  numberButton.forEach(button => {
    button.addEventListener('click',function(){
      if (secondNumber == 0){
          let numberToDisplay = button.querySelector("p").textContent
          number1 = number1 + `${numberToDisplay}`
        } else if (secondNumber == 1) {
            let numberToDisplay = button.querySelector("p").textContent
            number2 = number2 + `${numberToDisplay}`
          }
      display = `${number1}${operatorValue}${number2}`
    })
  })
  button.addEventListener('click', modifyDisplay)
}

function getOperator() {
  operatorBtn.forEach(opbtn => {
    opbtn.addEventListener(`click`, switchNumber);
    opbtn.addEventListener(`click`, function(){
      let operatortToDisplay = opbtn.querySelector("p").textContent
      operatorValue = `${operatortToDisplay}`
      console.log(operatorValue)
    });
    opbtn.addEventListener('click', modifyDisplay)
  })
}

function clearbtn(){
  clear.addEventListener('click', function(){
    number1 = ""
    number2 = ""
    solution = ""
    secondNumber = 0
  })
  clear.addEventListener('click', modifyDisplay)
}

function modifyDisplay(){
  clDisplay.textContent = `${number1} ${operatorValue} ${number2}`
}

function main(){
  getNumber()
  getOperator()
  clearbtn();
  equal.addEventListener('click', function() {
    operate(Number(number1), Number(number2), operatorValue)
    console.log(`solution is: ${solution}`)
    }
  )
}
console.log(numberButton)
console.log(operatorBtn)
console.log(`display reads: ${display}` )


/*at the moment getNumber and getOperator woek as intended, but in main, the equal addeventListener
only recognise opertatorValue into his parameters, number1 and number2 values are "undefined", this 
seems to be an issue with the scope, but operatorValue works on the same scope isn`t givin any problems
 */
 
dot.addEventListener('click',function(){})
erase.addEventListener('click',function(){})
clear.addEventListener('click',function(){})

main()