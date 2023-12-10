











// function myFunction(value){
//     if(value < 25){
//         alert("Less than need");
//     } else if(value == 25){
//         alert("U win");
//     }else{
//         alert("More than need");
//     }
// }
// myFunction(25);



// let global = 3;




// function calculator(a, b){
//     let local = a + b + global;
//     return local;
// }

// console.log(global);


// let result = calculator(true, false);
// console.log(result);









// function calcPlus(a,b){
//     return a + b;
// }
// function calcMinus(a,b){
//     return a - b;
// }
// function calcMulti(a,b){
//     return a * b;
// }
// function calcDiv(a,b){
//     return a / b;
// }

// let result = null;

// function mainFunction(operation, a, b){
//     if (operation == "+"){
//         result = calcPlus;
//         console.log(result);
//     }else if (operation == "-"){
//             result = calcMinus;
//             console.log(result);
//     }else if (operation == "*"){
//                 result = calcMultiply;
//                 console.log(result);
//     }else if (operation == "/"){
//                    result = calcDiv;
//                    console.log(result);
//     }
//         }








// let Emptyarray = []; // an empty array
// let ArrayWithValue = ["Red", "Green", "Blue"]; // an array with value
// console.log(ArrayWithValue); // ["Red", "Green", "Blue"]
// console.log(ArrayWithValue[0]); // Red
// console.log(ArrayWithValue[1]); // Green
// console.log(ArrayWithValue[2]); // Blue
// console.log(ArrayWithValue.length);
// for (let i = 0; i <ArrayWithValue.length; i++){
//     console.log(ArrayWithValue[i]); // traditional for
// }
// for (let element of ArrayWithValue){
//     console.log(element); // for each
// }











let array = [1];
array.push(2); // add smth in the end of array
array.unshift(0); //add smth at the begining
array.pop(); //delete last element
array.shift(); // delete first element
console.log(array);

let multidiminsional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for ( let i = 0; i< multidiminsional.length; i++){
    for (let j = 0; j < multidiminsional.length; j++){
        console.log(multidiminsional[i][j]);
    }
}