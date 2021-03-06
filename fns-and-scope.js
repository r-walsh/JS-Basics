//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
	if (name === "Tyler") {
		return true;
	} else {
		return false;
	}
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
	var name = prompt("What is your name?");
	return name;
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

// var user = getName()
function welcome(userName) {
	alert("Welcome, " + userName);
}

//Next problem




//What is the difference between arguments and parameters?

// Parameters are set in the function declaration, arguments are what is passed to the function on call.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// false, null, undefined. Check by passing the console ![value]. If the console returns "true", the value
// is falsy.



//Next Problem



//Create a function called myName that returns your name

function myName() {
	return "my name"
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

//alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(userName) {
	var name = userName;
	return function() {
		return name;
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn("my name");

//Now invoke innerFn.

innerFn();
