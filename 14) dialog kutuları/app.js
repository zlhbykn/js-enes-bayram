/*

-----------DİALOG KUTULARI----------
    -ALERT
    -PROMPT
    -COMFİRM

*/

//! ALERT-UYARI

alert("nasılsın");
alert("işleminize devam etmeden önce kaydedin");
//kullanıcıyı bilgilendirmek-uyarmak için kullanılır.

//! PROMPT-KULLANICIDAN DEĞER ALMA

let isim = prompt("isminizi giriniz :");
let yas = prompt("yaşınızı gririniz :");

console.log("isminiz: "+isim);
console.log("yaşınız: "+yas);

console.log(typeof isim);
console.log(typeof yas);

// kullanıcıdan aldığın veri her zaman string tipinde olur


//! COMFİRM-ONAYLAMAK

let sonuc = confirm("silmek istediğinize eminmisiniz ?");

console.log(sonuc); //ok-true ---  iptal-false

























