//Code your solutions in this file

console.log("1. fiveToOneHundred Function");
const fiveToOneHundred = () => {
    for (i = 5; i <= 100; i++) {
        console.log(i);
    }
}
fiveToOneHundred(5);

console.log("2. console logs all positive numbers to 100 that is a multiple of 3");
const multiplesOfThree = () =>{
    for (let i = 1; i <= 100; i++){
        if (i%3 === 0){
            console.log(i)
        }
    }
}
multiplesOfThree();

console.log("3. multiplesOfThreeOrFive Function");
const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        } 
    };
}

multiplesOfThreeOrFive();

console.log("4. `untilNum` takes in an integer parameter and console logs all numbers from 1 to that number.");
const untilNum = (num) =>{
    for (let i = 1; i <= num; i++){
        console.log(i)
    }
}
untilNum(5)    //prints out numbers 1 through 5
untilNum(9)    //prints out numbers 1 through 9
untilNum(42)   //prints out numbers 1 through 42

console.log("5. multiply Function");
const multiply = (a, b) => {
    return a * b;
}
multiply(2, 4)     //returns 8
multiply(10, -5)   //returns -50
multiply(3, 7.5)   //returns 22.5

console.log("6. adds unless triple the sum");
const add = (num1, num2) =>{
    if (num1 === num2){
        return (num1 + num2)*3
    }else{
        return num1 + num2 
    }
}
add(2, 4)     //returns 6
add(10, -5)   //returns 5
add(3, 7.5)   //returns 10.5
add(5, 5)     //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
add(6, 6)     //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that

console.log("7. isNegative Function");
const isNegative = (i) => {
    if (i < 0) {
        return true;
    } else {
        return false;
    }
}

isNegative(3)         //returns false
isNegative(-2)        //returns true
isNegative(Math.PI)   //returns false

console.log("8. returns the area of the triangle");
const triangleArea = (base, height) =>{
return (base * height)/2
}
triangleArea(5, 7)    //returns 17.5
triangleArea(6, 8)    //returns 24

console.log("9. betweenTwentyAndFourty Function");
const betweenTwentyAndFourty = (i) => {
    if (i >= 20 && i <= 40) {
        return true;
    } else {
        return false;
    }
};
betweenTwentyAndFourty(20)      //return false
betweenTwentyAndFourty(21)     //return true
betweenTwentyAndFourty(39)     //return true
betweenTwentyAndFourty(40)    //return false

console.log("10. takes in three number parameters and returns the largest of the values.");
const largest = (a,b,c) =>{
    return Math.max(a,b,c)
}
largest(4, 6, 8)        //returns 8
largest(30, 22, 17)     //returns 30
largest(41, 108, 86)    //returns 108





console.log("Bonus");
console.log("11. printTime Function");


console.log("12. isLeapYear Function");

isLeapYear(2000)    //returns true
isLeapYear(1900)    //returns false
isLeapYear(2020)    //returns true
isLeapYear(1999)    //returns false

console.log("13. getExtention Function");


getExtention("hello.txt")     //returns ".txt"
getExtention("app.js")        //returns ".js"
getExtention("README.md")     //returns ".md"

console.log("14. absoluteNineteen Function");


console.log("15. switchLetters Function");

switchLetters("anne")         //return "enna"
switchLetters("hello world")  //return "dello worlh"
switchLetters("a")            //return "a"
switchLetters("")             //return ""

console.log("16. changeString Function");

changeString("abc")             //return "bcd"
changeString("helloworld")      //return "ifmmpxpsme"







