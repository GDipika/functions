
//functions

function myFunc() {
    alert("You Clicked me");
}


myFunc();
function greet() {
    document.write("hello world")
}
greet();
greet();
greet();
greet();
greet();


function login() {
    console.log(' john,logged in succesfully')
}
login();

//FUNCTIONS WITH PARAMETERS
function login(username, password) {
    console.log(password);
    console.log(username)
}
login('dipika', 'deepu');

//FUNCTION TO UPPERCASE
function uppercase(str) {
    console.log(str.toUpperCase())
}
uppercase('javacsript');


//IIFE  immediately invocable function expression
(function () {
    console.log('setup done')
})();
//ARROW FUNCTION


// hello = function () {
//     console.log("hello");
// }
Hello = () => {
    console.log("hello everyone");
}
Hello();

function deepu() {
    console.log("t hub");
}
deepu();

