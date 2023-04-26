// local storage kullanım

//! değer ekleme
localStorage.setItem("motion1","push up");
localStorage.setItem("motion2","barfix");
localStorage.setItem("motion3","burpee");
localStorage.setItem("motion4","squart");


//! değer almak

/*
let value = localStorage.getItem("motion1");
console.log(value);
*/

//! değer silme
localStorage.removeItem("motion4");


//! hepsini silmek

//localStorage.clear();

//! array almak

let motions = ["push up","barfix","burpee","squat","chin up"];

localStorage.setItem("motions",JSON.stringify(motions));

let value = JSON.parse(localStorage.getItem("motions"));

value.forEach(function(motion) {
    console.log(motion);
    
});

console.log(value);
console.log(typeof value);





