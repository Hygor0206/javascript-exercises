const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
  let sum=0;
  num.forEach(num => sum+=num);
  return sum;
};

const multiply = function(arr) {
  let total=[arr[0]];
  for(let i=1; i<arr.length; i++){
    total*=arr[i];
  }
  return total;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
  if (n === 0) return 1;
  let factorial=1;
  for(let i=1; i<=num; i++){
    factorial*=i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
