const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    let min, max, result = 0;

    if (num1 > num2) {
        min = num2;
        max = num1;
    } else {
        min = num1;
        max = num2;
    }

    for (let i = min; i <= max; i++) {
        result += i;
    }

    return result;
};


// Solved
// Do not edit below this line
module.exports = sumAll;
