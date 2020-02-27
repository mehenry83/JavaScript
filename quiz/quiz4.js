/**
 * Quiz 4 focuses on DOM
 *
 * @category    Quiz 4
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Mary Henry <YOUREMAIL@hawkmail.hfcc.edu>
 * @date        2020.02.27
 * @grade
 */

// Use my page for all examples below.
// https://cislinux.hfcc.edu/~crbanks1

// 2 pts
// 1. Use the JS to get my footer into a variable called foot.
var foot = document.getElementById("myfoot");


// 3 pts
// 2. Add an event to my footer to fire a method when clicked. Any method name is fine.
handleClick: function ()
{
    foot.updateDiv( "click" );
}

// 2 pts
// 3. Store my title element in a variable called myTitle.
var MyTitle = document.getElementById("myTitle");

// 3 pts
// 4. Use JS to change my Title and Footer to day "This Class rocks!"
    updateDiv: function ( str )
    {
        foot.myDiv.innerHTML = "<p>This Class rocks!</p>" + foot.myDiv.innerHTML;
    }
updateDiv: function ( str )
{
    myTitle.myDiv.innerHTML = "<p>This Class rocks!</p>" + myTitle.myDiv.innerHTML;
}
