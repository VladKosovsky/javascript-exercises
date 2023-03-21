const convertToCelsius = function (temperatureF) {
  return Math.round((temperatureF - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (temperatureC) {
  return Math.round(((temperatureC * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
