//Amy- I worked with KE and her sister on this

// console.log("Hello World!");
//Step 1: Create event listeners (or one listener) that allows you to console.log the number that you click on
//Step 2: Next, figure out how to track the numbers that are clicked on in order. Will need access in order to do the math
//Step 3: You'll need a trigger to do the math, Aka an event listener for clicking on the equal button
//Step 4: Perform the math using eval()
//Step 5: Once you have the math "answer" figure out how to put it in the "display". (This is about adding and removing things from the DOM)
// const number1 = document.getElementById("1");
// console.log("number button: 1", number1);

// we are querying the DOM using 'querySelectorAll' for the html class called 'button' and making it into a variable called numButtons. It will be a nodeList array of all the different buttons. 
const numButtons = document.querySelectorAll(".button");
console.log("array of buttons", numButtons);

//query the DOM for just the display window and makes it into a variable called display
const display = document.getElementById("display");
console.log('display div', display);

for (let button of numButtons) {  //for/of loops will loop through all the values stored in the numButtons array
    button.addEventListener("click", (event) => {   //records the click on a button (listens to the click)
    console.log ("you clicked", event.target.id)  //"you clicked 5" because 5 is what we called it's ID in the html
        if (event.target.id !== "eval") {   //if the button clicked is NOT the '=' button...
            display.innerText += event.target.id; //replace the 'inner text' of the display window with the initial value and new value like "111 or 1+3+5"

            console.log("event object", event.target.id);
        }

        if (event.target.id === "clear") {  //if the button clicked IS the 'clear' (C) button...
            display.innerText = ""; //clear out the "inner text" and make the display window blank
        }

        if (event.target.id === "eval") {//if the button clicked IS the '='button...
            let result = eval(display.innerText) // set value of variable called result by using the eval function to read/calculate the strings in the display window
            display.innerText = result //not totally clear how this works, but it's setting result to be whatever is now displayed after the math function??
            console.log(result);
            console.log('equal button clicked!')
        }

    });
}
//         display.innerText += event.target.id;
//         console.log('event object', event.target.id); //before adding .target and .value in console expand and look for Target a
//         }
//         if (event.target.id === "clear") {
//             display.innerText = " "
//         }

//         if (event.target.id === "eval") {  //this is the meat of things
//             console.log('eval clicked');
//             //let result = eval(display.innerText)
//             console.log(display.innerText);
//         }
//     })
// }


// number1.addEventListener("click", () => {  //note to self: learn more about this syntax in jscats
//     display.innerText += '1' //this allows us to log 1 in the display again and again
// console.log("button clicked!");
// });

//arrow function syntax :() => {}  use to define function - this is a shortcut of below
// traditional function: function functionName() {}


//this is the syntax for an object in javascript  key semicolon 
// const obj = {
//     key: 'value',
// }