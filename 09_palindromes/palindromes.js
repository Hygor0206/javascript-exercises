const palindromes = function (str) {
    let re=/[^A-Za-z0-9]/g; // Its the same as "let re=/[\W_]/g;"
    let lowReStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowReStr.split('').reverse().join('');
    return reverseStr===lowReStr;
};

// Here's a more optimized version of the code above.
// const palindromes = function (str) {
//     let processedString = str.toLowerCase().replace(/[\W_]/g, '');
//     return processedString.split('').reverse().join('') === processedString;
// };

// Do not edit below this line
module.exports = palindromes;
