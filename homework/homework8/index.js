/**
 * Homework 8
 *
 * @category    Homework
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.05.05
 * @grade           /10
 *
 **/


function onReadFile() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "message.txt", true);
    xhttp.send();
}

function onApiRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerHTML = this.responseText;
        }};
    xhttp.open("get", 'https://api.nasa.gov/planetary/apod?api_key=jb21EEbrHmaRa2SpxNZhJ7pWMPMeV019BnWD3gqK', true);
    xhttp.send();
}