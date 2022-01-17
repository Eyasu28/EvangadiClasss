


//function definition

//function call




//definition

// let n=25;

// function paint(x,y,z){ 

//     let sum = x + y;
//     return sum;
// }

// // let add=  paint(10,15) +10;

// let total=  paint(10,15);

// console.log(total);//35





// paint(5,2); //7
// paint(4,6); //10






// function myAdditionCalculator (a, b) {
//     var c; 
//     c = a + b; 
//    //console.log(c);// display 9
//     return c; //put value 9
// } 
// let total =  myAdditionCalculator(4,5)
// console.log(total);



// RETURN
// function myMultiCalculator (c, d) {
//     var e; 
//     e = c * 5; 
//     return e; 
// }
// console.log(e);

//   How to use this 

// var  total;

// total = myMultiCalculator (myAdditionCalculator(4,5)); 
// console.log(total);


// VARIABLE SCOPING
// function run() {
//     var foo = "Foo";
//     let bar = "Bar";
  
//     console.log(foo, bar); // Foo Bar

//     {
//       var moo = "Mooo"
//       let baz = "Bazz";
//       console.log(moo, baz); // Mooo Bazz
//     }


//     console.log(moo); // Mooo
//     console.log(baz); // ReferenceError

//   }

//   run();



// Array Excercise
// let studests=["Saba","Tariku","Sirak","Gezu","Sara" , -7 ] 
// console.log(studests[2]);


// function myFunction(a, b, c) {//number of parameters should match number of items in your array
//     //simple use example
//     console.log("a: " + a);
//     console.log("b: " + b);
//     console.log("c: " + c);
// }

// var myArray = [1, -3, "Hello"];//define your array

// myFunction.apply(this, myArray);//call function



// function arrayFunction(a) {

//     console.log(a[0]);

// }

// myArray=[1,2,3];

// arrayFunction(myArray);

function add(a, b) {
    if (typeof a!= "number" || typeof b!= "number"){
      console.log("Ican only add numbers");
        
    }
     console.log(a+b);
}

add(5 , 7);
isNaN