'use strict';

function randomInteger(min, max) {
    // maintenant rand est entre (min-0.5) et (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );