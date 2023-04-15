// BENZİN İSTASYONU UYGULAMASI

/*

1-DİZEL: 24.53
2-BENZİN: 22.25
3-LPG: 11.1

Gelen müşteriden alınan bilgiler;
1-Yakıt tipi
2- Yüklenecek yakıt litresi

\r\n bir sonraki satıra atla

*/

let dizel = 24.53 , benzin= 22.25 , lpg = 11.1;
const yeniSatir = "\r\n"

const yakitMetni = "1-Dizel"+ yeniSatir 
+"2-Benzin"+ yeniSatir
+"3-Lpg"+ yeniSatir
+"Yakıt türünüzü seçiniz";

let yakitTipi = Number(prompt(yakitMetni));
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){
    let yakitLitresi =Number( prompt("yakıt litrenizi giriniz"));
    let bakiye = Number( prompt("Bakiyenizi giriniz"));
    if(yakitTipi == "1"){
        //dizel
        let ondenecekTutar = dizel*yakitLitresi;
        if(ondenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-ondenecekTutar;       
            alert("Yakit alma işlemi başarili"+yeniSatir
            +"Ödenecek tutar: "+ondenecekTutar+yeniSatir
            +"Kalan bakiye: "+(bakiye));
    
        }
        else{
            //bakiyeniz yeterli değil
            alert("Bakiyeniz yeterli değildir."+yeniSatir
            +"Ödenecek tutar: "+ondenecekTutar+yeniSatir
            +"Bakiye: "+bakiye+yeniSatir
            +"Eksik tutar :"+(ondenecekTutar-bakiye));
        }
    }
    else if(yakitTipi == "2"){
        //benzin
        let ondenecekTutar = benzin*yakitLitresi;
        if(ondenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-ondenecekTutar;       
            alert("Yakit alma işlemi başarili"+yeniSatir
            +"Ödenecek tutar: "+ondenecekTutar+yeniSatir
            +"Kalan bakiye: "+(bakiye));
    
        }
        else{
            //bakiyeniz yeterli değil
            alert("Bakiyeniz yeterli değildir."+yeniSatir
            +"Ödenecek tutar: "+ondenecekTutar+yeniSatir
            +"Bakiye: "+bakiye+yeniSatir
            +"Eksik tutar :"+(ondenecekTutar-bakiye));
        }
    }
    else if(yakitTipi == "3"){
        //lpg
        let ondenecekTutar = lpg*yakitLitresi;
        if(ondenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-ondenecekTutar;       
            alert("Yakit alma işlemi başarili"+yeniSatir
            +"Ödenecek tutar: "+ondenecekTutar+yeniSatir
            +"Kalan bakiye: "+(bakiye));
    
        }
        else{
            //bakiyeniz yeterli değil
            alert("Bakiyeniz yeterli değildir."+yeniSatir
            +"Ödenecek tutar: "+ondenecekTutar+yeniSatir
            +"Bakiye: "+bakiye+yeniSatir
            +"Eksik tutar :"+(ondenecekTutar-bakiye));
        }
    }
}
else{
    alert("lütfen geçerli bir yakıt türü seçiniz.")
}






















