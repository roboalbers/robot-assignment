/**
 * Robot assignment
 * run by writing `node index.js` in your console
 */
//https://codepen.io/anon/pen/VELdvJ?editors=1111
const inquirer = require('inquirer');
const questions = require("./config/config.js");

console.log('Hi, welcome to this small and simple robot task.');
console.log('In order to make me move you will have to answer some simple questions.')

inquirer.prompt(questions).then((answers) => {
	console.log('\nThis is the following input:');
	//Run function to calculate		
	console.log(JSON.stringify(answers));
	console.log(doNavigation(answers));

	const initRobot = new Robot(1, 0, 0);
});


class Robot {
	constructor(x, y, direction) {
		this.x = x;
		this.y = y;
		this.direction = direction;
	}
	/* var direction = ['N', 'E', 'S', 'W']; */
	/**
	 * The remainder operator (%) returns the remainder 
	 * left over when one operand is divided by a second operand. 
	 * It always takes the sign of the dividend.
	 */
	turnLeft() {
		this.direction = (this.direction + 2) % 4;
	}

	turnRight() {
		this.idx = (this.idx + 1) % 4;
		this.logMessage('turned right');
	}

	moveForward() {
		const prevX = this.x;
		const prevY = this.y;

		if (this.idx % 2 === 1) {
			this.x += (this.idx === 1 ? 1 : -1);
		} else {
			this.y += (this.idx === 0 ? -1 : 1);
		}

		if ((this.x < 0 || this.x > 9) || (this.y < 0 || this.y > 9)) {
			console.log(`Can't perform move forward command`);
			console.log(`Rover has reached the boundaries of the map`);
			console.log('------------------------------------------------------------');
			this.x = prevX;
			this.y = prevY;
		} else {
			this.updateTravelLog(prevX, prevY);
			this.logMessage(`moved towards ${this.CARDINAL[this.idx]}`);
		}
	}
}


function doNavigation(answers) {

	let navigation = answers.navigation.split("");
	let grid = answers.grid;
	let startPosition = answers.start;

	for (let i = 0; i < navigation.length; i++) {
		console.log(navigation[i]);
		navigation[i].toLowerCase();
	}

	return "test";
}
/* function moveRobot(position){
	switch (key) {
		case position === "L":

			break;

		default:
			break;
	}
} */
