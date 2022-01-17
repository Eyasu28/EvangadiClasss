//                                       jQuery: Practice Exercises

//   The questions in here are based on the jQuery-Practice folder that contains an HTML file. Please download the folder first from this link. Please look at the “Hint on how to organize your folders and files” section below on how you organize your folders and files for this practice.

//   The first two questions are the same questions you solved last week using vanilla JavaScript. You  will  be  using  jQuery  this  time  round.

// Question  1:
//  The following three questions are based on the two paragraphs under the section which says, "For  Question  1".

// 1.1. Select  the  element  with  an  id  of  "sample1" using  jQuery.
// $("#sample1")

// // 1.2. Print  the  element  itself  on  the  console  upon page  refresh.
// console.log($("#sample1"));

// // 1.3. Print the content of the element on the console upon page refresh. Use jQuery to select the  content  of  the  element
// console.log($("#sample1").html());








// Question  2:
//  The following questions are based on the HTML code found under the section labeled "For question  2".

// // 2.1. Select  the  element  with  an  ID  of  "techCompanies" and  display  it  on  your  console.
// console.log($("#techCompanies"));

// // 2.2. How many tech companies are listed under the ul element with an id of "techCompanies"?
// console.log($("#techCompanies li").length);

// // 2.3. Select  all  elements  with  a  class  of  "red"  and display  them  on  the  console.
// console.log($("#techCompanies .red"));

// // 2.4. Create  a  new  li  HTML element  with  a  content of  "Facebook"  and  display  it  on  console
// let newEl = $("<li>Facebook</li>")
// console.log(newEl);

// // // 2.5. Give  the  newly  created  element  a  class  of  "blue" using  jQuery
// newEl.addClass("blue");

// // // 2.6. Append  the  newly  created  element  next  to  the the  "Sony"  <li>  element
// $("#techCompanies").append(newEl)
// console.log($("#techCompanies li").length);

// // // 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and display  the  result  inside  the  "blueCompanies"  div.
// $("#blueCompanies").append($("<p></p>").text($("#techCompanies .blue").length))









// Question  3:
// A form with two text fields is provided under the section which says "For question 3". Write a jQuery code which takes the values of the two fields, checks if they are number values and calculate  the  sum  and  average  of  the  two  numbers.


const result = e => {
  e.preventDefault()
  let [x, y] = [
    $("#adder .form-values input:first").val(),
    $("#adder .form-values input:last").val()
  ];
  if ($.isNumeric(x) && $.isNumeric(y)) $("#sum").text(`Sum = ${sum(x,y)} and Average = ${average(x,y)}`)
  // else if(! ($("#adder .form-values input:first")) || ! ($("#adder .form-values input:last"))) $("#sum").text(`Input fields are required`)
  else $("#sum").text(`Please Enter Numeric values only`)
}
const sum = (x, y) => {return Number(x)+Number(y)}
const average = (x, y) =>{ return (Number(x)+Number(y))/$("#adder .form-values input").length}

// console.log(average(x, y));

// // 3.1. Display  the  result  on  the  console
$("#adder").on("submit", result)

// 3.2. Display  the  result  underneath  the  form

// 3.3. If any of the numbers provided is not a number, display a message that says "Please enter  numerical  values  only"  underneath  the  form






// Question  4:
// Create an HTML form which asks users to provide their First name, Last name and Email address. All the fields should be labeled as required. Once the user submits, write a JavaScript function that checks if all the fields are provided. If not, it should show an error message above the  form.

// If the user provides all the values, hide the form input fields, and display all the values provided by  the  user  on  the  browser.

const functionForm = e =>{
  e.preventDefault()
  let fName = $("#newForm #fName").val()
  let lName = $("#newForm #lName").val()
  let email = $($("#newForm #email").val())
}





// let newForm = $("<form></form>",{action: "#", id: 'newForm'})
// $("#newForm").append($("<input/>", {type: 'text', id : 'fName', placeholder: 'First Name' }),$("<br/>"))
// $("#newForm").append($("<input/>", {type: 'text', id : 'lName', placeholder: 'Last Name' }),$("<br/>"))
// $("#newForm").append($("<input/>", {type: 'email', id : 'email', placeholder: 'your Email' }),$("<br/>"))
// $("#newForm").append($("<input/>", {type: 'submit', id : 'submit', value: 'submit' }))

// console.log($("#newForm").html);
// document.body.append(newForm)



$("#registrationform").submit(formSubmitChecker);
function formSubmitChecker(e) {
    let firstname = $('input[name="firstname"]').val();
    let lastname = $('input[name="lastname"]').val();
    let Email = $('input[name="email"]').val();


    let errDi = $("#errorDisplay");
    let message = [];
    if(firstname ==="" || lastname ==="" || Email ===""){
        message.push("All field is required to fill")
    }
    else{
        $("#registrationform").hide();
        message.push('first Name:${firstname} <br> last name:${Email}');

        if(message.length > 0){
            e.preventDefault();
            errorDisplay.append(message);
        }
        
    }
}

























// $(document).ready(function() {
//     $("div#form1").append(
//     // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
//     $("<h3/>").text("Contact Form"), $("<p/>").text("This is my form. Please fill it out. It's awesome!"), $("<form/>", {
//     action: '#',
//     method: '#'
//     }).append(
//     // Create <form> Tag and Appending in HTML Div form1.
//     $("<input/>", {
//     type: 'text',
//     id: 'vname',
//     name: 'name',
//     placeholder: 'Your Name'
//     }), // Creating Input Element With Attribute.
//     $("<input/>", {
//     type: 'text',
//     id: 'vemail',
//     name: 'email',
//     placeholder: 'Your Email'
//     }), $("<textarea/>", {
//     rows: '5px',
//     cols: '27px',
//     type: 'text',
//     id: 'vmsg',
//     name: 'msg',
//     placeholder: 'Message'
//     }), $("<br/>"), $("<input/>", {
//     type: 'submit',
//     id: 'submit',
//     value: 'Submit'
//     })))
//     });








