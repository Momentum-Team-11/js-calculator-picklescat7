console.log("Hello World!");

// const number1 = document.getElementById("1");
// console.log("number button: 1", number1);

// const numButtons = document.querySelectorAll(".button")

// const display = document.getElementById("display");

// number1.addEventListener("click", () => {
  
//   console.log("button clicked!");
// });

// arrow function : () => {}
// 'traditional' function: function functionName() {}

// // console.log('Hellooo are you working?')

// runningTotal= " "

let buttons = document.querySelectorAll(".button")
console.log("Prnt me if i work")


// // **Doesn't work** 

// **Doesn't work** Select all button class use forEach method and log value on click
// buttons.forEach(function(buyButton) {
//     buttons.addEventListener('click', function(event){ 
//         console.log(event.target.innerText)
//         console.log('CLICKED')
// });
// });

// // **I forget what this even did
buttons.forEach(function (inner){  //inner is made up word- what we're calling the event
    console.log("inner");
    inner.addEventListener('click', inner);
    console.log("buttons");
    });

// //**Works, but not ideal because can click anywhere**
// // document.addEventListener('click', function (event) {
// //     let value = event.target.innerText //since it's being stored in a value we can do stuff like math with the valu
// //     console.log(value)
// //     console.log(value + 1)
// //     console.log('CLICKED')
// //     })
    

// // *select the calculator window element
// let resultWindow = document.querySelector('#result-window')
// console.log("resultWindow")


// // Put 'value' in the result window
// // resultWindow.classList.replace("" ,  ) //this isn't right at all


// //Seven
// let seven7 = document.querySelector('#seven')
// console.log("seven")

// seven7.addEventListener('click', function (event) {
//     let value = event.target.innerHTML //since it's being stored in a value we can do stuff like math with the valu
//     console.log(value)
//     // console.log(value + 1)
//     //console.log('CLICKED')
//     })
  
// // seven7.addEventListener('click', function () {
// //   alert('Are you sure you want to cancel?')
// // })

// //     // Get the parent DIV, add click listener...
// // document.getElementById("calculator-container").addEventListener("click",function(e) {
// // 	// e.target was the clicked element
// //   if (e.target && e.target.matches(".button")) {
// //     console.log("Anchor element clicked!");
// // 	}
// // });
// // const buyButtons = document.querySelectorAll("button.buy");
// // // // buttons.addEventListener('click', function(event){ 
// // // //         console.log(event.target.innerText)
// // // //         console.log('CLICKED')
// // // // })

// // buttons.forEach(function(buyButton) {
// //     buttons.addEventListener('click', function(event){ 
// //         console.log(event.target.innerText)
// //         console.log('CLICKED')
// // });
// // });

// //select the place in the DOM where the insert
// //let greetingDiv = document.querySelector('#greeting')

// // let buttons = document.querySelector('.grid-item-dark')
// // console.log(button)

// // buttons.addEventListener('click', function () {
// //     console.log('CLICKED')
// // })

// // let button()

// // document.querySelectorAll('grid-item-dark')
// // console.log (button)

// // let buttons = document.querySelectorAll("button")

// // buttons.forEach(function(buttn) {
// //     console.log(buttn)
// // })

// //* random code found online for making a keyboard, some similarities
// // var g = {};
// // 			function assignListener()
// // 			{
// // 				 /*event listener for calculator/
// // 				  g.keyboard = document.querySelector("#keyboard");
// // 				  g.keyboard.addEventListener("click", addToTextBox,false);
// // 			}
			
// // 			function addToTextBox(e)
// // 			{
// //                 /*
// //                   with query selector the event (e) is passed along
// //                   to the function.  You can examine the event and get
// //                   all kinds of useful stuff from it, like type of event, where it came from, attributes like id, class list etc.
// //                 */
// // 				if (e.target.type == 'button')
// // 				{
// // 					switch (e.target.value)
// // 					{
// // 						case "ENTER":
// // 							document.getElementById('output').value += '\n';
// // 							break;
// // 						case "SPACE":
// // 							document.getElementById('output').value += ' ';
// // 							break;
// // 						case "BACKSPACE":
// // 							document.getElementById('output').value = document.getElementById('output').value.substr(0,document.getElementById('output').value.length-1);
// // 							break;
// // 						default:
// // 							document.getElementById('output').value += e.target.value;
// // 					}
// // 				}

// // 			}