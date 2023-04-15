// ÇOKLU İF YAPISI

/*
 kullanıcıdan adını ve tckm
 ad: boş geçilemez
 tckn:11 karakterden oluşsun
*/

let ad = prompt("isminizi giriniz");
let tckn = prompt("tc kimlik numaranızı giriniz.")

//kontrolEt(ad, tckn);

function kontrolEt(ad , tckn){

    if(ad!=""){


        if(tckn.length ==11){
            console.log("isim ve tckn problemsiz girildi");
        }
        else{
            console.log("lütfen tc nizi 11 karakter olarak giriniz.");
        }



    }
    else{
        console.log("lütfen isim alanını boş bırakmayınız.");
    }
}


//------------------------------------------------------------


kontrolEt2(ad,tckn);

function kontrolEt2(ad , tckn){
    if(ad==""){
        console.log("lütfen isim alanını boş bırakmayınız");
        return;
    }
    if(tckn.length!=11){
        console.log("lütfen tc nizi 11 karakter olarak giriniz.");
        return;
    }
    console.log("isim ve tckn problemsiz girildi");
}

// if-else iki seçeneğin olduğu yerde kullanılır
// if-else if-else 2den fazla seçeneğin olduğu yerde kullanılır
// if-if-if her bir koşul ayrı bir if yapısı olarak çalışır
































