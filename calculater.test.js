// calculator.test.js
const calculator = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});
