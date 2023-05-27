const palindromes = function (str) {
    let re=/[^A-Za-z0-9]/g; // Its the same as "let re=/[\W_]/g;"
    let lowReStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowReStr.split('').reverse().join('');
    return reverseStr===lowReStr;
};

// Do not edit below this line
module.exports = palindromes;
