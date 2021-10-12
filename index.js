/**
 * Robot assignment
 * run by writing `node index.js` in your console
 */
const inquirer = require("inquirer");
const questions = require("./config/config");
const movements = require("./modules/movements");

console.log("Hi and welcome!");
console.log("In order to get this robot moving, you need to complete the input fields with grid fields, starting position and commands.")

inquirer.prompt(questions).then((answers) => {

	const startingPosition = answers.start.split("");
	const grid = answers.grid.split("");
	const horizontalBounds = parseInt(grid[0]);
	const verticalBounds = parseInt(grid[1]);

	const initRobot = new Robot(parseInt(startingPosition[0]), parseInt(startingPosition[1]), startingPosition[2].toUpperCase(), horizontalBounds, verticalBounds);

	console.log(movements.moveRobot(answers, initRobot));
	console.log("The robot's current position is " + initRobot.x + " " + initRobot.y + " " + initRobot.dictionary[initRobot.currentDir]);
});

/**
 * Robot class for handling inputs 
 */
class Robot {
	constructor(x, y, currentDir, horizontalBounds, verticalBounds) {
		this.dictionary = ["N", "E", "S", "W"];
		this.x = x;
		this.y = y;
		this.currentDir = this.dictionary.indexOf(currentDir);
		this.horizontalBounds = horizontalBounds;
		this.verticalBounds = verticalBounds;
	}
	left() {
		if (this.currentDir !== 0) {
			this.currentDir = this.currentDir - 1;
		} else {
			this.currentDir = 3;
		}
	}
	right() {
		if (this.currentDir !== 3) {
			this.currentDir = this.currentDir + 1;
		} else {
			this.currentDir = 0;
		}
	}
	forward() {
		const prevX = this.x;
		const prevY = this.y;

		if (this.currentDir === 1 || this.currentDir === 3) {
			this.x += (this.currentDir === 1 ? 1 : -1);
		} else {
			this.y += (this.currentDir === 0 ? 1 : -1);
		}

		//Is the robot outside the grid after the last step.
		if ((this.x < 0 || this.x > this.horizontalBounds) || (this.y < 0 || this.y > this.verticalBounds)) {
			console.log("\nThe robot has unfortunately reached the boundaries of the map");
			this.x = prevX;
			this.y = prevY;
			return true;
		}
	}

}
