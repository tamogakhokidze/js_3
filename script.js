"use strict";

//task 1
// // შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// // 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function sum(...numbers) {
  let numberSum = 0;

  for (const item of numbers) {
    numberSum += item;
  }
  if (item > 0) {
    return numberSum;
  }

  }

let resultSum = sum (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log (resultSum);
let positive = 0;
 if (positive > 0) {
    console.log (positive);
 }

//task 2

// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9
//  function sum (... numbers){
//     let numberSum = 0;
//     for (const item of numbers) {
//         numberSum += item;
//     }
//     return numberSum;
//  }
// let resultSum = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log (resultSum);

//task 3

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

//   ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით
//   (მაგ: 'giorgi saakadze') თუ isloggedin არის true და
//   false თუ isloggedin ფროფერთი არის false;

// ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა,
// თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი,
// თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი.
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

// task 8
// let getAgeFunction = (birthYear, yearNow) => {
//   let ageResult = yearNow - birthYear;
//   if (ageResult > 18) {
//     return " სრულწლოვანი";
//   }
//   return "არასრულწლოვანი";

//   return ageResult;
// };

// let result = getAgeFunction;
// console.log(result(2022, 2023));
