module.exports = [
	{
		type: 'input',
		name: 'grid',
		message: "Enter the size of the room",
		default: "55",
		validate(value) {
			const matchValue = value.match(/^[1-9]{2}$/g);
			if (matchValue) {
				return true;
			}

			return 'Please enter a valid set of numbers e.g 55';
		},
	},
	{
		type: 'input',
		name: 'start',
		message: "Enter the starting position along with the orientation for the robot",
		default: "33E",
		validate(value) {
			const matchValue = value.match(/^[1-9]{2}[Nn,Ee,Ss,Ww]{1}/g);
			if (matchValue) {
				return true;
			}

			return 'Please enter a valid set of numbers along with a letter for orientation. E.g 55E';
		},
	},
	{
		type: 'input',
		name: 'navigation',
		message: 'Enter the navigation commands you would like the robot to perform',
		default: "LFFRFRFRFF",
		validate(value) {
			const matchValue = value.match(/[Ll,Rr,Ff]/g);
			if (matchValue) {
				return true;
			}

			return 'Please enter a valid set of numbers along with a letter for orientation. E.g 55E';
		}, when(answers) {
			console.log(JSON.stringify(answers));
			return answers.comments !== 'Nope, all good!';
		},
	}
];