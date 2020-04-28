/**
 *
 *
 * @category    Homework 4
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.04.25
 * @grade           /10
 **/


var pageManager = {


    init: function ()
    {

        pageManager.myH1 = document.getElementById('myH1');
        pageManager.myH1Text = document.getElementById('myh1Text');
        pageManager.myButton = document.getElementById('myButton');
        document.getElementById("myButton").addEventListener("click", change);

        function change() {
            document.getElementById("myH1").innerHTML = pageManager.myH1Text.value;
        }
        pageManager.appendBox = document.getElementById('appendBox');
        pageManager.appendText = document.getElementById('appendText');
        pageManager.appendButton = document.getElementById('appendButton');
        document.getElementById('appendButton').addEventListener("click", Append);

        function Append() {
            document.getElementById('appendBox').innerHTML = "John " + pageManager.appendText.value;

        }

        pageManager.objectButton = document.getElementById("objectButton");
        document.getElementById("objectButton").addEventListener("click", print);

        function print() {
            console.log(pageManager);
        }

        function changeColor(colorParam) {
            let color = colorParam.value.toLowerCase();
            var optionElement = document.getElementById(color);
            optionElement.style.color = color;
        }

        }
    }


;






window.onload = pageManager.init;