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

  