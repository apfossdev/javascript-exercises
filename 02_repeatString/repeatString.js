const repeatString = function(repeatedString, numOfIterations) {
    let returnedString = '';
    if (numOfIterations < 0) {
        return "ERROR";
    }
    for(let i=0; i<numOfIterations; i++){
        returnedString+=repeatedString;
    }
    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
