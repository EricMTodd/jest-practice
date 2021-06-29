import app from './app';

const tests = (() => {
	test('Adds 1 + 2 to equal 3.', () => {
		expect(app.sum(1, 2)).toBe(3);
	});

	test('Capitalize the first letter of a string.', () => {
		expect(app.capitalizeFirstLetter('hello world!')).toBe('Hello world!');
	});

	test('Reverse a string.', () => {
		expect(app.reverseString('Hello world!')).toBe('!dlrow olleH');
	});

	test('Add two numbers.', () => {
		expect(app.calculator.add(1, 2)).toBe(3);
	});

	test('Subtract two numbers.', () => {
		expect(app.calculator.subtract(2, 1)).toBe(1);
	});

	test('Multiply two numbers.', () => {
		expect(app.calculator.multiply(2, 3)).toBe(6);
	});

	test('Divide two numbers.', () => {
		expect(app.calculator.divide(6, 3)).toBe(2);
	});
})();
