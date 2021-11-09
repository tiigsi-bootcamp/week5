// Functional language.
// every function is a value.

// => Fat arrow.
let person = {
	phone: '345678',
	height: '180 cm',
	name: 'Yousuf Abdillaahi',
	friends: [ 'Emad', 'Nasir', 'Xirsi' ],
	walk: () => console.log('I walk every day!!!'),
	talk: function() {
		console.log('I talk to everyone who is listening!!');
	}
};

person.walk();
person.talk();

let duck = {
	name: 'Tukaale',
	sound: 'Waaq-waaq waaq-waaq'
};

let students = [
	{ studentName: 'Ahmed Jama', grade: 96 }, // One student.
	{ studentName: 'Abdi Abdillahi', grade: 80 },
	{ studentName: 'Sarah Ahmed', grade: 99 },
	{ studentName: 'Maria', grade: 98 },
	{ studentName: 'Aisha Jama', grade: 89 }
];

const ahmed = students[0];
console.log('Ahmed is: ', ahmed);

let counter = 0;
while (counter < students.length) {
	let student = students[counter];
	console.log(student.studentName + ' has grade: ' + student.grade);

	counter += 1;
}