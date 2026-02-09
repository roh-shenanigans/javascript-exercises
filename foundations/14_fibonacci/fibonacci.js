/*
const fibonacci = function (num) {
    let count = parseInt(num);

    if (count < 0) {
        return "OOPS";
    }

    if (count == 0) {
        return 0;
    }

    let a = 1;
    let b = 1;
    let c;
    let result = [1, 1];

    for (let i = 0; i < count - 2; i++) {
        c = a + b;
        result.push(c);
        a = b;
        b = c;
    }

    return result.at(-1);
};
*/

const fibonacci = function (num) {
    let count = parseInt(num);

    if (count < 0) {
        return "OOPS";
    }

    if (count == 0) {
        return 0;
    }

    let fibNums = [1, 1]

    for (let i = 0; i < num - 2; i++) {
        // console.log(fibNums.at(-1));
        // console.log(fibNums.at(-2));
        let fib = fibNums.at(-1) + fibNums.at(-2);
        fibNums.push(fib);
        console.log(fibNums);
    }

    return fibNums.at(-1);
}

console.log(fibonacci("4"));
// Do not edit below this line
module.exports = fibonacci;
