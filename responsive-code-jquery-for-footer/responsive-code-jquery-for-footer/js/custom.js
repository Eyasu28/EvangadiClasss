
let el=$(`.footer-wrapper h3`);

// console.log($(`.footer-wrapper h3`));

// for (let i = 0; i < el.length; i++) {
//     console.log(`hi`);
//    el[i].click(function () {
//      if ($(window).width() <= 768) {
//          el[i].next(`ul`).toggle();
//        console.log(el[i].next(`ul`));
//      }
//    }); 
// }
$(document).on("click", `.footer-wrapper h3`, function () {
    if ($(window).width() <= 768) {
        console.log(`screen size less than 768`);
        $(this).next("ul").slideToggle();
        $(this).toggleClass("expanded");
    }
	});





// $(`#shop`).click(function (){
//     if($(window).width()<=768){
//         $(`#listOfShop`).toggle(); 
//         // $(`#shop`).css(`width`,`col-12`)
//     }
// });

// $(`#Services`).click(function (){
//     if($(window).width()<=768){
//         $(`#listOfServices`).toggle(); 
//         // $(`#Services`).css(`width`, `col-12`);
//     }
// });
// $(`#Account`).click(function (){
//     if($(window).width()<=768){
//         $(`#listOfAccount`).toggle(); 
//     }
// });
// $(`#appleStore`).click(function (){
//     if($(window).width()<=768){
//         $(`#listOfAppleStore`).toggle(); 
//     }
// });
// $(`#business`).click(function (){
//     if($(window).width()<=768){
//         $(`#listOfBusiness`).toggle(); 
//     }
// });

// $(`#education`).click(function (){
//     if($(window).width()<=768){
//         $(`#listOfEducation`).toggle(); 
//     }
// });
// $(`#healthcare`).click(function (){
//     if($(window).width()<=768){
//         $(`#listofHealthcare`).toggle(); 
//     }
// });
// $(`#appleValues`).click(function (){
//     if($(window).width()<=768){
//         $(`#listOfAppleValues`).toggle(); 
//     }
// });
// $(`#aboutApple`).click(function (){
//     if($(window).width()<=768){
//         $(`#listOfAboutApple`).toggle(); 
//     }
// });



