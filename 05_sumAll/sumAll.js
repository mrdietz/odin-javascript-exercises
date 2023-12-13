const sumAll = function(a, b) {
    let endSum = 0;
    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number" ) {
        return "ERROR";
    } else if (a > b) {
        while (a >= b) {
            endSum += a;
            a--;
            }
    } else {
        while (b >= a) {
            endSum += b;
                b--;
            }
    } return endSum;
}; 

console.log(sumAll(1, 1));

// Do not edit below this line
module.exports = sumAll;
