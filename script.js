"use strict";

//task 1
// // შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// // 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

// function positiveSum(...numbers) {
//   let numberSum = 0;

//   for (const item of numbers) {
//     numberSum += item;

//     if (item > 0) {
//     }
//     return numberSum;
//   }
// }

// let resultSum = positiveSum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(resultSum);

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

//   ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით
//   (მაგ: 'giorgi saakadze') თუ isloggedin არის true და
//   false თუ isloggedin ფროფერთი არის false;

// let user = {
//   firstName: "giorgi",
//   lasttName: "saakadze",
//   age: 32,
//   isLoggedIn: true,

//   fullName: function () {
//     if (user.isLoggedIn == true) {
//       return `${user.firstName} ${user.lasttName}`;
//     }
//     return "false";
//   }
// };

//task 4
// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი
// და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function findMaxFunction() {
  let max = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
let largest = findMaxFunction(10, 14, 22, 234, 2, 0);
console.log(largest);

//task 5
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;

// function numberFunction(x) {
//   if (x % 2 == 0) {
//     console.log("This number is even");
//   } else {
//     console.log("This number is odd");
//   }
// }
// numberFunction(10);

//task 6
// მოცემულია მასივი
// for ორივე გზით და foreach-ის საშუალებით გამოიტანეთ მხოლოდ ის სიტყვებუ
// რონლის სიმბოლოების რაოდენობდა მეტია 4 და მოიცავს ‘av’ სიმბოელობის tთანმიმდევრობას;
// - include უნდა გამოიყენოთ
// let array = ["html", "css", "python", "javascript", "bootstrap"];

// for (const item of array) {
//   if (item.length > 4 && item.includes("av")) {
//     console.log(item);
//   }
// }

// let array = ["html", "css", "python", "javascript", "bootstrap"];
// array.forEach(function (){

// });

// console.log(array.element);

//task7
// მოცემულია მასივი for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1
// let array = [1,2,3,4,5];
// for (let i = array.length - 1; i>=0; i--){
//     console.log(array[i]);
// }

// task 8
// ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა,
// თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი,
// თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი.
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

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
