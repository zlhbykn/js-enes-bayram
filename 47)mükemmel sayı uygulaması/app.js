// mükemmel sayı uygulaması

// 6 - 28 - 496

/*

6 yı tam bölen sayılar : 1, 2, 3, 6
bölen sayıların toplamı orjinal sayımın 2 katı ise mükemmel sayı denir.
1+2+3+6 = 12 = 6*2

*/

/*
28 : 1, 2, 4, 7, 14, 28 =>toplamı = 56 = 28*2

*/
let number = prompt("bir sayı giriniz");

isPerfectNumber(number);


function isPerfectNumber(number){
    let toplam = 0;
    for(let i = 1 ; i<=number ;i++){
        if(number%i==0){
            toplam+=i
        }
    }
    if(toplam == number*2){
        alert("mükemmel sayı :"+ number);
    }else{
        alert("mükemmel sayı değil: "+number);
    }

}


//!----------------------------


let number = prompt("bir sayı giriniz");

isPerfectNumber(number);


function isPerfectNumber(number){
    let toplam = 0;
    for(let i = 2 ; i<=number/2 ;i++){
        if(number%i==0){
            toplam+=i
        }
    }
    toplam+=1+number;
    if(toplam == number*2){
        alert("mükemmel sayı :"+ number);
    }else{
        alert("mükemmel sayı değil: "+number);
    }

}

/* bu şekilde yazımda döngü sayının yarısı kadar az dönücek işlem hızı artacaktır.
yukardaki yazım doğru ama allatki yazım daha doğru olur. */ 





