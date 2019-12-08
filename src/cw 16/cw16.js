function testWhileLoop() { // z modulo


    let value = 0;

    while (value < 10) {
        if (value % 2 === 0) {
            console.log(value);
        }
        value++;
    }

}

function testWhileLoop1() { // inna metoda


    let value = 0;

    while (value < 10) {
        console.log(value);
        value += 2;
    }


}


function cw16Loop() { //proper


    let val1 = 0;
    let val2 = 99;

    while (val1 < val2) {
        console.log(val1);
        val1 += 3;
    }


}
