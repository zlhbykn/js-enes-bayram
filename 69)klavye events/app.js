// klavye eventleri

//keypress-klavyeden herhangi bir tuşa basmak(harfleri ve sayıları algılar)
//keydown-klavyedeki tüm tuşlarda bastığınızda çalışır
//keyup-klavyedeki tüm tuşlarda elini tuştan çektiğinde çalışır
/*
document.addEventListener("keypress",run);

function run(e){
    console.log(e.type); // tipi
    console.log(e.key); // hangi tuş olduğu
    console.log(e.keyCode); //ascii tablosu karşılığı
    console.log(e.which); //ascii tablosu
}
*/
/*
document.addEventListener("keydown",run);

function run(e){
    console.log(e.type); // tipi
    console.log(e.key); // hangi tuş olduğu
    console.log(e.keyCode); //ascii tablosu karşılığı
    console.log(e.which); //ascii tablosu
}
*/
/*
document.addEventListener("keyup",run);

function run(e){
    console.log(e.type); // tipi
    console.log(e.key); // hangi tuş olduğu
    console.log(e.keyCode); //ascii tablosu karşılığı
    console.log(e.which); //ascii tablosu
}
*/

//! örnek f5 e bastığında sayfa yenilenmesin
/*
document.addEventListener("keydown",run);

function run(e){
    console.log(e.keyCode);
    if(e.keyCode==116){
        alert("sayfa yenileme engellendi!")
    }

    e.preventDefault();

}
*/

//! örnek

const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup",run);

function run(e){
    cardTitle.textContent=e.target.value;
    console.log(e.target.value);
}











