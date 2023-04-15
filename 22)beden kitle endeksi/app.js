// beden kitle endeksi hesaplama

let kilo = Number(prompt("kilonuzu giriniz"));
let boy = Number(prompt("boyunuzu metre cinsinden giriniz"));

let vki = kilo/(boy**2);


if(vki<18.5){
    console.log("ideal kilonun altında "+vki);
}
else if(18.5<=vki && vki<=24.9){
    console.log("ideal kiloda "+vki);
}
else if(25<=vki && vki<=29.9){
    console.log("ideal kilonun üstünde "+vki);
}
else if(30<=vki && vki<=39.9){
    console.log("ideal kilonun çok üstünde(obez) "+vki);
}
else if(40<=vki){
    console.log("ideal kilonun çok üstünde(morbid obez) "+vki);
}


























