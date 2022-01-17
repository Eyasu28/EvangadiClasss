// Write afunction that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop.

// const integers=()=>{for (let index =1; index <= 10; index++) console.log(index);}
// integers();


// Write a function that takesasinglenumberasanargumentandprintsthenext5numbersintheconsole. Note: each output should be displayed on a new line.○Test case: If you give 7 to the function, output should look like this:89101112

// const nextInt= x => {for (let index = x; index < x+5; index++) console.log(index+1);}
// nextInt(7);

// Writeafunctionthattakesasinglenumberandprintsthesumofthenext10numbersafterthegiven number.○Testcase:Ifyougive7tothefunction,outputshouldbe:125-because(8+9+10+11+  12+  13+  14+  15+  16+  17 = 125)
// const nextIntSum= x => {
//     let sum=0;
//     for (let index = x+1; index <= x+10; index++)sum+=index;
//     console.log(sum)
// }
// nextIntSum(7);

// Writeafunctionthattakesanarrayasanargumentandprintseveryelementofthearrayontheconsole.○Test case: given the array a = [1, "Hello", 8, 44],  output should look like this:1Hello844


// const displayArray=ar=>{for (let index = 0; index < ar.length; index++)  console.log(ar[index]);}
// displayArray([1, "Hello", 8, 44])

// Writeafunctionthattakesanarrayasanargumentandprintsthetotalnumberofelementsfound in the array.Hint: use a property of the Arrayobject to solve this question.○Test case 1: Given the array a = [1, "Hello", 8, 44], output should be:4○Test case 2: Given the array a = ["world", 13], output should be:2

// const displayArrayLength=ar=>{console.log(ar.length);}
// displayArrayLength([1, "Hello", 8, 44])


// Writeafunctionthattakesanarrayofnumbersasaparameterandlogsintheconsolethesumofall the numbers in the array.○Testcase1:Ifyougivethisarray,[5,6,99,8,76,4,68,44],tothefunction,outputshould be:310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44○Testcase2:Ifyougivethisarray,[3,0],tothefunction,outputshouldbe:3because3 + 0

// const addArrayElements=ar=>{
//     let sum=0;
//     for (let index = 0; index < ar.length; index++)  {
//         console.log("The number to added ", ar[index]);
//         sum+=ar[index];
//         console.log("after adding the number", sum);
//     }
//     return sum;
// }
// console.log(addArrayElements([5,6,99,8,76,4,68,44]));

// Writeafunctionthattakesanarrayofallnumbersasaparameter,subtractsthetotalsumofalloddnumbersofthearrayfromthetotalsumofallevennumbersandlogstheresultintheconsole.○Testcase:Ifyougivethesearray,[5,6,99,8,76,4,68,44],tothefunction,outputshould be:   102■Sum of odd numbers: 5 + 99 =  104■Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 =  206■Difference between total even and total odd numbers: 206 - 104 = 102

// const subtractOdd = ar =>{
//     let sumOdd,sumEven= 0;
//     for (let index = 0; index < ar.length; index++){
//         if(isNaN(ar[index])) console.log("All elements of the array should be numeric");
//         else ar[index] % 2 == 0 ? sumEven+=ar[index] : sumOdd+=ar[index];
        
//     }
//     return sumEven-sumOdd;
    
// }
// console.log(subtractOdd([5,6,99,8,76,4,68,44]));



// Questions on JavaScript objects
//****************************
//The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
let evangadiClass = {
lengthOfCourse: "1 Month",
website: "https://www.evangadi.com/",
isChallenging: false,
topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
students: [
{
name: "Abebe",
age: 34,
sex: "M"
},
{
name: "Kebede",
age: 44,
sex: "M"
},
{
name: "Almaz",
age: 27,
sex: "F"
},
{
name: "Challa",
age: 22,
sex: "M"
},
{
name: "Chaltu",
age: 19,
sex: "F"
}
]
}


// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// Use the dot notation "." to call the property you want to change
 
evangadiClass.lengthOfCourse="5 Month"
console.log(evangadiClass.lengthOfCourse="5 Month");

// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// Use an array method
//console.log(evangadiClass.topicsCovered.push("Bootstrap"));


// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console

// const averageAge = evClass =>{
//    return (evClass.students.map(x => x.age).reduce((a, b) => a + b, 0))/evClass.students.length;
// }
// console.log("Average age of students is: ",Math.round(averageAge(evangadiClass)));
// // console.log(evangadiClass.students)


// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console

// (count*100)/length

const genderFilter = evClass => { 
   return (evClass.students.filter(x => x.sex == "M").length * 100) /evClass.students.length + "%"
}
console.log(genderFilter(evangadiClass));





// Puzzles
// *******
// Question 15: Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.

// lowHigh = (low, high) =>{
   
//    for (let index = low+1 ; index < high; index++) index % 3 == 0 ? console.log(index + " div3") : console.log(index);
   
// }

// lowHigh(10,15)

// Question 19: Evens number
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.

const evenOdd = x =>{
  let num = x.toString() //"3224"
  for (let index = 0; index < num.length; index++) if(num[index] % 2 != 0) return 0;
  return 1
  }
  console.log(evenOdd("3224"));
  
  
  
  
  // function isEvens(num) {
  //    let digitNum = 0;
  //    while (num != 0) {
  //      digitNum += num % 10;
  //      if(digitNum % 2 != 0){
  //        return 0;
  //      }
  //      else{
  //        num = Math.floor(num / 10);
  //      }
  //    }
  //    return 1;
  // }
  // console.log(isEvens(2426));

// const evens= n =>{
// //    let str =n.toString();
// //    let result = 0;
// // for (let i in str) { 
// //    if ( parseInt(i) % 2 == 0 ) result = 1;
// //    else result = 0;
// // }   
// // return result;

// while (n==0) {
//    num
// }

// }
// console.log(evens(666));


//if else
// if (3>1){
//    console.log("Yes") 
// }
// else {
//    console.log("No")
// }


// Ternary oprator
// contion ? true : false;

// 3 > 1  ? console.log("Yes") : console.log("No");

// 5 < 1 ? console.log("True") : 5<2 ? console.log("True") : 5<3 ? console.log("true") : console.log("False");


// if (5 < 1) {
//    console.log("True")
// }
// else if ( 5 < 2) {
//    console.log("True")
// }
// else if (5 < 3 ) {
//    console.log("True")
// }
// else (
//    console.log("False")
// )
//2426
// 3224



