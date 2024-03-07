const sumAll = function(startNum, endNum) {
    let finalSum = 0;
    let temp = 0;

    if (startNum < 0 || endNum < 0) {
        return 'ERROR';
    }

    if(typeof startNum !== "number" || typeof endNum !== "number"){
        return 'ERROR';
    }

    if(startNum > endNum) {
        temp = startNum;
        startNum = endNum;
        endNum = temp;
        
    }
    for(let i=startNum; i<=endNum; i++){
        finalSum+=i;
    }
    return finalSum;
    
};

// Do not edit below this line
module.exports = sumAll;
