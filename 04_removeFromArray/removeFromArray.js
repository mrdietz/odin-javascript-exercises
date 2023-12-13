const removeFromArray = function(array, ...items) {
    for (let i = 0; i <= items.length; i++) {
       if (array.includes(items[i])) {
        array.splice(array.indexOf(items[i]), 1)
       };
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
