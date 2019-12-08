function testCwiczenie() {
    var temperature = 10;

    switch (true) {
        case (temperature === 0):
            console.log("zima!");
            break;
        case (temperature < 0):
            console.log("mroz!");
            break;
        case (temperature > 0 && temperature < 30):
            console.log("moze byc!");
        case (temperature > 15 && temperature < 30):
            console.log("milo!");
            break;
        default:
            console.log("za cieplo!");

    }

    var expr = 40; //funkcja trójargumentowa

    var wynik = expr > 20 ?
        expr < 30 ? "wieksze od 20 i mniejsze od 30"
            : "Wartosc jest wieksza od 20" :
        "Wartosc jest mniejsza lub rowna 20";

    console.log(wynik);
}