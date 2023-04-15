//-------------DERS ORTALAMASI BULMA------------

//vize1 %30 , vize %30 , final %40

let vize1 = Number(prompt("vize 1 notunuzu giriniz"));
let vize2 = Number(prompt("vize 2 notunuzu giriniz"));
let final = Number(prompt("final notunuzu giriniz"));

let ortalama = ((vize1*0.3) + (vize2*0.3) + (final*0.4));

if(ortalama>=60){
    alert("dersten geçtiniz tebrikler :))" + ortalama);
    console.log("dersten geçtiniz tebrikler :))" + ortalama);
}
else{
    alert("dersten kaldınız, geçmiş olsun..." + ortalama);
    console.log("dersten kaldınız, geçmiş olsun..." + ortalama);
}











