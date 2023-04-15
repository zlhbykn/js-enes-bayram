/*

    ? SORULAR
    1-Türkçe 40       -4puan
    2-Matematik 40
    3-Sosyal Bilimler 20
    4-Fen Bilimleri 20

    ---->100 puanı ösym veriyor
    ----> okul puanı max 60 veriyor.

*/

let turkceDogru , turkceYanlis = 0;
let matematikDogru , matematikYanlis = 0;
let sosyalDogru , sosyalYalnis = 0;
let fenDogru , fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let yeniSatir = "\r\n";
let mesaj = "TYT PUan Hesaplama uygulamasına hoşgeldiniz!"+yeniSatir
+"1-Puan hesapla"+yeniSatir
+"2-Çıkış Yap";

let secim = prompt(mesaj);

switch(secim){
    case "1":
        okulPuani = Number(prompt("okul puanınızı giriniz"));

        turkceDogru = Number(prompt("türkçe doğru sayısı"));
        turkceYanlis = Number(prompt("türkçe yanlış sayısı"));
        
        matematikDogru = Number(prompt("matematik doğru sayısı"));
        matematikYanlis = Number(prompt("matematik yanlış sayısı"));

        
        sosyalDogru = Number(prompt("sosyal bilimler doğru sayısı"));
        sosyalYanlis = Number(prompt("sosyal bilimler yanlış sayısı"));

        fenDogru = Number(prompt("fen bilimleri doğru sayısı"));
        fenYanlis = Number(prompt("fen bilimleri yanlış sayısı"));

        let dogruSayisi = turkceDogru+matematikDogru+fenDogru+sosyalDogru;
        let yanlisSayisi = turkceYanlis+matematikYanlis+fenYanlis+sosyalYalnis;
        let kalanNet = dogruSayisi-(yanlisSayisi/4);
        
        puan = (kalanNet*4)+100+okulPuani;
        alert("TYT puanınız: "+puan);
    
        break;

    case "2":
        alert("uygulamadan çıkış yapıldı...");
        break;

    default:
        alert("lütfen geçerli değer giriniz...")
        break;
}






























