// Question 1:
//   Select an element from the page which has an ID called "almaz" and display it's text content on console and alert box on page load.
//alert(document.getElementById("almaz").innerHTML)
console.log(document.getElementById("almaz").innerHTML);

somePar = document.createElement("div");
somePar.textContent = "Helo";
console.log(somePar);
document.body.appendChild(somePar);

// Question 2:
//   Select an element from the page which has an ID called "abebe" and put it's text on an element with an ID called "kebede" on page load.

// document.getElementById("kebede").textContent = document.getElementById("abebe").textContent

// Question 3:
//   Select an element from a page which has an ID called "abebe" and put it's text on an element with an ID called "kebede" when a user clicks on an element with an ID called "challa"

function event() {
  document.getElementById("kebede").textContent =
    document.getElementById("abebe").textContent;
}
document.getElementById("challa").addEventListener("click", event);

// Question 4:
//   Copy the form we created to demo addition and create a form which does division when the form is submitted.
//     Note:
//       - Change the IDs and names of the form as you can't have a duplicate ID in a form.
//       - Remember division by zero is not allowed and make sure your code displays an error when user provides "0" as a divisor.

function divider(x, y) {
  if (x == 0) console.log("The numerator should be different from zero");
  if (isNaN(x) || isNaN(y)) console.log("Enter numeric values");
  document.getElementById("division").textContent = x / y;
}

// document
//   .getElementById("submitButton2")
//   .addEventListener(
//     "click",
//     divider(
//       +(document.getElementsByName("first-val").textContent),
//       +(document.getElementsByName("second-val").textContent)
//     )
//   );

document.getElementById("submitButton2").onclick = divider(
          +(document.getElementsByName("first-val").textContent),
          +(document.getElementsByName("second-val").textContent))