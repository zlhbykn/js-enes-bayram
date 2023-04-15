//kitap bulma uygulaması

let kitap1 = {
    isim: "herşeyi düşünme",
    yazar: "anne bagel",
    fiyat: 25,
    raf: "1.5 raf"
}
let kitap2 = {
    isim: "hiç bir karşılaşma tesadüf değildir",
    yazar: "hakan mengüç",
    fiyat: 56,
    raf: "2.3 raf"
}
let kitap3 = {
    isim: "insan neyle yaşar",
    yazar: "tolstoy",
    fiyat: 34,
    raf: "3.4 raf"
}
let kitap4 = {
    isim: "zafer sızlanarak kazanılmaz",
    yazar: "haluk tatar",
    fiyat: 45,
    raf: "4.1 raf"
}
let kitap5 = {
    isim: "şeker portakalı",
    yazar: "jose maouro de vasconcelos",
    fiyat: 22,
    raf: "5.3 raf"
}

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];

let raf11 = { kod: "1.1 raf", goster: false }
let raf12 = { kod: "1.2 raf", goster: false }
let raf13 = { kod: "1.3 raf", goster: false }
let raf14 = { kod: "1.4 raf", goster: false }
let raf15 = { kod: "1.5 raf", goster: false }


let raf21 = { kod: "2.1 raf", goster: false }
let raf22 = { kod: "2.2 raf", goster: false }
let raf23 = { kod: "2.3 raf", goster: false }
let raf24 = { kod: "2.4 raf", goster: false }
let raf25 = { kod: "2.5 raf", goster: false }


let raf31 = { kod: "3.1 raf", goster: false }
let raf32 = { kod: "3.2 raf", goster: false }
let raf33 = { kod: "3.3 raf", goster: false }
let raf34 = { kod: "3.4 raf", goster: false }
let raf35 = { kod: "3.5 raf", goster: false }


let raf41 = { kod: "4.1 raf", goster: false }
let raf42 = { kod: "4.2 raf", goster: false }
let raf43 = { kod: "4.3 raf", goster: false }
let raf44 = { kod: "4.4 raf", goster: false }
let raf45 = { kod: "4.5 raf", goster: false }


let raf51 = { kod: "5.1 raf", goster: false }
let raf52 = { kod: "5.2 raf", goster: false }
let raf53 = { kod: "5.3 raf", goster: false }
let raf54 = { kod: "5.4 raf", goster: false }
let raf55 = { kod: "5.5 raf", goster: false }


let raflar = [
    [raf51, raf52, raf53, raf54, raf55],
    [raf41, raf42, raf43, raf44, raf45],
    [raf31, raf32, raf33, raf34, raf35],
    [raf21, raf22, raf23, raf24, raf25],
    [raf11, raf12, raf13, raf14, raf15]];

function rafOlustur() {
    console.clear();
    let satir = "";
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++){
            satir+="|"+(raflar[i][j].göster ? raflar[i][j].kod : "---");
            // bu şu demek rafların içindeki göster ?(true) ise rafların kodunu yaz
            // :(false) ise --- koy     // !böyle bir yazım var 
        }
        console.log(satir);
        console.log("----------------------");
        satir = "";
    }
}

function kodBul(kitapİsmi){
    let rafKod = null;
    kitaplar.forEach(function(kitap){
        if(kitap.isim.toUpperCase().includes(kitapİsmi.toUpperCase(),0)){
            rafKod = kitap.raf;
        }
    });
    return rafKod;
}

function raftaGöster(rafKodu){
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++){
            if(raflar[i][j].kod == rafKodu){
                raflar[i][j].göster=true;
                break;
            }
        }
    }
}

rafOlustur();

let kitapİsmi = prompt("lütfen bir kitap ismi giriniz");
let rafKod = kodBul(kitapİsmi);

if(rafKod!=null){
    raftaGöster(rafKod);
    rafOlustur();
}else{
    alert("girdiğiniz kitap kütüphanemizde bulunmamaktadır.")
}


























