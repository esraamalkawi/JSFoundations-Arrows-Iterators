/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
    array.forEach(arra => console.log(arra));
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function (temperatures) {
    const temperatures1 = temperatures.map(temperature => (temperature-32)* (5/9));
    return temperatures1
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {
    const exceed = temperatures.filter(temperature => temperature > threshhold);
    return exceed;
}
/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = (temperatures, threshhold) => logger(toCelsius(hottestDays(temperatures, threshhold)));
    //temperatures.forEach(temperature =>  c = (temperature -32)* (5/9))
    //const exceed = temperatures.filter(temperature => c > ((threshhold -32)*(5/9)))
    //return exceed

// const logHottestDays = function (temperatures, threshhold) {
//   temperatures
//     .filter((t) => t > threshhold)
//     .map((t) => (t - 32) * (5 / 9))
//     .forEach((element) => console.log(element));
// };

/* Uncomment the following lines to test your code... */

// logger([1, 2, 3, 4, 5, 6, 7]);
// console.log(toCelsius([212, 122])); // should be: [100, 50];
// console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
// logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
