/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalize(str) {
	if (str.split(' ').length === 1) {
		return str
			.split('')
			.map((char, i) => {
				if (i === 0) {
					return char.toUpperCase();
				} else return char;
			})
			.join('');
	}

	const splitWords = str.split(' ');

	const cap = splitWords.map((word) => {
		return word
			.split('')
			.map((char, i) => {
				if (i === 0) {
					return char.toUpperCase();
				} else return char;
			})
			.join('');
	});

	return cap.join(' ');
}

console.log(capitalize('scrimba'));
console.log(capitalize('everything, everywhere, all at once'));
