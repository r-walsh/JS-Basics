//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var callingFriend = callFriend();
console.log(callingFriend("435-215-9248"));



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

function makeCounter() {
  var counter = 0;
  return function() {
    return counter += 1;
  }
}
var count = makeCounter();
console.log(count()) // 1
console.log(count()) // 2
console.log(count()) // 3
console.log(count()) // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

// function executeOnce(inputFunc) {
//   return function() {
//     inputFunc();
//   }
// }
// function otherFunc() {
//   console.log("it worked!");
// }

// var myVar = executeOnce(otherFunc());
// myVar();


//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. 
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number. 
  Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been 
  invoked 'N' number of times, return 'STOP'.
*/
function fnCounter(anonFunc, n) {
  var counter = 0;
  return function() {
    if (counter !== n) {
      counter++;
      return anonFunc();
    } else {
      return "STOP";
    }
  }
}
var anonVar = fnCounter(function() {
  console.log("hello");
}, 3);


//Next Problem




 /* var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };
/*
  Above you have a function named counter. Examine the function (without running the code) then below 
  write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or 
  evaluates an expression after a specified number of milliseconds.

    //The function will log numbers 1 through 5, after i seconds


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Wrong.


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

function counter(inputFunc  ) {
  for (var i = 1; i <= 5; i++) { 
    setTimeout(inputFunc, i * 1000, i);
  }
}

function timer(countNum) {
  console.log(countNum);
}

//Next Problem

var funcArray = [];
funcArray[0] = function() {
  console.log(0);
}
funcArray[1] = function() {
  console.log(1);
}
funcArray[2] = function() {
  console.log(2);
}
funcArray[3] = function() {
  console.log(3);
}
funcArray[4] = function() {
  console.log(4);
}
funcArray[5] = function() {
  console.log(5);
}
/*
  Make the following code work
*/
  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5
/*
  *Hint: Don't let this fool you. Break down what's really happening here.
*/


