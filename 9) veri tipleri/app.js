/*
? Veri Tipleri

1-String
2-Number
3-Boolean
4-Null
5-undefined
6-Object
7-Function

*/

//! string

let isim = "Enes Bayram 23 yaşındadır."; 
console.log(isim);
console.log(typeof isim);   // string 

//! number

let sayi1 = 10;
console.log(sayi1);
console.log(typeof sayi1); //number


let say1 = 10.7;
let say2 = 5.3;
console.log(say1+say2); //number


let a = "5";
console.log(a);
console.log(typeof a); // string - tırnak içine alınınca tipi değişti


let x = "5";
let y = "2";
console.log(x+y); // string yapısında olduğu için toplamadı. 
// birleştirdi sonuç 52 oldu.


let degisken = "Yaşınız :"
let yas = 23;
console.log(degisken + yas);
// string ve number değeri bu şekilde toplanır-birleştirilir.

//! boolean veri tipi : true ve false

console.log(5>2); //true
console.log(5>8); //false


let t = 3;
let r = 12;
let sonuc = t+r;
console.log(sonuc>18);

//! null veri tipi

let k = null //boş
k=27;
console.log(k);

//! undefined veri tipi

let n; //tanımlanmamış-veri ataması yapılmamıştır
console.log(n);
console.log(typeof n);

//! object veri tipi

let insan = {
    // değer ataması yapmadan {} açtığında object veri tipi olur.
    isim : "enes",
    soyisim: "bayram",
    yas : 23
}

console.log(insan);
console.log(typeof insan);


let rakamlar = [1,2,3,4,5];
console.log(typeof rakamlar);


//! function veri tipi


let func = function(){ 
    console.log("merhaba");
}
func();

console.log(typeof func);






















