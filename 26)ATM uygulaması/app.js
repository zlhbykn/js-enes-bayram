/* 
ATM UYGULAMASI
1-bakiye görüntüleme
2-para çekme
3-para yatırma
4-çıkış
*/

let yeniSatir = "\r\n"
let bakiye = 1000;

let metin = "1-Bakiye Görüntüleme" + yeniSatir
    + "2-Para Çekme" + yeniSatir
    + "3-Para Yatırma" + yeniSatir
    + "4-Çıkış" + yeniSatir
    + "lütfen bir değer seçiniz";

let secim = prompt(metin);

switch (secim) {
    case "1":
        alert("Bakiyeniz: " + bakiye);
        break;

    case "2":

        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz"));

        if (cekilecekTutar < bakiye) {
            //başarılıdır.
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan bakiye: " + bakiye);
        }
        else {
            alert("Bakiyenizden fazla para çekemezsiniz" + yeniSatir
                + "Bakiyeniz: " + bakiye + " " + "Çekilecek Tutar: " + cekilecekTutar);
        }

        break;

    case "3":

        let yatirilicakTutar = Number(prompt("Yatırmak istediğniz tutarı giriniz"));
        bakiye = bakiye + yatirilicakTutar;
        alert("Güncel bakiyeniz: " + bakiye);

        break;

    case "4":
        alert("Lİsteden çıkış yapılıyor...");
        break;

    default:
        alert("Lütfen 1-4 arası seçim yapınız...");
        break;

}























