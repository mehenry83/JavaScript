/**
 * Quiz 10 is cumulative
 *
 * Have a great summer, and stay safe!
 *
 * @category    Quiz 10
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.05.07
 * @grade       6 / 10
 */
try {
    // 0.5 / 1 pts
    // 1. Take this JSON string below, and convert it into an object called discordUser using the JSON library.
    // {"uid":64029,""name":"Jon","age":47,"type":"paid","games":["D&D","Halo","Mario"]}
    var discordUser = JSON.parse('{ "discordUser": "uid":64029,""name":"Jon","age":47,"type":"paid","games":["D&D","Halo","Mario"]}');


    // 0.5 / 2 pts
    // 2. Load the discordUser object created above into a localStorage object called currentUser.
    localStorage.setItem('currentUser',discordUser);

    // 2.5 / 4 pts
    // 3. Check to make sure the uid and age properties of the discordUser object are numbers.
    //          Also check to ensure the name and type properties are strings.
    //          If any of these are false, then throw an Error.

    if(typeof uid !== 'number')
    {
        throw new Error('Error message');
    }
                // (typeof age !== 'number');   Repeat above
                // (typeof name !== 'string');   Repeat above
                // (typeof type !== 'string')   Repeat above
  
    // 0.5 / 1 pts
    // 4. Create an AJAX POST request to the following URL, and be sure to pass the discordUser object with it.
            xhttp.open("POST", "https://notdiscord.com/api/v2/user/save", true);
            xhttp.send(discordUser);


    // 2 pts
    // 5. Wrap this whole file in a try, and then add a catch at the bottom.
    //          The catch should log the error object you pass in to the console.error method.


} catch (error) {
    console.error(error);
}
