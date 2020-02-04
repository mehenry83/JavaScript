/**
 * Quiz 1 focuses on variables and control structures
 *
 * @category    Quiz 1
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Mary Henry <maryisnotgrumpy@gmail.comu>
 * @date        2020.01.30
 * @link
 * @grade       10 / 10
 */

// 2 pts
// 1. Define a constant named favBook that holds the name of your favorite book.
//      Also define a standard variables called favInt that contains your favorite int.

    const favBook = "Little House on the Prarie";

    let favInt = 63;


// 3 pts
// 2. Write an if statement that meets the following conditions.
//      If favInt is greater than 42, console log the word BIGGER.
//      If favInt is less than 42, console log the word SMALLER.
//      If favInt is equal to 42, console log the word EQUAL.

if( favInt === "42" )
{
    console.log("EQUAL");
}
if (favInt > "42")
{
    console.log("BIGGER");
}
if (favInt < "42") {
    console.log("SMALLER")
}

// 2 pts
// 3. Write a for loop that iterates 7 times. Log the name of your book in each iteration.
for (let c = 0; c <7; c++)
{
    console.log("favBook:", favBook);
}

// 2/3 pts
// 4. Write a while loop that iterates until favInt is less than or equal to -42.
//      Inside the loop, write an if that will send a console error if favInt is 0.
//      The console error should read "ZERO DETECTED!"


while (favInt <= 42)
{
    // favInt + 1;
    favInt++;
    if (favInt === 0) {
        console.log("Zero DETECTED!");
    }
}
if (favInt ===0)
{
    console.log("Zero DETECTED!");
}


// 1/2 ex pts
// 5. Write a switch statement for you favBook that meets the following bookname conditions.
//      "The Matrix" should console log "Excellent Movie!"
//      "Tears Of Steel" should log "I love open source!"
//      "Fight Club" should log "Excellent Movie!"
//      "Citizen Kane" should log "All Time Best Movie!"
//      "Star Wars" should log "He didn't say Luke I am your father!"




switch (FavBook) {
    case 0:
        TheMatrix = "Excellent Movie!"; // These should be console.logs
        break;
    case 1:
         TearsofSteel= "I love open source!";
        break;
    case 2:
        FightClub = "Excellent Movie!";
        break;
    case 3:
        CitizenKane = "All Time Best Movie!";
        break;
    case 4:
        StarWars = "He didn't say Luke I am your father!";
        break;

}

