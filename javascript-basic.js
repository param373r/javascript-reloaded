// Following file is going to contain 150 problem and answer... So bare with it

main();
function main() {
	let choice = window.prompt("Please enter the question number:");
	eval("question" + choice + "()");
}

// 1. WAP to display the current day and time in the following format
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

// 2. Write a JavaScript program to print the contents of the current window
function question2() {
	window.print();
}

// 3. Write a JavaScript program to get the current date.
function question3() {
	let date = new Date();
	today = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
	console.log(today);
}

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function question4() {
	let a = 5;
	let b = 6;
	let c = 7;
	let s = (a + b + c) / 2;

	let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
	console.log(area);
}

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
function question5() {
	let string = "w3resource";
	let arr = Array.from(string);
	let n = arr.length;
	while (n--) {
		let temp = arr.pop();
		arr.unshift(temp);
	}
	console.log(arr);
}

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function question6() {
	year = 2000;
	if (year % 4 == 0) {
		if (year % 100 !== 0 || year % 400 == 0) {
			return console.log("Leap Year!!");
		}
	}
	console.log("Not a leap year...");
}

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
function question7() {
	for (let i = 14; i <= 50; i++) {
		let date = new Date(`1 January 20${i}`);
		if (date.getDay() === 0) {
			console.log(date.getFullYear(), "is the year with 1st Jan as Sunday");
		}
	}
}

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
function question8() {
	let rand = Math.floor(Math.random() * 11);
	let ans = prompt("Guess the number between 1 - 10");

	if (user == rand) {
		return console.log("Good Work");
	}
	console.log("Not matched");
}

// 9. Write a JavaScript program to calculate days left until next Christmas.
function question9() {
	let today = new Date();
	let christmas = Date.parse(`25 December ${today.getFullYear()}`);
	let daysUntilXmas = Math.floor((christmas - today) / (60000 * 1440));
	if (daysUntilXmas <= 0) {
		return console.log("Days until next Christmas:", 365 + daysUntilXmas);
	}
	console.log("Christmas coming this year in:", daysUntilXmas, "days");
}

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
function question10() {
	const body = document.body;

	const form = document.createElement("form");
	body.append(form);

	form.innerHTML = `
	<label style='display: block; margin: 10px;' for="firstNum">1st Number : 
		<input type="number" id="firstNum">
	</label>
	<label style='display: block; margin: 10px;' for="secondNum">2nd Number : 
		<input type="number" id="secondNum">
	</label>
	<button id="multiply">Multiply</button>
	<button id="divide">Divide</button>
	`;
	const score = document.createElement("p");
	document.getElementById("multiply").addEventListener("click", (e) => {
		e.preventDefault();
		score.innerHTML =
			"The Result is: " +
			document.getElementById("firstNum").value *
				document.getElementById("secondNum").value;
		body.append(score);
	});
	document.getElementById("divide").addEventListener("click", (e) => {
		e.preventDefault();
		score.innerHTML =
			"The Result is: " +
			document.getElementById("firstNum").value /
				document.getElementById("secondNum").value;
		body.append(score);
	});
}

function main() {
	let choice = window.prompt("Please enter the question number:");
	eval("question" + choice + "()");
}
