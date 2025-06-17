var plusOne = function (digits) {
	let num = BigInt(digits.join("")) + BigInt(1);
	let numerostring = String(num);
	return Array.from(numerostring, Number);
};

console.log(plusOne([1, 2, 3]));
