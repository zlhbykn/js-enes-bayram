// date sınıfı methodları

let tarih =  new Date();

console.log(tarih);
console.log(typeof tarih);

console.log(tarih.toString());
console.log(typeof tarih.toString());

console.log(tarih.getTime()); 
console.log(tarih.getFullYear()); //yıl
console.log(tarih.getDate()); //ayın kaçıncı günü
console.log(tarih.getDay()); //haftanın kaçıncı günü
console.log(tarih.getHours()); // saat
console.log(tarih.getMilliseconds()); // milisn
console.log(tarih.getMinutes()); // dk
console.log(tarih.getMonth()); //ay-aylar 0 dan başlıyor
console.log(tarih.getSeconds()); //sn

console.log(tarih.toLocaleDateString()); // tarih yazım farklı
console.log(tarih.toLocaleTimeString()); // saat yazım farklı
console.log(tarih.toLocaleString()); // tarih saat yazım farklı

//set methodları-yeni değer atama

console.log(tarih);
tarih.setDate(24);
tarih.setHours(15);
tarih.setMonth(11);
tarih.setMinutes(50);

tarih.setHours(tarih.getHours()+2); //şuanki saatin üstüne 2 saat koy

console.log(tarih);

































