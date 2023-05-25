// const removeFromArray = function(arr, ...theArgs) {
//     return arr.filter(val=>!theArgs.includes(val));
// };

// That's some really advanced stuff

const removeFromArray= function(array, ...args) {
    const newArray = [];
    array.forEach((item) =>{
        if(!args.includes(item)){
            newArray.push(item);
        }
    })
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
