function decimalToBinary(n) {
    let sum = 0;
    let i = 0
    while(n>0){
        let rem = n%2;
        sum = ((rem * Math.pow(10, i)) + sum)
        n = Math.floor(n/2)
        i = ++i
    } 
    return sum
}
