const convertToCelsius = function (temp) {
    result = (5 / 9) * (temp - 32);
    return Number(result.toFixed(1));
};

const convertToFahrenheit = function (temp) {
    result = (9 * temp / 5) + 32;
    return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
