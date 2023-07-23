// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function displays entered value
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = eval(p);
}
// This function removes the last digit from the display value
function backSpace(){
    var val=document.getElementById("result").value;
    var slicedValue=val.slice(0,-1);
    document.getElementById("result").value=slicedValue;
}
