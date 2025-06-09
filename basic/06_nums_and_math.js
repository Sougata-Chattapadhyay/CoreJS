const score = 400;
console.log(score);

const balence = new Number(100);

console.log(balence);

console.log(balence.toString().length);
console.log(balence.toFixed(1));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));



// ++++++++++++++ Maths +++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); // 4 (negetive to positive, vise versha not possible);
// console.log(Math.round(3.4)); //3
// console.log(Math.round(3.7)); //4
// console.log(Math.ceil(3.2)); //4( always top)
// console.log(Math.floor(3.9)); //3( always top)

console.log(Math.min(4,3,2,1,6)) // 1
console.log(Math.max(4,3,2,1,6)) // 6

console.log(Math.random());
console.log(Math.random() *10 +1);
