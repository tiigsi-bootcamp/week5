// Working with DOM!

// Event Handler.
function handleClick() {
	const button = document.querySelector('button');
	button.classList.add('text-black');

	// Functions are values.
	button.onclick = handleClickAgain;
}

function handleClickAgain() {
	alert('Handler 2!');
}

function sayHello() {
	console.log('Hello friends!');
}

function sayHi() {
	console.log('Hi friends!');
}

const div = document.querySelector('.btn');
div.addEventListener('click', sayHello);
div.addEventListener('click', sayHi);

// Universal
function add(a, b) {
	return a + b;
}

const add1 = function (a, b) {
	return a + b;
}

const add2 = (a, b) => {
	return a + b;
}

const add3 = (a, b) => a + b;

let result = add3(12, 30); // 42
console.log('Result is:', result);

// 0 .. 100

const fizbaz = 0


while (fizbaz < 100) {
	if (fizbaz % 15 === 0) {
		console.log('fizbazz')
	} else if (fizbaz % 5 === 0) {
		console.log('bazz')
	} else if (fizbaz % 3 === 0) {
		console.log('fiz')
	}
	fizbaz += 1
}