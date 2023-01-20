/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
	smile: '😊',
	angry: '😠',
	party: '🎉',
	heart: '💜',
	cat: '🐱',
	dog: '🐕',
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojify(str) {
	const split = str.split(' ');
	const emojifiedString = split.map((word) => {
		if (word.startsWith(':') && word.endsWith(':')) {
			const e = word.slice(1, word.length - 1);
			console.log(e);
			if (emojis[e]) {
				return emojis[e];
			} else return e;
		} else {
			return word;
		}
	});

	return emojifiedString.join(' ');
}

console.log(emojify('I :heart: my :cat:'));
