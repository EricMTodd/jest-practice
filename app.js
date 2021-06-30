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
		let shift = 0;
		let messageIndexArray = [];
		let shiftedArray = [];
		let encryption = '';

		const findShift = (() => {
			for (let i = 0; i < alphanumerics.length; i++) {
				if (alphanumerics[i] === key) {
					shift = i;
				}
			}
		})();

		const createMessageIndexArray = (() => {
			for (let i = 0; i < msg.length; i++) {
				for (let k = 0; k < alphanumerics.length; k++) {
					if (msg[i] === alphanumerics[k]) {
						messageIndexArray.push(k);
					}
				}
			}
		})();

		const applyShift = (() => {
			for (let i = 0; i < messageIndexArray.length; i++) {
				shiftedArray.push(messageIndexArray[i] + shift);
			}
		})();

		const createEncryption = (() => {
			for (let i = 0; i < shiftedArray.length; i++) {
				for (let k = 0; k < alphanumerics.length; k++) {
					if (shiftedArray[i] === k) {
						encryption += alphanumerics[k];
					}
				}
			}
		})();
		return encryption;
	};

	const evaluateArray = (array) => {
		let values = {
			average: 0,
			min: array[0],
			max: array[0],
			length: array.length,
		};

		const findAverage = (() => {
			let sum = 0;
			for (let i = 0; i < array.length; i++) {
				sum += array[i];
				values.average = sum / values.length;
			}
		})();

		const findMin = (() => {
			for (let i = 0; i < array.length; i++) {
				if (array[i] < values.min) {
					values.min = array[i];
				}
			}
		})();

		const findMax = (() => {
			for (let i = 0; i < array.length; i++) {
				if (array[i] > values.max) {
					values.max = array[i];
				}
			}
		})();

		console.log(`values: ${JSON.stringify(values)}`);
		return values;
	};

	return {
		sayHello,
		sum,
		capitalizeFirstLetter,
		reverseString,
		calculator,
		encrypt,
		evaluateArray,
	};
})();

export default functions;
