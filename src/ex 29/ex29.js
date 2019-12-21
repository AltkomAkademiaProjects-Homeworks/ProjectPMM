function myFunction() {
    var txt;
    var person = prompt("Wprowadź swoje imię:", "Jan Kowalski");
    if (person == null || person == "") {
        txt = "Anulowano przez użytkownika";
    } else {
        txt = "Witaj " + person + "!";
    }
    document.getElementById("demo").innerHTML = txt;
}


