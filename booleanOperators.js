let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; //* true
let falseValue = 4 < 3; //* false

//^^ TRUTHY VALUES

//* 0 hariç tüm number değerler
//* ""(boş string) hariç tüm string değerler
//* the boolean true

//^^ FALSY VALUES

//* 0
//* 0n
//* //* null
//* undefined
//* NaN
//* the boolean false
//* '', "", ``, empty string

let firstName;
console.log(firstName); //*not defined, because it is not assigned to a value yet

let empty = null;
console.log(empty); //* -> null , means no value

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/
//^^ Asignment Operators
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/

//?  =
//? x = y  ---- y  değeri  x değişkeninde saklanır

let num = 6; //* = is an assignment operator

//? +=
//? x += y ---- x = x + y

let num1 = 6;
num1 = num1 + 1;
num1 += 1;

//? -=
//? x -= y ---- x = x - y

let num2 = 6;
num2 = num2 - 1;
num2 -= 1;

//? *=
//? x *= y ---- x = x * y

let num3 = 6;
num3 = num3 * 1;
num3 *= 1;

//? /=
//? x /= y ---- x = x / y

let num4 = 6;
num4 = num4 / 1;
num4 /= 1;

//? %=
//? x %= y ---- x = x % y

let num5 = 6;
num5 = num5 % 1;
num5 %= 1;

//? **=
//? x **= y ---- x = x ** y

let num6 = 6;
num6 = num6 ** 1;
num6 **= 1;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/
//^^ Arithmetic Operators
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/
