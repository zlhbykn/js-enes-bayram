// break-continue

//! break
//break döngüyü kırar ve bi daha çalıştırmaz.

//1 den 10 kadar sayıları yazalım 8 e gelince döngüden çıkalım

let sayac = 1;

while(sayac<=10){
    console.log(sayac);
    if(sayac==8){
        break;
    }
    sayac++;
}


//! continue
// continue döngüyü sadece bir sefere mahsus kırar.


let say = 0;

while(say<=10){
    say++;
    if(say>10){
        break;
    }
    if(say==8){
        continue;
    }
    console.log(say);
}








