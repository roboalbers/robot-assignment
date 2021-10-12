module.exports =
{
	moveRobot: function (answers, initRobot) {

		let navigation = answers.navigation.toLowerCase();

		let forward = 0,
			left = 0,
			right = 0;

		let movement = "";

		for (let i = 0; i < navigation.length; i++) {
			if (navigation[i] === "f") {
				forward++;
				let noMoreMoves = initRobot.forward()
				if (noMoreMoves) {
					break;
				}
			}
			else if (navigation[i] === "l") {
				left++;
				initRobot.left();
			}
			else if (navigation[i] === "r") {
				right++;
				initRobot.right();
			}
		}
		movement += "The robot moved a total of " + forward + " steps forward, " + left + " steps left, " + right + " steps right."

		return movement;
	}
};