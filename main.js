console.log('Hellooo are you working?')

let buttons = document.querySelectorAll('.button')
    console.log(buttons)

buttons.addEventListener('click', function(event){ 
        console.log(event.target.innerText)
        console.log('CLICKED')
})

//select the place in the DOM where the insert
//let greetingDiv = document.querySelector('#greeting')

//let button = document.querySelector('grid-item-dark')
//console.log(button)
// buttons.addEventListener('click', function () {
//     console.log('CLICKED')
// })

// let button()

// document.querySelectorAll('grid-item-dark')
// console.log (button)

// let buttons = document.querySelectorAll("button")



// buttons.addEventListener('click', function (event) {
//         console.log(event)
//         console.log('CLICKED')
//     })
// // buttons.forEach(function(buttn) {
// //     console.log(buttn)
// // })

// buttons.forEach(function (inner){  //inner is made up word- what we're calling the event
// console.log("inner");
// inner.addEventListener('click', inner);
// console.log("buttons");
// });
