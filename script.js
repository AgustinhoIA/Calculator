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

let number1 = ""
let number2 = ""
let operatorValue = ""
let secondNumber = 1
let display = ""
let solution = ""

function operate(operatorValue) {
  let n1 = Number.number1
  let n2 = Number.number2

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
  if (secondNumber == 1) {
    secondNumber = 2
  }
  console.log(secondNumber)
}

function getNumber() {
  numberButton.forEach(button => {
    button.addEventListener('click',function(){
      if (secondNumber == 1){
          let numberToDisplay = button.querySelector("p").textContent
          number1 = number1 + `${numberToDisplay}`
        } else if (secondNumber == 2) {
            let numberToDisplay = button.querySelector("p").textContent
            number2 = number2 + `${numberToDisplay}`
          }
          display = `${number1}${operatorValue}${number2}`
          console.log(`display reads: ${display}`)
    })
  })
}

function getOperator() {
  operatorBtn.forEach(opbtn => {
    opbtn.addEventListener(`click`, switchNumber);
    opbtn.addEventListener(`click`, function(){
      let operatortToDisplay = opbtn.querySelector("p").textContent
      operatorValue = `${operatortToDisplay}`
      console.log(operatorValue)
    });
  })
}

function getResult(){
}
function main(){
  getNumber()
  getOperator()
  equal.addEventListener('click', function() {
    console.log(number1)
    console.log(number2)
    operate(Number.number1,Number.number2,operatorValue)
    console.log(`solution is: ${solution}`)
    }
  )
}
console.log(numberButton)
console.log(operatorBtn)
console.log(`display reads: ${display}` )


/* next step is making a switch case into GetNumber in witch if a operator has been imputed 
then any new number get puts into number 2, to do that any operator has to switch a variable to indicate that
 in principle the result in the display should show the numbers that you imput into then, the operator and the second number
 when you press equal that display should be replaced with the matematical result of the operation, and once you press any
 other number then it gets reseted to showing the current imput*/
 
dot.addEventListener('click',function(){})
erase.addEventListener('click',function(){})
clear.addEventListener('click',function(){})

main()