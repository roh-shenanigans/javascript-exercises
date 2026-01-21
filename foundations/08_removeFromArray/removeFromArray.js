const removeFromArray = function (...args) {
    let arr = args[0];
    let items = args.slice(0, args.length)

    let isKept = function (item) {
        return !items.includes(item);
    }

    return arr.filter(isKept);
}

// console.log(removeFromArray([1, 2, 3, 4], 3))

// Solved
// Do not edit below this line
module.exports = removeFromArray;
