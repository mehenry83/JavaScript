/**
 * Quiz 3 focuses on Objects
 *
 * @category    Quiz 3
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.02.20
 * @link
    */

// 2 pts
// 1. Define an object called SiteUser.
let SiteUser = {};

// 3 pts
// 2. Add the following properties to the SiteUser object.
//      Username, Email, Password, Cart, Cell, Visits, Preferences, LastSignIn.
//      Feel free to make up the data or values for these properties.
let SiteUser = {
    username:"Mary",
    email:"maryisnotgrumpy",
    password:"as if",
    cart:"3 items",
    cell:"1408",
    visits:"2",
    preferences:"apples",
    LastSignIn: "yesterday",
} ;
// 2 pts
// 3. Add a function to the SiteUser object called addVisit.
//      This function should increase the Visits property by 1.
SiteUser.addVisit = function()
{
    return this.visits + 1;
}


// 3 pts
// 4. Call the addVisit method of the SiteUser object.
SiteUser.addVisit();


// 2 ex pt
// B. Add a function to the SiteUser object called addItemToCart.
//      This function should take an argument called item.
//      This function should then add that item to the cart array.
SiteUser.addItemToCart = function(item)
{
    return this.cart + "item";
}



