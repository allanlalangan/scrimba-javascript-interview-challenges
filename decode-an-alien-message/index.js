/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ':htraE no od ot ffutS';
const messages = [
	'maerc eci yrT',
	'rewoT leffiE tisiV',
	'noom eht ot snamuh etacoleR',
	'egrahc ni stac tuP',
];

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

function reverseString(str) {
	return str.split('').reverse().join('');
}

function manualReverse(str) {
	const split = str.split('');
	const reversed = [];

	for (let i = split.length - 1; i >= 0; i--) {
		const element = split[i];
		reversed.push(element);
	}
	return reversed.join('');
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

function reverseStringsInArray(arr) {
	const reversed = arr.map((str) => {
		return str.split('').reverse().join('');
	});
	return reversed;
}

console.log(manualReverse(title));
// console.log(reverseString(title));
console.log(reverseStringsInArray(messages));
