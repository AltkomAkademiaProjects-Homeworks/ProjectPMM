var tmr = setInterval(myFunc, 1000);
var d;

function myFunc() {
    document.getElementById("demo").innerHTML = d.toLocaleString();
    d = new Date(d.getTime() + 1000);
}

function initRealTime() {
    d = new Date();
}



