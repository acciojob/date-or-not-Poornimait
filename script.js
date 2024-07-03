var isDate = function (input) {
  //   write your code her
	if (input === null || input === undefined) {
    return false;
  }
  
  // Check if input is a Date object and is not invalid
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }
  
  // Check if input is a string or a number that can be parsed into a valid date
  if (typeof input === 'string' || typeof input === 'number') {
    const date = new Date(input);
    return !isNaN(date.getTime());
  }
  
  return false;
};


// Do not change the code below.
const input = //prompt("Enter Date.");
alert(isDate(input));
