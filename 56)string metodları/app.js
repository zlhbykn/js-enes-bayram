// String sınıfının methodları

let kurs = "Modern Web Geliştirme Kursu";
let tarih = "2022"

// charAt()
// concat()
// indexof()
// lastindexof()
// toUpperCase()
// toLowerCase()
// trim()
// slice()
// substring()
// replace()
// split ()
// valueOf()
// startsWith()
// endsWith()

//! charAt methodu- verilen indexte bulunan karakteri döner

let karakter = kurs.charAt(5);
console.log(karakter);

//! concat methodu- birleştirme

let sonuc = kurs.concat(" ",tarih," enes");
console.log(sonuc);

//! indexof methodu- verilen karakterin kaçıncı indexte olduğunu döner

let index = kurs.indexOf("o");
console.log(index);

//! lastindexof methodu- indexof ile aynı

let index1 = kurs.lastIndexOf("k");
console.log(index1);

//! toUpperCase methodu- kelimeleri büyük harfe dönüştürür ve geriye döner

let sonuc1 = kurs.toUpperCase();
console.log(kurs);
console.log(sonuc1);

//! tolowerCase methodu- kelimeleri küçük harfe dönüştürür ve geriye döner

let sonuc2 = kurs.toLowerCase();
console.log(kurs);
console.log(sonuc2);

//! trim metodu- boşlukları görmezden gelme 

console.log(kurs.trim());

//! slice methodu- dilimlemek 

console.log(kurs);
console.log(kurs.slice(7,14));
//7. indexten başla 10. indexse kadar gel 10. index dahil değil

//! substring methodu- dilimlemek

console.log(kurs);
console.log(kurs.substring(0,9));
//0. indexten başla 9. indexe kadar gel 9. index dahil değil


//! replace methodu- değiştirmek

console.log(kurs);
console.log(kurs.replace("Modern","Güncel"));

//! split methodu- dilim dilim yapar belirttiğimiz ayırıcıya göre ayırır

console.log(kurs);
let dizi = kurs.split(" ");
console.log(dizi);

//! valueof methodu-primitive tip

console.log(kurs.valueOf());

//! startswith methodu- hangi karakterle başlıyor onu sorma

console.log(kurs);
console.log(kurs.startsWith("M"));
console.log(kurs.startsWith("m"));

//! endswith mehodu- hangi karakterle bitiyor onu sorma

console.log(kurs);
console.log(kurs.endsWith("Kursu"));
console.log(kurs.endsWith("su"));

























