/**
 * Quiz 2 focuses on functions and events
 *
 * @category    Quiz 2
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.02.13
 * @grade       9 / 10
 **/

// 3 pts
// 1. Define a function that take two arguments, you can choose the name.
//      The function should them multiply them together and return the result

function MultiplyNumbers (number1, number2) {
    return number1 * number2;
}
console.log(MultiplyNumbers(4, 3));



// 2 pts
// 2. Create a button with an id of multiply, with text that says "Multiple 4 and 7"
//      Add an onclick event to this button that calls the function above, passing in 4 and 7.
//  <input type="button" id="multiply" value="4, 7" onclick="MultiplyNumbers(4, 7);" >

// 2 pts
// 3. Write a function that displays a welcome message to the user in the dev console or anywhere on the page.

    function welcomeMessage()
    {
        console.log("Welcome to The Great and Secret Show");
    }

// 1/3 pts
// 4. Create a button with an id of welcome, with text that says "Display Welcome"
//      Add a JS created listener click event to this button that calls the welcome function above.
let obj = document.getElementById('Display_Welcome');
obj.addEventListener("click", welcomeMessage );
//    <input type="button" id="Display_Welcome" value="Display Welcome" onclick="addEventListener(welcomeMessage().value)">


// +1 ex pt
// 5. Create an on hover event for one of the buttons above.
//      This event can fire any function you would like.
    function makeBig(x) {
        x.style.height = "300px";
        x.style.width = "300px";
    }
  /**  <input type="button" id="multiply" value="multiple 4x7"*/ onmouseover="makeBig(this)" /**onclick="MultiplyNumbers(document.getElementById('4, 7').value)">
