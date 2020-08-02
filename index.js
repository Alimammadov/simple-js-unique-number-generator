
const alphabet = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [1,2,3,4,5,6,7,8,9,0];


let uid = '';



//If you want to change UID length you can add here. This example has 6 symbol
let a = alphabet[Math.floor(Math.random() * alphabet.length)];
let b = numbers[Math.floor(Math.random() * numbers.length)];
let c = alphabet[Math.floor(Math.random() * alphabet.length)];
let d = alphabet[Math.floor(Math.random() * alphabet.length)];
let f= numbers[Math.floor(Math.random() * numbers.length)];
let g = alphabet[Math.floor(Math.random() * alphabet.length)];


console.log(a+b+c+d+f+g)

uid = a+b+c+d+f+g;

document.getElementById("orderId").innerHTML = "Order number: " + uid;

