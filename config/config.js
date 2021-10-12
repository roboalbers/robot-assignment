module.exports = [
	{
		type: "input",
		name: "grid",
		message: "Enter the size of the room",
		default: "55",
		validate(value) {
			const matchValue = value.match(/^[0-9]{2}$/g);
			if (matchValue) {
				return true;
			}

			return "Please enter a valid set of numbers e.g 55";
		},
	},
	{
		type: "input",
		name: "start",
		message: "Enter the starting position together with which direction the robot should start.",
		default: "33E",
		validate(value) {
			const matchValue = value.match(/^[0-9]{2}[Nn,Ee,Ss,Ww]{1}/g);
			if (matchValue) {
				return true;
			}

			return "Please enter a valid set of numbers together with a letter for orientation. The possible letters is N,E,S,W";
		},
	},
	{
		type: "input",
		name: "navigation",
		message: "Enter the moving commands you would like the robot to perform.",
		default: "LRF",
		validate(value) {
			const matchValue = value.match(/[Ll,Rr,Ff]/g);
			if (matchValue) {
				return true;
			}

			return "Please enter a valid set of moves the robot will make. L is for left, R is for right and F is for foward.";
		}
	}
];