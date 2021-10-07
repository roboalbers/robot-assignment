/**
 * Robot assignment
 * run by writing `node index.js` in your console
 */
//https://codepen.io/anon/pen/VELdvJ?editors=1111
//https://gist.github.com/codesections/10466892dd9e232500a7450929c16fac
const inquirer = require('inquirer');
const questions = require("./config/config.js");

console.log('Hi, welcome to this small and simple robot task.');
console.log('In order to make me move you will have to answer some simple questions.')

inquirer.prompt(questions).then((answers) => {
	console.log('\nThis is your input values:');
	//Run function to calculate		
	//console.log(JSON.stringify(answers));

	let startingPosition = answers.start.split("");
	let grid = answers.grid.split("");
	let horizontalBounds = parseInt(grid[0]);
	let verticalBounds = parseInt(grid[1]);
	const initRobot = new Robot(parseInt(startingPosition[0]), parseInt(startingPosition[1]), startingPosition[2], horizontalBounds, verticalBounds);
	console.log(moveRobot(answers, initRobot,));
	console.log('Robots current position is ' + initRobot.x + initRobot.y + initRobot.direction);
});


class Robot {
	constructor(x, y, currentPos, horizontalBounds, verticalBounds) {
		this.dictionary = ['N', 'W', 'S', 'E'];
		this.x = x;
		this.y = y;
		this.currentPos = this.dictionary.indexOf(currentPos);
		this.direction = this.dictionary[this.currentPos];
		this.horizontalBounds = horizontalBounds;
		this.verticalBounds = verticalBounds;
	}
	rotationLeft() {
		/* console.log('CurrentPos ' + this.currentPos);
		console.log('While rotating left currentpos will be ' + (this.currentPos + 3) % 4 + '\n') */
		this.currentPos = (this.currentPos + 3) % 4;
		console.log('Rotate left ' + this.currentPos);
		console.log('Direction ' + this.direction);
	}
	rotationRight() {
		/* 	console.log('CurrentPos ' + this.currentPos);
			console.log('\nWhile rotating right currentpos will be ' + (this.currentPos + 1) % 4 + '\n') */
		this.currentPos = (this.currentPos + 1) % 4;
		console.log('Rotate right ' + this.currentPos);
		console.log('Direction ' + this.direction);
	}
	movingForward() {
		const prevX = this.x;
		const prevY = this.y;
		if (this.currentPos % 2 === 1) {
			this.x += (this.currentPos === 1 ? 1 : -1);
		} else {
			this.y += (this.currentPos === 0 ? -1 : 1);
		}

		if ((this.x < 1 || this.x > this.horizontalBounds) || (this.y < 1 || this.y > this.verticalBounds)) {
			console.log('\nRobot has reached the boundaries of the map');
			this.x = prevX;
			this.y = prevY;
			return { x: this.x, y: this.y, currentPos: this.currentPos, direction: this.direction };
		}
	}

}

function moveRobot(answers, initRobot) {

	let navigation = answers.navigation.toLowerCase().split("");

	let forward = 0,
		left = 0,
		right = 0;

	let movement = "";

	for (let i = 0; i < navigation.length; i++) {
		if (navigation[i] === 'f') {
			forward++;
			let noMoreMoves = initRobot.movingForward()
			if (noMoreMoves) {
				//console.log("Breaking out: movement went to be: " + forward + " steps forward, " + left + " steps left, " + right + " steps right.")
				console.log(JSON.stringify(noMoreMoves));
				break;
			}
		}
		else if (navigation[i] === 'l') {
			left++;
			initRobot.rotationLeft();
		}
		else if (navigation[i] === 'r') {
			right++;
			initRobot.rotationRight();
		}
	}
	movement += "The robot moved a total of " + forward + " steps forward, " + left + " steps left, " + right + " steps right."

	return movement;
}
