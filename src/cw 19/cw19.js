function funkcjeI(x) {
    let square = x ** 2;
    let cube = x ** 3;
    console.log(square, cube);
}

/**
 inaczej
 */
function funkcjeIa(x){
    let resulta = x ** 2;
    return resulta;
}

function funkcjeIb(x){
    let resultb = x ** 3;
    return resultb;
}

function getSquare() {
    console.log(funkcjeIa(3));
}

function getCube() {
    console.log(funkcjeIb(3));
}



