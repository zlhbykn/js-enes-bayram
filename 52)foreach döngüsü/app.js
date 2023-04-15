
let dizi = [];
let dizi1 = new Array();
//ikiside dizi tanımlamak aynı şey

//diziler object veri tipine sahiptir.

//! foreach döngüsü

//foreach: dizilerde kullanılan döngü

let isimler = ["enes","yakup","bilal","kübra","ayşenur","adem"];

isimler.forEach(function(isim){
        console.log(isim);
});

//?-----------

for(let i = 0 ; i<isimler.length ; i++){
    console.log(isimler[i]);

}

//?-----------

let sayac = 0;
while(sayac<isimler.length){
    console.log(isimler[sayac]);
    sayac++;
}

//üç döngününde çıktısı aynıdır.





