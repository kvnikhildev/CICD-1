// calculator.js
const readlineSync = require('readline-sync');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Input from user
const num1 = parseFloat(readlineSync.question('Enter first number: '));
const num2 = parseFloat(readlineSync.question('Enter second number: '));
const operation = readlineSync.question('Choose operation (add/subtract): ');

if (operation === 'add') {
    console.log(`Result: ${add(num1, num2)}`);
} else if (operation === 'subtract') {
    console.log(`Result: ${subtract(num1, num2)}`);
} else {
    console.log('Invalid operation!');
}

// Export functions for testing
module.exports = { add, subtract };
