// Question  1:
//  The  following  three  questions  are  based  on  the  two  paragraphs  under  the  section which  says  "For  Question  1".
    //  2.1  Select  the  element  with  an  id  of  "sample1".
// document.getElementById("sample1");

// //      2.2  Print  the  element  itself  on  the  console  upon  page  refresh. 
// console.log(document.getElementById("sample1");

// //      2.3  Print  the  content  of  the  element  on  the  console  upon  page  refresh.
// console.log(document.getElementById("sample1").textContent);
// //      Hint:  Use  the  "textContent"  property  to  select  the  content







// Question  2: 
// The  following  questions  are  based  on  the  HTML  code  found  under  the  section labeled  "For  question  2".

// 2.1  Select  the  element  with  an  ID  of  "techCompanies"  and  display  it  on  your console.  (Do  not  use   "querySelector"  for  this  question)
// console.log(document.getElementById("techCompanies"));

// // 2.2  Use  "querySelector"  to  select  the  element  with  an  ID  of "techCompanies"  and  display  it  on  your  console.
// console.log(document.querySelector("#techCompanies"));


// // 2.3  How  many  tech  companies  are  listed  under  the  ul  element  with  an  id  of "techCompanies"?  Use  "querySelectorAll"  to  count  the  total. 
// console.log(document.querySelectorAll("#techCompanies li").length);


// 2.4  Select  all  elements  with  a  class  of  "red"  and  display  them  on  the  console. Use  both  "querySelectorAll"  and  "getElementByClass" 
// console.log(document.querySelectorAll(".red"));
// console.log(document.getElementsByClassName("red"));


// 2.5  Create  a  new  li  HTML element  with  a  content  of  "Facebook"  and  display it  on  console 
let newEl = document.createElement("li")
newEl.textContent = "Facebook"
console.log(newEl);


// // 2.6  Give  the  newly  created  element  a  class  of  "blue"  using  JavaScript 
newEl.className = "blue"

// // 2.7  Append  the  newly  created  element  next  to  the  the  "Sony"  li  element 
document.getElementById("techCompanies").appendChild(newEl)
console.log(document.getElementById("techCompanies"));

// // 2.8  How  many  of  the  tech  companies  are  labeled  blue?  Find  the  result  using JavaScript  and  display  the  result  inside  the  "blueCompanies"  div.
// console.log(document.querySelectorAll(".blue").length);
let blueCompanies = document.createElement("p")
blueCompanies.textContent = document.querySelectorAll("#techCompanies .blue").length
document.getElementById("blueCompanies").appendChild(blueCompanies)







// Question  3:
//  Change  the  background  color  of  the  page  to  light-blue  (#99ecff)  when  clicked  on the  text  that  says  "Yes".  If  there  is  a  background  color  set  already,  change  it  to  none when  clicked  on  "No"

//       Hint:  First,  write  two  functions  to  alter  the  backgroundColor of  the  page. One  to  add  a  background  color,  another  to  remove.  Then,  select  the "yesBackground"  or  "noBackground"  element  and  bind  the  selected  element with  the  click  event.  Finally,  attach  the  function  you  wrote  to  alter  the background  color  when  the  respective  element  is  clicked  on.
    
function addBgColor (){
    document.getElementById("yesBackground").style.backgroundColor = "red"
    document.body.style.backgroundColor = "#99ecff" }

    function removeBgColor (){document.body.style.backgroundColor = "#fff"}

    
    // document.getElementById("yesBackground").onclick = addBgColor
    // document.getElementById("noBackground").addEventListener("click", removeBgColor)
    









    // Question  4:
    //  A form  with  two  text  fields  is  provided  under  the  section  which  says  "For  question 4".  Write  a  JavaScript  code  which  takes  the  values  of  the  two  fields,  checks  if  they are  number  values  and  calculate  the  sum  of  the  two  numbers.
    //     1.  Display  the  result  on  the  console 
    //     2.  Display  the  result  underneath  the  form 
    //     3.  If  any  of  the  numbers  provided  is  not  a  number,  display  a  message  that  says "Please  enter  numerical  values  only"  underneath  the  form


function myFun() {
    let fval= document.getElementsByName("first-value").values
    let sval = document.getElementsByName("second-value").values
if (isNaN(sval) || isNaN(fval)) return "Enter Numeric values"
    let res = fval + sval
    console.log(res);
}



    // document.getElementById("submitButton").addEventListener("click",myFun)

    // let result = document.getElementById("sum")
    // result.textContent = document.getElementById("submitButton").addEventListener("click",() => {
    //     document.getElementsByName("first-value").values + document.getElementsByName("second-value").values})


