//* PRIMITVE DATA TYPES

//? primitive veri türleri değiştirilemez (immutable) veri türleridir.

let firstName = "Ahmet";
console.log(firstName); //* Ahmet
console.log(typeof firstName); //* string

firstName[0] = "M";
console.log(firstName); //* Ahmet

//! Stringler değiştirilemez (immutable) veri türleridir. Bu yüzden firstName[0] = "M" işlemi gerçekleşmez. firstName değişkeni hala "Ahmet" olarak kalır.

//***************************************************** */

//* İlkel veri türleri, değerlerine göre karşılaştırılır.

let number1 = 10;
let number2 = 10;

console.log(number1 == number2); //* true
console.log(number1 === number2); //* true
//? === veri türünü de kontrol eder.

let js = "JavaScript";
let py = "Python";

console.log(js == py); //* false
console.log(js === py); //* false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); //* false
console.log(lightOn === lightOff); //* false

//? === veri türünü de kontrol eder.

let num1 = 10;
let num2 = "10";

console.log(num1 == num2); //* true
console.log(num1 === num2); //* false (veri türü farklı olduğu için)
