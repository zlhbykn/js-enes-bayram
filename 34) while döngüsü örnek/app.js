// 1 den 10 a kadar yazdıralım.
let i=1;

while(i<=10){
    console.log(i);
    i++;
}

// 1 den 10 a kadar çiftleri ve tekleri yazdıralım

let sayac = 0;
while(sayac<=10){
    if(sayac%2==0){
        console.log(sayac);
    }
    sayac+=1;
}

let say = 0;
while(say<=10){
    if(say%2==1){
        console.log(say);
    }
    say+=1;
}


// while(true) sonsuz döngüsü

let a = 1;
while(true){
    console.log(a);
    if(a==7){
        break;
    }
    a++;
}













