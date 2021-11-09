// Arrays.

let names = [
	'Qudhac',
	'Maraa'
];

// Loops!
// while
// do-while
// for

let index = 0;
while (index < names.length) {
	const item = names[index];
	console.log('Item is: ', item);

	index += 1;
}

for (let position = 0; position < names.length; position += 1) {
	const item = names[position];
	console.log('For Item is: ', item);
}

// Fibonacci of a number.
// 5 => 120

// 5 * 4 * 3 * 2 * 1
// n * (n - 1)

// 6 * 5 * 4 * 3 * 2 * 1

fib(5)