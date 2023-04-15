// 1den 10 kadar yazdıralım.

let a = 1;
do{
    console.log(a);
    a++;
}while(a<=10);


// 1 den 20 ye kadar tek sayıların toplamını bulalım

let sayac = 1;
let toplam = 0;

do{
    if(sayac%2==1){
        toplam+=sayac;
    }
    sayac++;

}while(sayac<=20);

console.log("toplam:" ,toplam);





