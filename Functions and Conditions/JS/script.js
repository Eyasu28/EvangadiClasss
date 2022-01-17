// Question 1
let myFirst = () => console.log("Hello \n\n");
myFirst();

// Question 2
let mySecond = s => console.log(s);
mySecond("Evangadi \n\n");


// Qustion 3
let myThird = p => { return p;}
mySecond(myThird("I Love Programming \n\n"));

// Question 4
let myFourth= f =>  console.log(f[0] + "\n\n");
myFourth([1,2,3]);

// Question 5
let myFifth= (ar) => {
    if (isNaN(ar[0]) || isNaN(ar[1])) console.log("Please Enter Numeric Values to add \n\n");
    else console.log(ar[0]+ar[1] +"\n\n");
}
myFifth([3, 4]);

// Question 6
// Write a function that takes an integer minutes and converts it to seconds
let minutesConverter = min => {
    if (isNaN(min)) console.log("Please Enter Numeric Value \n\n");
    else if (min < 0) console.log("The number must be positive number or 0 \n\n");
    else console.log(min * 60 +" Seconds \n\n");
}

minutesConverter(1);

// Question 7
// Create a function that takes a number as a parameter, increments the number by +1 and returns the result.
let incrementFunction= n => {
    if (isNaN(n)) console.log("Please Enter Numeric Value \n\n");
    else return ++n;
}
console.log(incrementFunction(5)+"\n\n");


// Question 8
// Write a function that takes the base and height of a triangle and returns its area.
let areaCalculator = (b, h) =>{
    if (isNaN(b) || isNaN(h)) console.log("Please Enter Numeric Values \n\n");
    else return (b*h)/2;
}
console.log(areaCalculator(10, 5) + "\n\n");


// Question 9
// Create a function that returns the total number of legs of all the animals. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the farmer wants to know the total number of legs and not the total number of animals.


// Question 10
// Create a function that takes an array containing only numbers as a parameter and returns a value that is 3 times the first element of the array
let mySixth = (aray) =>{
    if (isNaN(aray[0]) || isNaN(aray[1]) || isNaN(aray[1])) console.log("Please Enter Numeric Values to add \n\n");
    else return aray[0]*3;
}
console.log(mySixth([3, 4, 5])+ "\n\n");


// Question 11
// Create a function that returns true when num1 is equal to num2; otherwise return false.

let checkEquality = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) console.log("Please Enter Numeric Values \n\n");
    else console.log((num1==num2) + "\n\n");
}
checkEquality(5," ");

//Question 14
// Create a function that returns ○ “Invalid score” if score is above 100 or score is a negative number ○ “Grade A”  when score is between 90 and 100 ○ “Grade B” when score is between 80 and less than 89 ○ “Grade C”  for any score below 79

let letterGrade = s =>{
    if (isNaN(s)) return "Please Enter Numeric Value \n\n";
    else{
        if (s>90) return "A";
        else if(s>80) return "B";
        else if(s<79) return "C";
        else return "Invalid Score";
    }
}
console.log(letterGrade(89));