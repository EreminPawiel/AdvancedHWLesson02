let num = 266219;
let digits = String(num);
let array = 1;
let total;

for (let i = 0; i < digits.length; i++) {
    array *= digits[i]
}
console.log(array)

total = array ** 3;
console.log(String(total).slice(0, 2))