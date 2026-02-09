const palindromes = function (string) {
    let word = string.toLowerCase().split("").filter(isAlphaNumeric).join("");
    let reversed = word.split("").reverse().join("");
    // console.log(word);
    // console.log(reversed);
    return (word === reversed);
};

function isAlphaNumeric(str) {
    const regex = /^[a-z0-9]+$/i;
    return regex.test(str);
}

console.log(palindromes('A car, a man, a maraca.'));
// palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
