/**
 *
 *
 * @category    Midterm
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        3.5.2020
 * @grade
 **/

var submitHandler = [];

function handlenewButton() {

    let userNameBox = document.getElementById("userName");
    let userpostBox = document.getElementById("userPost");

    let newPost =
        {
            user: document.getElementById('userName').value,
            post: document.getElementById('userPost').value,


        };

    let postnewBtn = document.getElementById("post");
    postnewBtn.addEventListener("click", submitHandler);
    // Should call Blueit?
};
