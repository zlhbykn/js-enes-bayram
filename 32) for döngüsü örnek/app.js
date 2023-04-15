// 1 den 10 kdar yazdıralım

for ( let i = 1 ; i<=10 ; i++){
    console.log(i);
}

//1 den 10 a kadar çiftleri yazdıralım.

for (let i = 0 ; i<=10 ; i+=2){
    console.log(i);

}

// 1 den 10 kadar tekleri yazdıralım

for(let i = 1 ; i<=10 ; i+=2){
    console.log(i);
}

//1 den 10 kadar çıktılarda teklerde enes çiftlerde naber yazsın.

for(let i=1 ; i<=10 ; i++){
    if(i%2==1){
        console.log("enes");
    }
    else{
        console.log("naber");
    }
}

// 50 den 1 kadar tüm sayıları yazdır ve topla

let toplam = 0;

for (let i=50 ; i>=1 ; i--){
    console.log(i);
    toplam +=i;
}

console.log("toplam: " , toplam);













