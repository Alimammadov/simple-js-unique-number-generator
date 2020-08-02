
var alphabet = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
var numbers = [1,2,3,4,5,6,7,8,9,0],


var uid = '';




var a = alphabet[Math.floor(Math.random() * alphabet.length)];
var b = numbers[Math.floor(Math.random() * numbers.length)];
var c = alphabet[Math.floor(Math.random() * alphabet.length)];
var d = alphabet[Math.floor(Math.random() * alphabet.length)];
var f= numbers[Math.floor(Math.random() * numbers.length)];
var g = alphabet[Math.floor(Math.random() * alphabet.length)];


console.log(a+b+c+d+f+g)

uid = a+b+c+d+f+g;

document.getElementById("demo").innerHTML = "Order number: " + uid;

