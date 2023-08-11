'use strict';

function readNumber() {
    let number ;
    do {
        number = +prompt('Entrer un nombre valide');

        if (number === null || number === '') {
            return null;
        }
    } while(!isFinite(number));

    return number;
}

alert(`Read: ${readNumber()}`);