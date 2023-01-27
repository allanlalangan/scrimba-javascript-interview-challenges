const podcasts = require('./data');

/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/
const awards = ['🏆', '⭐', '💎', '🥇', '👑'];

function getHosts(podcasts) {
	return podcasts.map((podcast) => podcast.hosts).flat();
}

// the reduce method is not limited to numbers
// the accumulator can be initialized as other value types
function getHostsReduce(podcasts) {
	return podcasts.reduce((acc, podcast) => [...acc, ...podcast.hosts], []);
}

function assignAwards(hosts) {
	return hosts.map(
		(author) =>
			`${awards[Math.floor(Math.random() * (awards.length - 0) + 0)]} ${author}`
	);
}

// const hosts = getHosts(podcasts);
// console.log(getHosts(podcasts));
console.log(assignAwards(getHosts(podcasts)));
console.log('Reduce', assignAwards(getHostsReduce(podcasts)));
