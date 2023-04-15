//DİZİNİN METHODLARI

/*

push: dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner.
unshift: dizinin başına eleman ekler,eleman sayısını geriye döner.

pop: dizinin sonundan eleman siler, eleman sayısını döner.
shift: dizinin başından eleman siler, eleman sayısını döner.

splice(index,incdex) : eleman eklemek ve silmek için kullanılır.

toString : diziyi stringe çevirebiliriz.
join: diziyi stringe çevirir.farkı ise araya eleman ekleyebiliriz.

concat: dizileri birleştirmek için kullanılır.
slice(dilimlemek): diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
lenght: dizinin uzunluğunu verir.
reverse: dizinin elemanlarını ters çevirmek için
split(bölmek): belirli bir ifadeye göre bölüp diziye çevirmek
indexOf: elemanın index numarasını verir.
includes: verilen elemanı içeriyormu ona bakar.

*/

let arabalar = ["bmw", "toyota", "reanult", "mersedes", "porsche"];
let arabalar1 = ["hundai","tofaş"];
/* 
!PUSH METHOD

console.log(arabalar.length);
arabalar.push("opel");
console.log(arabalar);
*/

/* 
!UNSHİFT METHOD

arabalar.unshift("hundai");
console.log(arabalar);
*/

/* 
!POP METHOD

let silinenEleman = arabalar.pop(); 
console.log(arabalar);
console.log(silinenEleman);
*/

/* 
!SHİFT METHODU

let silinenEleman = arabalar.shift();
console.log(arabalar);
console.log(silinenEleman);
*/

/*
!SPLİCE METHODU

console.log(arabalar);
arabalar.splice(0,0,"hundai"); 

-Dizinin 0 ıncı indexsine herhangi bir eleman silmeden hundai koy demek
-ilk bölüm index, ikinci bölüm silmeden demek, üçüncü bölüm eklencek eleman

console.log(arabalar);
*/


/*
arabalar.splice(3,0,"hundai");
console.log(arabalar);
-dizinin 3. indeksine silmeden hundai ekle demek
*/


/*
arabalar.splice(1,2);
console.log(arabalar);
-1. indeksten başla 2 tane eleman sil demek
*/

/*
arabalar.splice(2,2,"hundai");
console.log(arabalar);
-2. indexten başla 2 tane elemanı sil ve hundai ekle demek
*/

/*
!TOSTRİNG METHODU

console.log(typeof arabalar);
let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar);
console.log(arabalar);
*/

/*
!JOİN METHODU

let stringArabalar = arabalar.join("-");
console.log(stringArabalar);
*/


/*
! CONCAT METHODU


let birleşmisDizi = arabalar.concat(arabalar1);
console.log(birleşmisDizi);
*/

/*
!SLİCE METHODU


console.log(arabalar);
let ayriDizi = arabalar.slice(2);
console.log(ayriDizi);
*/

/*
!LENGTH ÖZELLİĞİ

console.log(arabalar.length);
*/

/*
!REVERSE METHODU

console.log(arabalar);
arabalar.reverse();
console.log(arabalar);
*/

/*
!SPLİT METHODU


let isimler = "enes,ali,veli";
let isimlerDizi = isimler.split(",");
console.log(isimlerDizi);
console.log(typeof isimlerDizi);
*/

/*
!İNDEXOF METHODU


let index = arabalar.indexOf("reanult");
console.log(index);

-verilen değerin kaçıncı indexte olduğunu gösterir.
-eğer o değer dizide yoksa çıktı -1 dir
*/

/*
!İNCLUDES METHODU


let sonuc = arabalar.includes("porsche");
console.log(sonuc);

-eleman dizide varsa true yoksa false olur 

*/



































