/**
 *
 *
 * @category    homework 5
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.04.20
 * @grade      10/10
 */



 let errorHandler = {

    "init": function () {
        let errorBtn = document.getElementById('err');
        errorBtn.addEventListener('click', errorHandler.checkDate)
    },
    checkDate: function () {

        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let checkDate = date + ' ' + time;
        console.log(checkDate);

        try {
            try {
                if (!(0 === checkDate % 2))
                console.log("Welcome to  class.");
            } catch (err) {
                console.error("Enjoy your day!", err);
                throw err;
            }
        } catch (e) {
            console.error("!");
        }
    }
};


        window.onload = errorHandler.init;
