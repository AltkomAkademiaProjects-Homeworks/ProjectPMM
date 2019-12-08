//function funkcjeIIa(a, b, h) {
// return a * b * h;
//}

//function getPrVol() {
//console.log(funkcjeIIa(13, 17, 25));

//}


//function getPrVolb() {
//  console.log(funkcjeIIb(221, 25));
//}

/**
 * podpunkt 2 przedkształcona funkcja
 */

function funkcjeIIa(a, b, h) {
    if (a <= 0 || b <= 0 || h <= 0) {
        throw new Error('blad!')
    }
    let area = a * b;
    let result = funkcjeIIb(area, h);
    return result;
}

function funkcjeIIb(area, h) {
    return area * h;
}

function getResult() {
    try {
        console.log(funkcjeIIa(0, 323, 2))
    } catch (e) {
        console.log(e);
    }
}




