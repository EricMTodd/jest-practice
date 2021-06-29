const functions = (() => {
	const sayHello = () => {
		console.log('Hello world!');
	};

	const sum = (a, b) => {
		return a + b;
	};

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const reverseString = (string) => {
		return string.split('').reverse().join('');
	};

	const calculator = {
		add(a, b) {
			return a + b;
		},

		subtract(a, b) {
			return a - b;
		},

		multiply(a, b) {
			return a * b;
		},

		divide(a, b) {
			return a / b;
		},
	};

	const encrypt = (key, msg) => {
		const alphanumerics = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1!2@3#4$5%6^7&8*9(0)-_=+[{]}\|;:'",<.>/? `;
		let shift = [];
		for (let i = 0; i < key.length; i++) {
			console.log(key[i]);
		}
	};

	encrypt('kronos', 'Meet me on the dark side of the moon.');

	return {
		sayHello,
		sum,
		capitalizeFirstLetter,
		reverseString,
		calculator,
		encrypt,
	};
})();

// export default functions;
