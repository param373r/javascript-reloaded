// Following file is going to contain 150 problem and answer... So bare with it

main();
function main() {
	let choice = window.prompt("Please enter the question number:");
	eval("question" + choice + "()");
}
// WAP to display the current day an.d time in the following format
// Output:
// Today is: Tuesday.
// Current time is: 10:30

function question1() {
	const weekday = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let date = new Date();
	let day = weekday[date.getDay()];
	let time = date.getHours() + ":" + date.getMinutes();
	console.log("Today is: " + day + "\nCurrent time is: " + time);
}
