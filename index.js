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

console.log("6. ");


console.log("7. ");


console.log("8. ");


console.log("9. ");


console.log("10. ");












