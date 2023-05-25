// const removeFromArray = function(array, ...args) {
//     return array.filter(val=>!args.includes(val));
// };

// That's some really advanced stuff

const removeFromArray= function(array, ...args) {
    const newArray = [];
    array.forEach(function(item){
        if(!args.includes(item)){
            newArray.push(item);
        }
    })
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
