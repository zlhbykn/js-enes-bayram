/*
-----------------TÜR DÖNÜŞÜMLERİ--------------
strings, numbers, booleans, undefined and null.
object, function

*/

//! string veri tipinden number veri tipine dönüştürmek

let a = 5;
let b = "10"; //! let b = Number("10");
let c = Number(b);
console.log(typeof c); //number
console.log(a+c); //! console.log(a+b);


let k = 8;
let l = parseInt("12"); // number veri tipine dönüştürme fonksiyonu
console.log(k+l);

// parseInt tam sayılarda için kullanılır.
//  parseFloat kesirli sayılar için kullanılır.


//! number veri tipinden string veri tipine dönüştürmek

let x = (55).toString(); //let x =String(55);
console.log(typeof x);
console.log(x);


let sonuc =String(true);
console.log(typeof sonuc);
console.log(sonuc);


let rakamlar = String([ 1, 2, 3, 4]);
console.log(typeof rakamlar);

















