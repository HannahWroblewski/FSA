// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "1,2,3,4,5"
  );
  
  // Split the string of numbers into an array of strings.
  const stringArray = userInputString.split(",");
  
  // Convert the array of strings into an array of numbers.
  const numbers = [];
  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
  }
  
  // Peform some calculations on the numbers.
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
  
  // === EDIT THE CODE BELOW ===
  // Complete the functions below to make the program work!
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the length of the array
   */
  function getLength(numbers) {
    // create a variable count that starts at 0
    let lengthOfArray = 0;
    // loop through the array
    for(let i = 0; i < numbers.length; i++){
      // with each iteration, add to count
      lengthOfArray += 1;
    }
    
    return lengthOfArray;
    // return count
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the sum of the numbers
   */
  function getSum(numbers) {
    // create a varibale sum and set it at 0
    let sum = 0;
    // loop through the numbers array
    for(let i = 0; i < numbers.length; i++){
         // add number[i] to sum
      sum += numbers[i];
    }

      // return sum
      return sum;
    
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the mean of the numbers
   */
  function getMean(numbers) {
  
    // create variable to store the sum of the numbers
    let sum = 0;
    // iterate through array and add each idx to the sum
    for(let i = 0; i < numbers.length; i++){
      sum += numbers[i];
    }
    // divide the sum by the number of elements
    let mean = sum / numbers.length;
    // return the mean
    return mean;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the smallest of the numbers
   */
  function getMin(numbers) {
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the largest of the numbers
   */
  function getMax(numbers) {
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the range of the numbers (max - min)
   */
  function getRange(numbers) {
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the even numbers in the array
   */
  function getEvens(numbers) {
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the odd numbers in the array
   */
  function getOdds(numbers) {
    // TODO
  }
  