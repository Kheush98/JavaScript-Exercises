'use strict'

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[Math.floor((styles.length - 1) / 2)] = "Classiques";

alert(styles.shift());

styles.unshift("Rap", "Raggea");