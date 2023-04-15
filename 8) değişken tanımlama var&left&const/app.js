// var - let - const


//! var
// birden fazla değer atanabilir birkere tanımlanınca değişebilir
//function ve blok scope ta tanımlandığında hep function scope olur dışarıyı etkiler
// ram bellekte çok yer kaplar

/*
var a = 5;
var a = 10;

console.log(a);
*/

//! let-const
// birden fazla değer atanamaz. var dan farkı scope kavramıdır. 
//function ve blok scope ta tanımlandığında dışarıyı etkilemez.


/*
let a = 5;
let a = 10;

console.log(a); //! hata verdi
*/


//! let ve const arasındaki fark
// const (constant) : sabit değişmez

/*
const a = 10;
a = 15;
console.log(a); //! hata verdi a değişkeninin değeri değiştirilemez
*/

let b = 5;
b = 7;
b = 12;
console.log(b); //! let de değişkene yeni değer atayabilirsin değiştirilebilir.



// var da hem aynı değişken yeniden tanımlanabiklir hemde istediğin değer atanabilir
// let te değişken bir kere tanımlanır ama birden fazla değer atanabilir.
// const da değişken bir kere tanımlanabilir. yeni değer atanamaz.


const user = {
    username : "enes",
    password : "123"
}
// user = {}; hata verdi

user.username = "enesbayram";

console.log(user);

// const ile tanımlanmış user objesini yeniden tanımlayamazsın hata verir.
// ama tanımlanan objenin içindeki özelliklere yukarıdaki gibi 
// yeni değer ataması yapabilirsin.













