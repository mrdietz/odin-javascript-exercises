const reverseString = function(string) {
    let splitStr = string.split('');
    let revStr = splitStr.reverse();
    let joinStr = revStr.join('');
    return joinStr;
};

// Do not edit below this line
module.exports = reverseString;
