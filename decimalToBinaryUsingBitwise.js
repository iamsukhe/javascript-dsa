function decimalToBinaryUsingBitwise(n) {
    let sum = 0;
    let i = 0
    while(n>0){
        let rem = n&1;
        sum = ((rem * Math.pow(10, i)) + sum)
        n = n >> 1
        i = ++i
    } 
    return sum
}