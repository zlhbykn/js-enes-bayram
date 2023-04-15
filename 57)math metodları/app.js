// Math sınıfı methodları

/*
1-Floor
2-Ceil
3-Round

4-Max
5-Min

6-Rondom
7-Abs-mutlak değer
8-Sqrt-karekök
9-Pow-üs alma
-----------> PI sayısı
*/

let a = 3.15;
let b = 3.75;
let c = -12;

//! Floor

console.log(Math.floor(a)); //bir alt tam sayıya yuvarlar

//! Ceil

console.log(Math.ceil(a)); // bir üst tam sayıya yuvarlar

//! Raund

console.log(Math.round(a));
console.log(Math.round(b)); // en yakın tam sayıya yuvarlar

//! Max

console.log(Math.max(5,7,3,9,4,50)); // en büyük değer döner


//! Min

console.log(Math.min(5,7,-22,-5,3,9,4,50)); // en küçük değer döner


//! Random

console.log(Math.random());

// 0 ile 1 arasında rastgele bir değer üretir.

console.log(Math.floor(Math.random()*100));

// bu örneği değer atama ile yaparsak
let randomDeger = Math.random();
let sonuc = randomDeger*100;
let yuvarla = Math.floor(sonuc);

console.log(yuvarla);



//! Abs

console.log(Math.abs(c)); //mutlak değer alma

//! Sqrt

console.log(Math.sqrt(16)); //karekök alma

//! Pow

console.log(Math.pow(2,3)); // üs alma işlemi


//! PI

console.log(Math.PI);



























