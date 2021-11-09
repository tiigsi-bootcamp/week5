// Working with DOM!

// Event Handler.
function handleClick(e) {
	console.log('e is: ', e);
	
	const button = document.querySelector('button');
	button.classList.add('text-black');

	// Functions are values.
	button.onclick = handleClickAgain;
}

function handleClickAgain() {
	alert('Handler 2!');
}

// Argument vs Parameter?!

function sayHello(event) {
	console.log('Hello friends!', event);
}

const divs = document.querySelectorAll('.btn');
for (const div of divs) {
	div.addEventListener('click', sayHello);
}

const newDiv = document.createElement('div');

newDiv.textContent = 'New DIV!';
newDiv.classList.add('bg-red-500', 'p-8');

// Attach a click handler
newDiv.addEventListener('click', function(event) {
	const newH1 = document.createElement('h1');
	newH1.textContent = 'I am a new guy!';
	newH1.classList.add('text-4xl');

	// document.body.appendChild(newH1);
	// event.target.appendChild(newH1);

	// We already know the element, which is the newDiv!
	newDiv.appendChild(newH1);
});

document.body.appendChild(newDiv);

const colors = ['bg-red-900', 'bg-green-500', 'bg-purple-700'];

let currentColorIndex = 0;
if (currentColorIndex >= colors.length) {
	currentColorIndex = 0;
}

const color = colors[currentColorIndex];
