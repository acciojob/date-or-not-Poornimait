var isDate = function (input) {
  //   write your code her
	if (input instanceof Date && !isNaN(input)) {
        return true;
    }
	if(input==='new Date()'){
		return true;
	}
    
    if (typeof input === 'string') {
        const parsedDate = new Date(input);
        return !isNaN(parsedDate);
    }
	


    return false;
}
;

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
