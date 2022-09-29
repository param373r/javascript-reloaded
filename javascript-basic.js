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

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function question11() {
	const body = document.body;
	body.setAttribute("style", "padding: 10px;");
	const form = document.createElement("form");
	form.innerHTML = `
	<label style="display: block; margin-bottom: 10px;">
        <input id="temp" type="text" placeholder="Enter Temperature">
    </label>
    <button id="celsius">Convert to Celsius</button>
    <button id="farenheit">Convert of Farenheit</button>
	`;
	body.append(form);

	const answer = document.createElement("p");
	answer.setAttribute("id", "answer");
	body.append(answer);

	document.getElementById("celsius").addEventListener("click", (e) => {
		e.preventDefault();
		let temp = document.getElementById("temp").value;
		let c = (5 / 9) * (temp - 32);
		answer.innerHTML = "The temperature in Celsius is: " + c;
	});
	document.getElementById("farenheit").addEventListener("click", (e) => {
		e.preventDefault();
		let temp = document.getElementById("temp").value;
		let f = (9 / 5) * temp + 32;
		answer.innerHTML = "The temperature in Farenheit is: " + f;
	});
}

// 12. Write a JavaScript program to get the website URL (loading page).
function question12() {
	let p = document.createElement("p");
	let url = window.location.origin;
	p.append(url);
	document.body.append(p);
}

// 13. Write a JavaScript exercise to create a variable using a user-defined name.
function question13() {
	let myvar = "abc";
	let myvalue = 13;

	let myObj = {
		myvar: myvalue,
	};

	console.log(myObj);
}

// 14. Write a JavaScript exercise to get the extension of a filename.
function question14() {
	let filename = prompt("Enter file") || "demo.js";
	let x = filename.split(".");
	console.log("File extension for file:", filename, "is", x[x.length - 1]);
}

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function question15() {
	let x = prompt("Enter a number");
	let diff = x - 13;
	if (diff > 0) {
		console.log(diff * 2);
	}
}

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function question16() {
	let x = prompt("Enter 2 integers separated by comma:").split(",");
	if (x[0] == x[1]) {
		return console.log((x[0] + x[1]) * 3);
	}
	console.log(x[0] + x[1]);
}

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function question17() {
	let x = prompt("Enter a number");
	let diff = x - 19;
	if (diff > 0) {
		console.log(diff * 3);
	}
}

// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function question18() {
	let arr = prompt("Enter 2 numbers, separated by comma").split(",");
	let x = arr[0];
	let y = arr[1];

	if (x + y == 50 || x == 50 || y == 50) {
		return console.log("Condition fullfilled");
	}
}

// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function question19() {
	return Math.abs(100 - x) <= 20 || Math.abs(400 - x <= 20);
}

// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
function question20() {
	let x = prompt("Enter 2 numbers separated by comma").split(",");
	if ((x[0] < 0 && x[1] >= 0) || (x[0] >= 0 && x[1] < 0)) {
		return console.log("Condition Fullfilled");
	}
	console.log("Numbers not fit the condition");
}

function main() {
	let choice = 20 || window.prompt("Please enter the question number:");
	eval("question" + choice + "()");
}
