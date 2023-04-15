// Var-Left-Const

/* ------SCOPE(kapsam)-------
    
    ->Global Spoce: her yerden erişebilirsin {} içinde tanımlanmaması lazım.
    ->Function Spoce : {} içinde tanımlanan değişkene {} içinde erişebilirsiniz dışardan erişilemez
    ->Block Spoce : var değişkenine her yerden erişilir. ama let ve const değişkenleri blok içinde kalır.

    
    
*/ 

/* var degiskenismi = 10;

console.log(degiskenismi); */

var a = 5; 
let b = 6;
const c = 7;  
// global scope- bu değişkenlere her yerden erişebilirsin herhangi bir sınırı yoktur.


function method1(){
    var sayi = 10; 
    console.log(sayi);
}

method1(;)

// function scope {} içinde tanımlanır ve {} içinden erişilir


function method1(){
    var a = 5; 
    // function scope
    if(true){
        var b = 10;
        // block scope
    }
    while(true){
        // block scope
    }
    for(let i=0 ; i<=10; i++){
        // block scope
    }
}

