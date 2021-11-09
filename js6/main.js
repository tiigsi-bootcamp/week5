// Working with DOM!

// CSS Selectors.
const heading1 = document.querySelector('.heading-1');
heading1.textContent = 'First match!';

const elements = document.querySelectorAll('.heading-1');

let counter = 0;
while (counter < elements.length) {
	const h1 = elements[counter];
	h1.classList.add('text-green-500', 'text-2xl', 'bg-black');

	counter += 1;
}

for (const element of elements) {
	element.classList.add('text-blue-500', 'text-5xl', 'bg-black');
}
