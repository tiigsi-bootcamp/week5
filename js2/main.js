// Conditionals => Control Flow.

let personName = 'Ali Ali';

if (personName === 'Ahmed Ali') {
	console.log('Hello, mr. ' + personName);
} else if (personName === 'Aisha Ali') {
	console.log('Hi mrs. ' + personName);
} else {
	console.log('Hello, stranger ' + personName + '!');
}

// === equality
// !== inequality
// >
// <
// >=
// <=

let day = 'Sabti';
if (day !== 'Axad') {
	console.log('Today is not Axad, it is ' + day);
} else {
	console.log('Today is Axad');
}

let x = 10;
if (x === 0) {
	console.log('x is 0');
} else if (x === 1) {
	console.log('x is one');
} else if (x === 2) {
	console.log('x is two');
} else {
	console.log('I do not know!');
}

let today = 'Jimce';
if (today === 'Khamiis' || today === 'Jimce') { // Compound condition
	console.log('Happy weekend!!!');
} else {
	console.log('Happy Learning!!!');
}

// Prime numbers: 3 7 11 13 17 19 23 29 33

// / 2 amma 3

let prime = 9;

// 1 !== 0 = true
// 0 !== 0 = false
// 1 + 0 = 1 = true;

// Short circuiting
if (prime % 2 !== 0 && prime % 3 !== 0) {
	console.log('Yayy, ' + prime + ' is a prime number');
}

// || iyo &&
// || +
// && *

// true = 1
// false = 0

// 0 + 1 = 1 = true
// 0 * 1 = 0 = false

// 5 given

let given = 30;
// / 3 = Fiz
// / 5 = Baz
// / 3  or / 5 = FizBaz
