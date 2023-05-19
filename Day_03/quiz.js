//^^ LEVEL 1    ^^
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//* 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

//* 1.firstName, lastName, country, city, age, isMarried, year değişkenini bildirin ve ona bir değer atayın ve farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.

let firstName = "Mehmet";
let lastName = "Kara";
let country = "Turkey";
let city = "Istanbul";
let age = 25;
let isMarried = false;
let year = 2021;

console.log(
  "firstName : ",
  firstName,
  "=> tyypeof firstName : ",
  typeof firstName
);
console.log("lastName : ", lastName, "=> tyypeof lastName : ", typeof lastName);
console.log("country : ", country, "=> tyypeof country : ", typeof country);
console.log("city : ", city, "=> tyypeof city : ", typeof city);
console.log("age : ", age, "=> tyypeof age : ", typeof age);
console.log(
  "isMarried : ",
  isMarried,
  "=> tyypeof isMarried : ",
  typeof isMarried
);
console.log("year : ", year, "=> tyypeof year : ", typeof year);

//* 2. Check if type of '10' is equal to 10

//* 2. '10' un tipinin 10'a eşit olup olmadığını kontrol edin

console.log("'10' == 10 : ", "10" == 10);
console.log("'10' === 10 : ", "10" === 10);

//* 3. Check if parseInt('9.8') is equal to 10

//* 3. parseInt ('9.8') 10'a eşit mi kontrol edin

console.log("parseInt('9.8') == 10 : ", parseInt("9.8") == 10);
console.log("parseInt('9.8') === 10 : ", parseInt("9.8") === 10);
