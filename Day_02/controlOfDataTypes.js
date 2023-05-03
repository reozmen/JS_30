//^^ Belirli bir değişkenin veri türünü kontrol etmek için typeof yöntemini kullanırız .

let firstName = "Asabeneh"; //* string
let lastName = "Yetayeh"; //* string
let country = "Finland"; //* string
let city = "Helsinki"; //* string
let age = 25; //* number
let job; //* undefined, çünkü değer atamadık..
let array = []; //* object

console.log("Asabaneh :", typeof "Asabeneh"); //* string
console.log(typeof firstName); //* string
console.log("10 :", typeof 10); //* number
console.log(typeof 3.14); //* number
console.log(typeof true); //* boolean
console.log(typeof false); //* boolean
console.log(typeof NaN); //* number
console.log(typeof job); //* undefined
console.log(typeof undefined); //* undefined
console.log(typeof null); //* object
console.log(typeof array); //* object
