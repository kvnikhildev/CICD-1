jest.mock('readline-sync', () => ({
    question: jest.fn().mockReturnValue('5'), // You can customize the returned value here
  }));
  
  const { calculate } = require('./calculator'); // Adjust this to your actual calculator module
  
  test('calculator performs addition correctly', () => {
    const result = calculate(); // Call the function that uses readline-sync
    expect(result).toBe(10); // Assuming the calculation is num1 + num2, where num1 = 5, num2 = 5
  });