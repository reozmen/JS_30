//^^ String den Number a cevirme

//^^ Number() methodu
//^^ parseInt() methodu
//^^ parseFloat() methodu
//^^ + operatoru .. string in önüne + koyarsak stringi number a cevirir

var num1 = "11";
var num2 = "22";

console.log(num1 + num2); //*1122

var num1 = "11";
var num2 = "22";

console.log(Number(num1) + Number(num2)); //*33

console.log(+num1 + +num2); //*33

console.log(parseInt(num1) + parseInt(num2)); //*33

console.log(parseFloat(num1) + parseFloat(num2)); //*33

let strFloat = "3.14";

//^^ Float to Int
console.log(parseInt(strFloat)); //*3 .. parseInt() methodu ile string i number a cevirirken noktadan sonrasını almaz

console.log(parseFloat(strFloat)); //*3.14 .. parseFloat() methodu ile string i number a cevirirken noktadan sonrasını alır

let strInt = "33";

console.log(parseInt(strInt)); //*33

console.log(parseFloat(strInt)); //*33 .. sayı float olmadığı için parseFloat tam değer verir.. 33.0 vermez..
