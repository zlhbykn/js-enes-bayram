//selectors -style özellikleri

//classname, id, tag name

//! getElementById : id ye göre elementi yakalar

let value;
value = document.getElementById("todoAddButton");



console.log(value);
//console.log(value.id);
//console.log(value.getAttribute("id"));
//console.log(value.className);
//console.log(value.getAttribute("class"));
//console.log(value.classList[3]);

/*
const classListesi = value.classList;

classListesi.forEach(function(className){
    console.log(className);
})

console.log(classListesi);
*/

/*

let buttonText = value.textContent; -string olarak alır
let buttonText2 = value.innerHTML; -html etiketlerini yakalayarak alır

console.log(buttonText);
console.log(buttonText2);

*/

//! getElementByClassName : class a göre yakalar
/*
const todoList =Array.from(document.getElementsByClassName("list-group-item"));
todoList.forEach(function(todo){
    console.log(todo);
})

console.log(todoList);
*/



//! getElementByTagName : etiket ismiyle yakalar

/*
const forms = Array.from(document.getElementsByTagName("form"));
forms.forEach(function(form) {
    console.log(form);
});

console.log(forms);
console.log(forms[0]);
console.log(forms[1].id);
console.log(forms[1].name);
*/

/*
const todoList = document.getElementsByTagName("li");
console.log(todoList);
*/


//! getElementById--GetElementByClassName--GetElementByTagName

//bu üçünü yapan bir method var-querySelector yada querySelectorAll
/* id seçme
const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton);
*/

/* class seçme
const todoList = document.querySelector(".list-group");
console.log(todoList);
*/

/* class birden fazla kullanıldıysa querySelectorAll kullanılır
const todoList = document.querySelectorAll(".list-group-item");
console.log(todoList);
*/

/* 2. indextekini getir demek
const todoList = document.querySelectorAll(".list-group-item")[2];
console.log(todoList);
*/

/* etiket ismine göre seçim
const todoList = document.querySelectorAll("li");
console.log(todoList);
*/

/*
const todoList = document.querySelectorAll("li:first-child");
console.log(todoList);
*/

/*
const todoList = document.querySelectorAll("li:last-child");
console.log(todoList);
*/

/*
const todoList = document.querySelectorAll("li:nth-child(2)");
console.log(todoList);
*/

// odd:tek and even:çift


const todoList = Array.from(document.querySelectorAll("li:nth-child(even)"));

todoList.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
})

console.log(todoList);




