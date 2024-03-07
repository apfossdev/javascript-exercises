const removeFromArray = function(inputArray, ...removableNumbersObject) {
    return inputArray.filter(item => !removableNumbersObject.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
