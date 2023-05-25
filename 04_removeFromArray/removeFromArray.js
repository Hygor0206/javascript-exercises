const removeFromArray = function(numbers, param1, param2) {
    for(let i=0;i<numbers.length;i++) {
        if(param2===numbers[i]) {
            numbers.splice(i, 1);
        }
    }
    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
