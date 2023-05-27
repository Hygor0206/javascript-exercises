const fibonacci = function(position) {
    if((position<0)) return "OOPS";
    if (position === 0) return 0;

    let fibN=1, op=0;
    for (let i=1; i < +position; i++) {
        const lastN = fibN;
        fibN+=op;
        op=lastN;
    }
    return fibN;
};

// Do not edit below this line
module.exports = fibonacci;
