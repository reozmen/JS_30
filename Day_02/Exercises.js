//? Exercise 1:
//^^ Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

//^^ Challenge adında bir değişken tanımlayın ve bunu '30 Days Of JavaScript' başlangıç ​​değerine atayın.

let challenge = "30 Days Of JavaScript";
console.log(challenge);

//? Exercise 2:
//^^ Print the string on the browser console using console.log()
//^^ console.log () kullanarak dizeyi tarayıcı konsoluna yazdırın

console.log(challenge);

//? Exercise 3:
//^^ Print the length of the string on the browser console using console.log()
//^^ console.log () kullanarak dizenin uzunluğunu tarayıcı konsoluna yazdırın

console.log(challenge.length);

//? Exercise 4:
//^^ Change all the string characters to capital letters using toUpperCase() method
//^^ toUpperCase () yöntemini kullanarak tüm dize karakterlerini büyük harfe dönüştürün

console.log(challenge.toUpperCase());

//? Exercise 5:
//^^ Change all the string characters to lowercase letters using toLowerCase() method
//^^ toLowerCase () yöntemini kullanarak tüm dize karakterlerini küçük harfe dönüştürün

console.log(challenge.toLowerCase());

//? Exercise 6:
//^^ Cut (slice) out the first word of the string using substr() or substring() method
//^^ substr () veya substring () yöntemini kullanarak dizenin ilk kelimesini kesin (dilimleyin)
console.log(challenge.substring(0, 2));

//? Exercise 7:
//^^ Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
//^^ 30 Days Of JavaScript'ten Days Of JavaScript ifadesini kesin.

console.log(challenge.substring(3)); //*Days Of JavaScript
console.log(challenge.substr(3)); //*Days Of JavaScript
console.log(challenge.slice(3)); //*Days Of JavaScript

//? Exercise 8:
//^^ Check if the string contains a word Script using includes() method
//^^ includes () yöntemini kullanarak dizenin Script kelimesini içerip içermediğini kontrol edin

console.log(challenge.includes("Script")); //*true

//? Exercise 9:
//^^ Split the string into an array using split() method
//^^ split () yöntemini kullanarak string i bir array a ayırın

console.log(challenge.split()); //*["30 Days Of JavaScript"]

//? Exercise 10:
//^^ Split the string 30 Days Of JavaScript at the space using split() method
//^^ split () yöntemini kullanarak dizeyi boşluk lar ile 30 Gün JavaScript olarak ayırın

console.log(challenge.split(" ")); //*["30", "Days", "Of", "JavaScript"]

//? Exercise 11:
//^^ 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
//^^ Dizeyi virgülden ayırın ve bir diziye değiştirin.

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(",")); //*["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

//? Exercise 12:
//^^ Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
//^^ replace () yöntemini kullanarak 30 Days Of JavaScript'i 30 Days Of Python olarak değiştirin.

console.log(challenge.replace("JavaScript", "Python")); //*30 Days Of Python
