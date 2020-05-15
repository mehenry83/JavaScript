/**
 * CIS-172 Final
 *
 * This file should allow users to choose and preview a car color.
 * It should also use local storage to remember the car options they selected.
 *
 * @category    Final
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.05.12
 * @grade       90 / 100
 *
 **/

var pagejs = {

    carcolor : false,
    metric: {"data":"All sorts of metrics are in here."},

    init: function ()
    {
        console.log("Page loaded!");

        // LOCAL STORAGE STUFF
        pagejs.carcolor = localStorage.getItem('car-color');

        if(!pagejs.carcolor) {
            localStorage.setItem("car-color", "white");
            pagejs.carcolor = 'white';
        }

        // Perform Actual Visible Update
        pagejs.updateDisplay( pagejs.carcolor );

        // COLOR PICKER LISTENER
        let selectBox = document.getElementById('carcolor');
        selectBox.addEventListener('change', pagejs.updateColor);

        // BUY BUTTON LISTENER
       let btn = document.getElementById('buybtn');
       btn.addEventListener('click', pagejs.onButtonClick);
    },
    updateDisplay : function()
    {
        let carimage = document.getElementById('carimage');
        carimage.src = pagejs.carcolor + '.png';

        let selectBox = document.getElementById('carcolor');
        selectBox.value = pagejs.carcolor;
    },

    updateColor : function(event) {
        try {
            // Save The Value
            let sb = event.target;
            pagejs.carcolor = sb.value;
            localStorage.setItem("car-color", pagejs.carcolor);

            // No switch?
            if (localStorage.getItem('carcolor') === null) {
                localStorage.setItem(sb.value, "null");
                document.write("null");
            }
            else {
                if (localStorage.getItem('carcolor') === "white") {
                    document.write("white");
                } else if (localStorage.getItem('carcolor') === "blue") {
                    document.write("blue");
                } else if (localStorage.getItem('red') === "red") {
                    document.write("red");
                }
            }
            pagejs.updateDisplay(pagejs.carcolor);
            $('#carcolor').change(function () {
                $('#carimage')[0].src = this.value;
            });
        }
        catch (err) {
            alert("You messed up again?")
        }
    },
    onButtonClick: function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            //if (this.readyState == 4 && this.status == 200) ;
        };
        xhttp.open("POST", "https://nottesla.com/api/v2/page/metrics", true);
        xhttp.send(pagejs.metric);

        localStorage.setItem("maryHenry", JSON.stringify(pagejs.metric));




        console.log("BUY BUTTON!");
    }

};


window.onload = pagejs.init;
