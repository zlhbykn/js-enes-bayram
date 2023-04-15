// geriye değer döndüren method tanımlama 
//return: geriye döndürmek

//!---------------

let dönenDeger = cube(3);
console.log(dönenDeger);

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}

//return ile değeri { } parantez dışına çağrıldığı yere cube(3); çıkardık ve yazdırdık

//!---------------------


let dönenDegr = cube(2);
kareAl(dönenDegr);

function kareAl(sayi){
    let sonuc = sayi*sayi;
    console.log(sonuc);
}

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
    console.log("enes");
}
/*
!return
1- Bir değeri methodun dışına çıkarmak, taşımak için kullanılır.
2- bir methodu bitiren anahtar kelimedir.
3-return anahtar kelimesinden sonra hiç bir kod çalışmaz-erişilmez.
*/


/* iki methodun fonks içindeki sayi ve sonuc parametre ve değişkenleri {} içinde
olduğundan birbirinden farklıdır. */


/* ilk cube(2); atamasına bakılır ve cube methoduna gider. return ile değer cube(2);
atamasına geri döner. sonra bu dönendegr olarak atanır. atanan dönendegr kareAl(); 
methoduna gider. kareAl(); methodu çalışır ve çıktı verir. */ 

//!-----------

yazdir();

function yazdir(){
    console.log("enes");
    //! void: geriye değer döndürmeyen demektir.
}

//!--------------


cube(2);

function kareAl(sayi){
    let sonuc = sayi*sayi;
    return sonuc;
}

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    let kareAlsonuc = kareAl(sonuc);
    console.log(kareAlsonuc);
}


// method içinde method kullanımı





