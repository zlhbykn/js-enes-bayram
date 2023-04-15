//! kelime-harf sayısı bulma uygulaması
/*

let metin = "Şuanda Yalova'da Javascript eğitimi çekmekteyim.";

let harf = prompt("harfi giriniz");

let sonuc = bul(harf);
alert("harf sayısı: "+sonuc);

function bul(harf){
    let toplam = 0;
    for(let i=0; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
    return toplam;
}

*/

//charAt(): index verme 0,1,2,3,..... index metedu
//toLowerCase(): küçük harfe çevirme methodu

//!--------------

let metin = "Şuanda Yalova'da Javascript eğitimi çekmekteyim.";

bul("a");
bul("e");
bul("s");

function bul(harf){
    let toplam = 0;
    for(let i=0; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
    console.log("harf sayısı: "+toplam);
}











