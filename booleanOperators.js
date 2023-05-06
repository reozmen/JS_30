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

//? +
//? x + y ---- toplama

let num7 = 6;
let num8 = 1;
let sum = num7 + num8;
console.log("sum", sum);

//? -
//? x - y ---- çıkarma

let num9 = 6;
let num10 = 1;
let sub = num9 - num10;
console.log("sub", sub);

//? *
//? x * y ---- çarpma

let num11 = 6;
let num12 = 1;
let mult = num11 * num12;
console.log("mult", mult);

//? /
//? x / y ---- bölme

let num13 = 6;
let num14 = 1;
let div = num13 / num14;
console.log("div", div);

//? %
//? x % y ---- mod alma

let num15 = 6;
let num16 = 4;
let mod = num15 % num16;
console.log("mod", mod);

//? **
//? x ** y ---- üs alma

let num01 = 6;
let num02 = 4;
let pow = num01 ** num02;
console.log("pow", pow);

//? ++
//? ++x ---- x değerini 1 arttırır ve yeni değeri döndürür

let num17 = 6;
num17++;
console.log("num17", num17);

//? --
//? --x ---- x değerini 1 azaltır ve yeni değeri döndürür

let num18 = 6;
num18--;
console.log("num18", num18);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/
//^^ Comparison Operators
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/

//? ==
//? x == y ---- x ve y değerleri eşitse true döner

let num19 = 6;
let num20 = 6;
console.log(num19 == num20); //* true

//? ===
//? x === y ---- x ve y değerleri eşitse ve aynı türden ise true döner

let num21 = 6;
let num22 = "6";
console.log(num21 === num22); //* false

//? !=
//? x != y ---- x ve y değerleri eşit değilse true döner

let num23 = 6;
let num24 = 6;
console.log(num23 != num24); //* false

//? !==
//? x !== y ---- x ve y değerleri eşit değilse ve aynı türden değilse true döner

let num25 = 6;
let num26 = "6";
console.log(num25 !== num26); //* true

//? >
//? x > y ---- x değeri y değerinden büyükse true döner

let num27 = 6;
let num28 = 6;
console.log(num27 > num28); //* false

//? >=
//? x >= y ---- x değeri y değerinden büyük veya eşitse true döner

let num29 = 6;
let num30 = 6;
console.log(num29 >= num30); //* true

//? <
//? x < y ---- x değeri y değerinden küçükse true döner

let num31 = 6;
let num32 = 6;
console.log(num31 < num32); //* false

//? <=
//? x <= y ---- x değeri y değerinden küçük veya eşitse true döner

let num33 = 6;
let num34 = 6;
console.log(num33 <= num34); //* true

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/
//^^ Logical Operators
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/

//? &&
//? x && y ---- x ve y değerlerinin her ikisi de true ise true döner

let num35 = 6;
let num36 = 6;
console.log(num35 == num36 && num35 === num36); //* true

//? ||
//? x || y ---- x veya y değerlerinden biri true ise true döner

let num37 = 6;
let num38 = "6";
console.log(num37 == num38 || num37 === num38); //* true

//? !
//? !x ---- not operatörü -- x değeri false ise true döner, true ise false döner

let num39 = 6;
let num40 = 6;

console.log(!(num39 == num40 && num39 === num40)); //* false
