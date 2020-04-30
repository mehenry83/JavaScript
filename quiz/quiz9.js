/**
 * Quiz 9 focuses on AJAX
 *
 * @category    Quiz 9
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.04.30
 * @grade
 */


// 4 pts
// 1. Create a JS object called cartData and save 3 properties in it.
//    The properties should be name, price, and quantity; feel free to give them any values.
var cartData = {
    name:"Mary",
    price:"3.50",
    quantity:1,
};

// 1 pts
// 2. Create a variable called cartDatabaseUrl and set it to the following string.
            var cartDatabaseUrl = new XMLHttpRequest("https://example.com/api/v2/cart");


// 3 pts
// 3. Send an ajax POST request to the url in the cartDatabaseUrl variable, and pass along the cartData object
xhttp.open("POST", "https://example.com/api/v2/cart", true);
xhttp.send(cartData);


// 2 pts
// 4. Assume the api responded and the resulting response string is stored in a variable called responseString.
//          Parse the response string into an object and store it in a variable called responseObj.
var responseObj = JSON.parse('{ "name":"Mary", "price":3.50, "quantity":"1"});

// 2 pts
// E. Name a http status codes for success and one for error.
For success: 200 Ok The request is only okay.

For error: 417 Expectation Failed