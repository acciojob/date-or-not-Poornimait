var isDate = function (input) {
  //   write your code her
	if (input === null || input === undefined) {
    return false;
  }
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }
  if (typeof input === 'string' || typeof input === 'number') {
    const date = new Date(input);
    return !isNaN(date.getTime());
  }
  return false;
	
}
;

// Do not change the code below.
const input = //prompt("Enter Date.");
alert(isDate(input));
