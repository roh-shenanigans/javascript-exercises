const reverseString = function(string) {
    let result = "";

    // for (let i = string.length - 1; i >= 0; i--) {
    //     result += string[i];
    // }

    // Better solution
    return string.split("").reverse().join("");
    // return result;
};

// solved
// Do not edit below this line
module.exports = reverseString;
