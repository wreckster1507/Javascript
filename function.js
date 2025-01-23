// write a function

// function printNumbers(){
//     for (let i = 1;i<=3;i++){
//         document.write(i, "<br>");
//         for (let j = 1;j<=4;j++){
//             document.write(j, " ");
//         }
//         document.write("<br>");
//     }
// }

// printNumbers();

// function g(name) {
//     return `Hello ${name}`;
// }

// console.log(g("World")); // Hello World


function add(a, b) {
    return a + b;
}

let n1 = parseInt(prompt("Enter first number: "));
let n2 = parseInt(prompt("Enter second number: "));

console.log(add(n1, n2));



// prime number
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let number = parseInt(prompt("Enter a number: "));
if (isPrime(number)) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is not a prime number`);
}







