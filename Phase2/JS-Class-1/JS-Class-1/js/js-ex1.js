// Question 1
console.log("Question 1 \n");
console.log(2 < "12");
console.log(2.0 == 2);
console.log(2.0 === 2);
console.log(2.0 == "2");
console.log(2 < "John");
console.log(2 > "John");
console.log("2" < "2");
console.log("2" > "12");
console.log(2 > "2") ;
console.log(0  === false);
console.log(0  == false + "\n\n");

// Question 2
let a=10, b=15, c;
c = a + b;
console.log(c + "\n\n")

// Question 3
let first_name="Eyasu", last_name="Nigussie",full_name;

full_name =  first_name +" "+ last_name;
console.log(full_name +"\n\n");

// Question 4
let ar=["James", "Mike", "Hannah", "John", "Brook"];

//Display elements
console.log(ar[0]); 
console.log(ar[1]); 
console.log(ar[2]); 
console.log(ar[3]); 
console.log(ar[4] + "\n\n"); 

//Using For Loop
// for (let i = 0; i < ar.length; i++) {
//     console.log(ar[i]); 
// }


// Question 5
// fnction Definition
function myFirst() {
    console.log("Hello \n\n");
}
// Function Declaration
myFirst();

// Question 6
function mySecond(text) {
    console.log(text + "\n\n");
}
mySecond("My Second Function");

// Question 7
function myThird(txt) {
    return txt;
}
mySecond(myThird("My Third Function"));

// Question 8
function myFourth(a, b, c) {
    console.log(arguments[0] + "\n\n");
}
myFourth(1, 2, 3)

// Question 9
function myFifth(a, b) {
console.log(arguments[0] + arguments[1]);
}

myFifth(100, 50)

// var nam = window.prompt("Enter your name: ");
// alert("Your name is " + nam);




// let m="Watermelon";
// console.log(m.indexOf("melon"));

// function ind(ch) {
//     let m="Watermelon";
//    for (let index = 0; index < m.length; index++) {
//        if(m[index]==ch){
//            console.log(index)
//        }
//    }
// }

// ind("melon");












//function definition
function sum(x,y) {
let sum=x+y;
console.log(sum);
}



//function call
sum(10,5);

sum(20,30);



//function definition

//function call






function driver(){
    //comes to us
    //take us home
    console.log("you're already home");
}

