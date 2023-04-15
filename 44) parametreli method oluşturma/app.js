//parametreli method tanımlama

//!---------------

function yazdir(isim,soyisim){
    console.log(isim + " " + soyisim);
}

yazdir("enes","bayram");
yazdir("ali","cevher");

//!----------------

cube(5);
cube(3);

function cube (sayi){
    console.log(sayi*sayi*sayi);
}

//!------------------

let yas = Number(prompt("yaşınızı giriniz."));

function kontrolEt(yas){
    if(yas>18){
        console.log("ehliyeti alabilirsiniz.");
    }else{
        console.log("ehliyeti alamazsınız.");
    }
}

kontrolEt(yas);

//parametreli geriye değer döndürmeyen method

//!------------------


//bir yerde () parantez varsa method dur.
parseFloat();
parseInt();





