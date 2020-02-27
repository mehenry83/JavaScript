/**
 *
 * @category    Homework 3
 * @author      Mary Henry <maryisnotgrumpy@gmail.comu>
 * @date        2020.02.13
 * @link
 */



var tweet = [];


function tweetBuilder()
{


    let id = document.getElementById("id");
    let tweetMessage = document.getElementById("tweetMessage");
    let tweetLikes = document.getElementById("tweetLikes");
    let tweetShares = document.getElementById("tweetShares");
    let tweetComments = document.getElementById("tweetComments");
    let tweetUser = document.getElementById("tweetUser");
    let tweetTime = document.getElementById("tweetTime");

    let tweetCollection =
        {
            id:       id.value,
            message:       tweetMessage.value,
            likes:      tweetLikes.value,
            shares:     tweetShares.value,
            comments:    tweetComments.value,
            username:  tweetUser.value,
            time:  tweetTime.value,
        };

    tweet.push(tweetCollection);

    console.log("Tweet:", tweetCollection);
}

let TweetBtn = document.getElementById("Tweet");
TweetBtn.addEventListener( "click", tweetBuilder );
