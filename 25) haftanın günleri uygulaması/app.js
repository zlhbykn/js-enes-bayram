
/*
let sayi = prompt("lütfen 1 ile 5 arasında bir sayı giriniz");

switch(sayi)
{ // "1" "2" "3" "4" "5"
    case "1":
        //kodlarınız
        console.log("girilen sayi 1'dir.");
    break;
    
    case "2":
        console.log("girilen sayi 2'dir.");
    break;

    case "3":
        console.log("girilen sayi 3'tür.");
    break;

    case "4":
        console.log("girilen sayi 4'türr.");
    break;

    case "5":
        console.log("girilen sayi 5'dir.");
    break;

    default:
    console.log("girilen sayı 1 ile 5 arasında olmalıdır.");
    break;

}
*/

//!-----------------------------------------------------

let yeniSatir = "\r\n"
let metin = "1-Pazartesi"+yeniSatir
+"2-Salı"+yeniSatir
+"3-Çarşamba"+yeniSatir
+"4-Perşembe"+yeniSatir
+"5-Cuma"+yeniSatir
+"6-Cumartesi"+yeniSatir
+"7-Pazar"+yeniSatir
+"lütfen bir seçim yapınız";

let deger = prompt(metin);


switch(deger){
    case "1":
    console.log("Pazartesi Günü");
    break;
    
    case "2":
    console.log("Sali Günü");
    break;

    case "3":
    console.log("Çarşamba Günü");
    break;

    case "4":
    console.log("Perşembe Günü");
    break;

    case "5":
    console.log("Cuma Günü");
    break;

    case "6":
    console.log("Cumartesi Günü");
    break;

    case "7":
    console.log("Pazar Günü");
    break;

    default:
    console.log("lütfen geçerli bir değer giriniz!");
    break;

}
























