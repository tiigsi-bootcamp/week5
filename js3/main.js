// Function-oriented language.

function sayHello() {
	// Function body => Shaqo.
	console.log('Hello, Functions!');
}

sayHello();

function add() {
	// Local data.
	let x = 100, y = 10;
	return x + y;
}

let result = add();
result = add();
result = add();
result = add();
console.log('x + y is ' + result);

function subtract(a, b) {
	return a - b;
}

let sub = subtract(50, 100);
console.log('a - b = ' + sub);

function multiply(a, b) {
	return a * b;
}

let c = 30;
let j = 50;
let z = multiply(c, j);
console.log('z = ' + z);

let d = multiply(c, j);
console.log('d = ' + d);

let k = multiply(c, j);
console.log('k = ' + k);

let s = multiply(c, j);
console.log('s = ' + s);

// Global scope.
let anything = 'This is a global thing, like Covid!'

function sayHi() { // block
	// here...

	// Local scope.
	person = 'Ahmed Hirsi';
	console.log('Hi, ' + person);

	var person; // Hoisting.
}

var any = 'something';

// Immediately-invoked function Expression.
(function(){
	var thing = 'thing';
})();

var something = 'Something';
console.log('Thing is ' + something);

var something = 'Other thing'; // Ignored

console.log('Thing is ' + something);

sayHi();


sayFizBaz(15);
