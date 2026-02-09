const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function (numList) {
    return numList.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0)
};

const multiply = function(numList) {
    return numList.reduce((total, currentItem) => {
        return total * currentItem;
    }, 1)
};

const power = function (base, exp) {
    let result = 1;

    for (let i = 0; i < exp; i++) {
        result *= base;
    }

    return result;
};

const factorial = function(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
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
