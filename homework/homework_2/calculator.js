/**
 *
 *
 * @category    Homework 2
 *              javascript calculator
 *              now with OBJECTS!
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.02.12
 * @grade       10 / 10
 **/




function takeValue(x) {
    document.getElementById('inputwindow').value += x;
}

function clearInput(y) {
    document.getElementById('inputwindow').value = y;
}

function calculateResult() {
    var result = eval(document.getElementById('inputwindow').value);
    document.getElementById('inputwindow').value = result;
}