/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
	'🍕 pizza': 3,
	'🌮 tacos': 10,
	'🥗 salads': 7,
	'🍝 pasta': 5,
};

function findTheWinner(obj) {
	const winner = {};
	Object.entries(obj).forEach((entry) => {
		if (!winner.name) {
			winner.name = entry[0];
			winner.totalVotes = entry[1];
		} else {
			if (entry[1] > winner.totalVotes) {
				winner.totalVotes = entry[1];
			}
		}
	});
	return `The winner is ${winner.name} with ${winner.totalVotes} votes!`;
}

console.log(findTheWinner(gameNightFood));
