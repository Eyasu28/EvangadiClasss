




// for (let i = 0; i < 10; i++ ) {
//     console.log("Hello");
// }


// let i=0;
// while (i<10) {
//     console.log(i);
//     i++;
// }


// var someNumbers = [7, 58, 27]; 
// var lengthOfArray = 3; 
// var loopNumber = 0; 
// var someMessage = ""; 
// var i; 

// for (i = 0; i < 3; i++){
//     loopNumber = i + 1; //1
//     someMessage = "Loop " + loopNumber + ":" + someNumbers[i]; // loop 1: 7
//     console.log(someMessage);
// }



// do {
    
// console.log("hello");

// } while (0!=0);

// console.log("using For loop");
// let students= ["Nardos","Sirak","Biruke"];
// let length=3;

// for(let index=0; index < length; index++){

//     console.log(students[index]);
// }
   
// //Escape character

// console.log("\n\nusing While loop ");
// let index=0;
// while (index<length) {

//     console.log(students[index]);
//     index++
// }



// Create a function that takes a number as an argument. Add up all the numbers from 1 until the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


//1. create function named with myFunction that takes a x as an argument
// 2.check if the passed argument is Numeric
// 3. create for loop with counter starting from 1 and ends with the argument passed to the function
// 4.in every iteration of the loop, add the numbers from counter to the argument 
// 5.declare a variable total to store sum of the result
// 6. when the condition comes false, return total


// function myFunction(x){
//     if (isNaN(x)) return "Invalid Input";
//     let total=0;
//     for (let i=1; i<=x; i++){
//       total=total+i;  //total+=i
//     }
//     return total;
// }


// console.log(myFunction(3));





// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

//create function that takes an array of numbers
// Use for loop that starts from 1 and ends at length
// declare a variable to store munimum  number
// compare every element of the array with minimum
// when the loop stops iterating, return the minimum value

// const minArray=(ar) =>{
//     let min=ar[0];
//     let max=ar[0];
//     for (let index = 0; index < ar.length-1 ; index++) {
//         if (min> ar[index+1]) min=ar[index+1];

//         if (max< ar[index+1]) max=ar[index+1];
//     }
//     return [min,max];
// }


// let ar=[5,3,8,4] ; 
// let returned=minArray(ar);


// console.log(returned[0]);
// console.log(returned[1]);



const recursive= x =>{
    if(x>0) return x*recursive(x-1);
    else return 1;
}

console.log(recursive(5));