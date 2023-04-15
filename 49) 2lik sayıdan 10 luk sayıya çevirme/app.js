// binary to decimal convercion-2'lik sayıdan 10'luk sayıya çevirme

let binary = "1101011";

converBinaryToDecimal(binary);

function converBinaryToDecimal(number){
    let toplam = 0;
    let ust = 0;
    for(let i = binary.length-1 ; i>=0 ; i--){
        toplam+=Number(binary.charAt(i))*Math.pow(2,ust);
        ust++;
    }
    console.log("sonuç: "+toplam);
}





// Math.pow(2,3);  2 nin 3üncü kuvveti


//1011----11
//1101011----107





