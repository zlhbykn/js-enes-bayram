//ürün bulma uygulaması

let urun1 = {
    isim: "ACER swift",
    kategori: "teknoloji",
    fiyat: 6.219
}
let urun2 = {
    isim: "ACER nitro 5",
    kategori: "teknoloji",
    fiyat: 15.475
}
let urun3 = {
    isim: "LENOVA V15",
    kategori: "teknoloji",
    fiyat: 10.999
}
let urun4 = {
    isim: "LENOVA V14",
    kategori: "teknoloji",
    fiyat: 4.399
}
let urun5 = {
    isim: "LENOVA Ideapad",
    kategori: "teknoloji",
    fiyat: 4.510
}

let urunler = [urun1, urun2, urun3, urun4, urun5];
let fitreliUrunler = [];

let kullaniciurunismi = prompt("lütfen bir ürün ismi giriniz?");

fitreliUrunleriDoldur(urunler);
fitreliUrunlerYazdir(fitreliUrunler);

function fitreliUrunleriDoldur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciurunismi.toUpperCase(), 0)) {
            fitreliUrunler.push(urun);
        }
    });
}

function fitreliUrunlerYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("--------------------------------------------");
        console.log("|"+urun.isim + "|" + urun.fiyat +"|"+ urun.kategori +"|");
        console.log("--------------------------------------------");
    });
}




























