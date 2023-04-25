// html etiketleri üzerinde gezinme


const todo = document.querySelectorAll(".list-group-item")[0];
const todoList= document.querySelector(".list-group");
const card = document.querySelector(".card");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");

console.log(todo);
console.log(todoList);
console.log(card);
console.log(todoLastChild);

let value;

//! anneden çocuklara erişmek

value = todoList;
value = todoList.children[0];
value = todoList.children[2];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent="değişti";

value = todoList;
value = Array.from(todoList.children);
value.forEach(function(todo){
    console.log(todo.textContent);
})

//! çocuktan enneye erişmek

value = todo;
value = todo.parentElement;
value = todo.parentElement.parentElement;
value = todo.parentElement.parentElement.parentElement;
value = todo.parentElement.parentElement.parentElement.parentElement;
//yada alttaki gibi

//let ul = todo.parentElement;
//let cardbody = ul.parentElement;
//let cardElement = cardbody.parentElement;
//let row = cardElement.parentElement;
//let container = row.parentElement;

//console.log(container);


//! kardeşler arasında gezinmek

value = todo;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// bir sonraki kardeş


value = todoLastChild;
value = todoLastChild.previousElementSibling;
value = todoLastChild.previousElementSibling.previousElementSibling;
value = todoLastChild.previousElementSibling.previousElementSibling.previousElementSibling;
value = todoLastChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
// bir önceki kardeş




//! yeni bir örnek

const row = document.querySelector(".row");
value = row;
value = row.children[0].children[3].children[0].textContent= "todo listesi başlığı değişti";


value = row.children[0].children[3].children[2].children[2].textContent="todo 3 değişti";
value = row.children[0].children[3].children[2].children[2].style.backgroundColor="red";
value = row.children[0].children[3].children[2].children[2].style.color="white";
value = row.children[0].children[3].children[2].children[2].style.borderRadius="50px";








console.log(value);