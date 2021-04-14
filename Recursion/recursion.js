//#region First Recursion
// x = 0;
// function WhileLoop(){
//     // while(x != 42){
//     //     x = prompt("Please enter the number 42");
//     // }
//     if(x!=42){
//         x = prompt("Please enter the number 42");
//         WhileLoop();
//     }else{
//         alert("Thank you for ending this.");
//     }

// }
// WhileLoop();
//#endregion

//#region NOTES - Every recursive function needs a BASECASE(AKA EXIT via incrementing) or it will turn into an endless loop. 
// function recurse(){
//     if (condition) {
//         BASECASE
//     } else {
//         recurse();
//     }
    
// }
// recurse()
//#endregion

//#region Factorial Recursion
function factorial(x){
    //BASECASE
    if(x <= 0){
        console.log("End of Recursion");
        return 1;
    }else{
        console.log("X in the Else Statment = " + x)
        console.log(x * (x-1))
        console.log("#######################");
        return x * factorial(x-1);
    }
}

const num = 5;
if(num > 0){
    let result = factorial(num);
    console.log(`The Factorial of ${num} is ${result}`);
}
//#endregion

//#region Sum of all Numbers
// let n = 10000;
// // Sum of All Numbers Using a LOOP
// function sumTo(n){
//     let sum = 0;
//     for(let i = 1; i<= n; i++){
//         console.log("i = " + i);
//         console.log("n = " + n);
//         sum+=i;
//         // console.log(`the Current Sum of ${i} + ${sum} = ${sum}`);
//     }
//     console.log(sum);
//     return sum;
// }
// alert(sumTo(n));

// //Sum of All Numbers Using Recursion
// function sumTo(n){
//     if (n==1) return 1;
//     return n + sumTo(n-1);
// }
// alert("This is Recursion "+sumTo(n));

// //Sum of All Numbers Using Recursion... Simplified further
// function sumTo(n){return n * (n+1)/2}
// alert("This is Simplified "+sumTo(n));

//#endregion













