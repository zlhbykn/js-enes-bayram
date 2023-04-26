//session storage kullanım

//! değer ekleme
sessionStorage.setItem("350","enes");
sessionStorage.setItem("216","yasin");
sessionStorage.setItem("154","bilal");
sessionStorage.setItem(552,47);

//!değer silme

//sessionStorage.removeItem("154");


//! değer alma

/*
let value = sessionStorage.getItem("350");

if(value===null){
    console.log("değer bulunamadı");
}else{
    console.log("değer bulundu:",value);
}
*/

//! hepsini silme

// sessionStorage.clear();


//! session storage ekldeğimiz değerler string dir
/*
let value = sessionStorage.getItem(552);
 console.log(typeof value);
*/
//! session storage array yazdırma

let names=["ali","enes","kübra","adem","ayşenur"];

/*
sessionStorage.setItem("names",names);

let value=sessionStorage.getItem("names");

console.log(value); 
console.log(typeof value); //string
*/

//array olarak geri almak istiyorsak

sessionStorage.setItem("names",JSON.stringify(names)); //array olarak yazma 

let value=JSON.parse(sessionStorage.getItem("names")); // array olarak almak

value.forEach(function(name) {
    console.log(name);    
});

console.log(value); 
console.log(typeof value); //string









