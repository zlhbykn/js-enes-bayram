// MANTIKSAL OPERATÖRLER

/*

&& : VE
|| : VEYA
!  : DEĞİL

*/

//!   && : VE OPERATÖRÜ

/* ve birden fazla koşulun arasında yazılmışsa 
   tüm koşulların aynı anda sağlanmasını gerektirir.
   tüm koşullar sağlanırsa true bir tane bile sağlanmazsa false olur  */

let yas = 20;
let para = 3500;
let saglikliMi = false;
let hakSayisi =3;

console.log(yas>18 && para >3000 && saglikliMi==true);
// koşulun biri sağlanmadı sonuç false 


//!  || : VEYA OPERATÖRÜ

/* ve birden fazla koşulun arasında yazılmışsa 
   tüm koşulların aynı anda sağlanmasına gerek yoktur.
   bir koşul sağlanırsa sonuç true olur. ancak hepsi false ise false olur.*/


console.log(5>3 || 2<1);
// koşulun biri sağlandığı için true

console.log(5<3 || 2<1);
// iki koşulda sağlanmadığı için false

//!  ! : DEĞİL OPERATÖRÜ

console.log((5>3)); //true
console.log( !(5>3) );
// 5 3ten büyük değildir demek ve sonuç false

//!------------------------------

console.log((para>3000 && hakSayisi>1) || (yas>18 && saglikliMi));

//            (true ve true)   veya    (true ve false)
//                true         veya         false
//                            true

























