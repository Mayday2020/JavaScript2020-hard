
let num = 266219;
num = num.toString().split('');

let numBer = 1;
for (let i = 0; i <= num.length - 1; i++){
    numBer = numBer * num[i];
}
numBer = numBer ** 3;

console.log(numBer.toString().slice(0, 2));