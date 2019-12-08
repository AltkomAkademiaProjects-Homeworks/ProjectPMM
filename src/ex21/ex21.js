function ex21() {

    //let a=2;
    try {
        console.log("Poczatek try");
        console.log(a); //tutaj zostanie wrzucony wyjątek
        console.log("Dalsza czesc try");
    } catch (e) {
        //blok kodu wykonywany w przypadku wrzucenia wyjatku
        console.log(e);
        console.log("Koniec catch");
    } finally {
        // blok kodu wykonywany zawsze
        console.log("Sekcja finally");
    }
}

function ex21i5() {

    //let a=2;
    try {
        console.log("Poczatek try");
        throw new Error("Wyjatek!"); //albo po prostu throw "costam!"
        console.log("Dalsza czesc try");
    } catch (e) {
        //blok kodu wykonywany w przypadku wrzucenia wyjatku
        console.log(e);
        console.log("Koniec catch");
    } finally {
        // blok kodu wykonywany zawsze
        console.log("Sekcja finally");
    }
}




