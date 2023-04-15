//decimal to binary sonversion-10'luk sistemden 2'lik sisteme dönüşüm

convertdecimalToBinary(10);
convertdecimalToBinary(25);


function convertdecimalToBinary(number){
    let binary = "";
    while(true){
        binary+=String(number%2);
        number=Math.floor(number/2); //sayı kesirli olursa diye yuvarlama 
        if(number==1){
            //artık bölmek yok döngüden çık
            binary+=1;
            break;
        }
    }
    let result = reverse(binary);
    console.log("sonuç: "+ result);
}

function reverse(binary){
    let reversebinary = "";
    for(let i = binary.length-1 ; i>=0 ; i--){
        reversebinary+=binary.charAt(i);
    }
    return reversebinary;
}














