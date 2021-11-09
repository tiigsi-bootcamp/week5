// // Factorial of a number.
// // 5 => 120

// // 5 * 4 * 3 * 2 * 1
// // n * (n - 1)

// // 6 * 5 * 4 * 3 * 2 * 1

// // 5i = 5 * (5 - 1)!
// // 5i = 5 * 4i
// // 5i = 5 * (4 * (4 - 1)!)
// // 5i = 5 * 4 * 3i
// // 5i = 5 * 4 * 3 * (2 - 1)!
// // 5i = 5 * 4 * 3 * 2

function getFactorial(n) {
	let result = 1;
	while (n > 1) {
		result *= n;

		n -= 1;
	}

	return result;
}

// f(x)
// g(x)

let x = 5;
let factorial = getFactorial(x);

console.log(x + ' factorial is: ' + factorial);

// Recursive Functions.
// Function calling itself.

// 5i = 5 * 4 * 3 * 2
function getFactorialRecursively(n) {
	let result = n;
	if (n > 1) {
		result = result * getFactorialRecursively(n - 1);
	}

	return result;
}

let number = 5;
let factorialResult = getFactorialRecursively(number);

console.log(number + '! = ' + factorialResult);