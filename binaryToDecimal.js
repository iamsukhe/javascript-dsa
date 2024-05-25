// Here n sould be binary no
function binaryToDecimal(n) {
    let decimal = 0;
    let i = 0
    while(n>0){
        let rem = n%10;
        decimal = decimal + (Math.pow(2,i) * rem) 
        n = Math.floor(n/10);
        i = ++i
    } 
    return decimal
}