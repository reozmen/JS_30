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

//* 4. Boolean value is either true or false.

//* 4. Boolean değeri true veya false'dur.

//* 4.1 Write three JavaScript statements which provide truthy value.

//* 4.1 Doğru değeri sağlayan üç JavaScript ifadesi yazın.

//* 4.2 Write three JavaScript statement which provide falsy value.

//* 4.2 Doğru olmayan değeri sağlayan üç JavaScript ifadesi yazın.

console.log("true : ", true);
console.log("1 == 1 : ", 1 == 1);
console.log("1 === 1 : ", 1 === 1);

console.log("false : ", false);
console.log("1 == 2 : ", 1 == 2);
console.log("1 === 2 : ", 1 === 2);

//* Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//* Aşağıdaki karşılaştırma ifadesinin sonucunu öncelikle console.log() kullanmadan bulun. Sonuca karar verdikten sonra bunu console.log() kullanarak onaylayın.

//* 4 > 3
//* 4 >= 3
//* 4 < 3
//* 4 <= 3
//* 4 == 4
//* 4 === 4
//* 4 != 4
//* 4 !== 4
//* 4 != '4'
//* 4 == '4'
//* 4 === '4'

console.log("4 > 3 : ", 4 > 3);
console.log("4 >= 3 : ", 4 >= 3);
console.log("4 < 3 : ", 4 < 3);
console.log("4 <= 3 : ", 4 <= 3);
console.log("4 == 4 : ", 4 == 4);
console.log("4 === 4 : ", 4 === 4);
console.log("4 != 4 : ", 4 != 4);
console.log("4 !== 4 : ", 4 !== 4);
console.log("4 != '4' : ", 4 != "4");
console.log("4 == '4' : ", 4 == "4");
console.log("4 === '4' : ", 4 === "4");

//* 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

//* 4 > 3 && 10 < 12
//* 4 > 3 && 10 > 12
//* 4 > 3 || 10 < 12
//* 4 > 3 || 10 > 12
//* !(4 > 3)
//* !(4 < 3)
//* !(false)
//* !(4 > 3 && 10 < 12)
//* !(4 > 3 && 10 > 12)
//* !(4 === '4')
//* There is no 'on' in both dragon and python

console.log("4 > 3 && 10 < 12 : ", 4 > 3 && 10 < 12);
console.log("4 > 3 && 10 > 12 : ", 4 > 3 && 10 > 12);
console.log("4 > 3 || 10 < 12 : ", 4 > 3 || 10 < 12);
console.log("4 > 3 || 10 > 12 : ", 4 > 3 || 10 > 12);
console.log("!(4 > 3) : ", !(4 > 3));
console.log("!(4 < 3) : ", !(4 < 3));
console.log("!(false) : ", !false);
console.log("!(4 > 3 && 10 < 12) : ", !(4 > 3 && 10 < 12));
console.log("!(4 > 3 && 10 > 12) : ", !(4 > 3 && 10 > 12));
console.log("!(4 === '4') : ", !(4 === "4"));
console.log(
  "There is no 'on' in both dragon and python : ",
  "dragon".includes("on") && "python".includes("on")
);
