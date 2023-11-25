var isDate = function (input) {
  //   write your code her
	if (input instanceof Date && !isNaN(input)) {
        return true;
    }

    // Check if the input is a string that can be parsed into a valid date
    if (typeof input === 'string') {
        const parsedDate = new Date(input);
        return !isNaN(parsedDate);
    }

    // Return false for other types of input
    return false;
}
;

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
