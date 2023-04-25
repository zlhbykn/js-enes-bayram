// events

//! onclick-tıklayınca olan hareket
//onclick="alert('hoşgeldiniz')"
//onclick="this.textContect='tıklandı'"
//onclick="document.querySelectorAll('.card-title')[1].textContent='To Do Başlığı Değişti...'"
//onclick="changeTitle()" yazıldığında function app dosyasında tanımlanmalı

/*
function changeTitle(){
    document.querySelectorAll(".card-title")[1].textContent="To Do Başlığı Değişti..."; 
    console.log("başlık değişti");
}
*/

//! addEventListemer()

const  clearButton = document.querySelector("#todoClearButton");
/*
clearButton.addEventListener("click",function(){
    document.querySelectorAll(".card-title")[1].textContent="To Do Başlığı Değişti...";
});
*/

// yada bu şekilde yazılabilir

clearButton.addEventListener("click",changeTitle);

function changeTitle(){
    document.querySelectorAll(".card-title")[1].textContent="To Do Başlığı Değişti..."; 
    console.log("başlık değişti");
}

function changeTitle(e){
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.target.className);

}



