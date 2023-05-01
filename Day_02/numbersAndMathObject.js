//^------------------------------------------------//
//^ NUMBERS ------//
//^------------------------------------------------//

//*Numbers, tüm aritmetik işlemleri yapabilen tam sayılar ve ondalık değerlerdir.

let age = 35;
const gravity = 9.81; //~ Değişmeyen değerler için const kullanılmalıdır.. Yerçekimi sabit bir değerdir.
let mass = 72; //~ mass in Kilogram
const PII = 3.14; //~ Pİ sayısı sabit bir değerdir.

//? More Examples
const boilingPoint = 100; //~ Suyun kaynama noktası, sabit bir değerdir.

const bodyTemp = 37; //~ Ortalama insan vücut sıcaklığı, sabit bir değerdir.

//* Değişmeyen değerler için değişken adı büyük harflerle de yazılabilir. Bu, değişkenin sabit olduğunu gösterir.. Örnek: const PI = 3.14; const BOILING_POINT = 100; const BODY_TEMP = 37; ... Değişmeyen değerlerin değişken isimleri için bu gübü örneklerle de karşılaşabilirsiniz.

console.log(age, gravity, mass, PII, boilingPoint, bodyTemp);

//^------------------------------------------------//
//^ MATH OBJECT ------//
//^------------------------------------------------//

//* Math Object, matematiksel işlemler yapmamızı sağlayan bir objedir. Math objesinin içinde birçok matematiksel fonksiyon bulunur.
console.log("****************************************");
const PI = Math.PI;

console.log(PI); //~ 3.141592653589793

//? Math.round() - Sayıyı en yakın tam sayıya yuvarlar.
//? .5 ve üstüyse yukarı yuvarlar, .5 altındaysa aşağı yuvarlar.

console.log("**********ROUNDING**********");
console.log(Math.round(PI)); //~ 3
console.log(Math.round(9.81)); //~ 10
console.log(Math.floor(PI)); //~ 3 -- floor aşağı yuvarlar --3.9 u 3 e yuvarlar
console.log(Math.ceil(PI)); //~ 4  -- ceil yukarı yuvarlar -- 3.1 i 4 e yuvarlar

console.log("**********MIN MAX**********");
console.log(Math.min(-5, 3, 20, 4, 5, 10)); //~ -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); //~ 20, returns the maximum value

console.log("**********RANDOM NUMBERS**********");
//? Math.random() - 0 ile 0.999999 arasında rastgele bir sayı üretir.

const randNum = Math.random(); //~ creates random number between 0 to 0.999999
console.log(randNum);

console.log("*******************************");
//?Square root
console.log(Math.sqrt(100)); //~ 10

console.log(Math.sqrt(2)); //~ 1.4142135623730951

//? Power
console.log(Math.pow(3, 2)); //~ 9
console.log(3 ** 2); //~ 9

//? Trigonometry

console.log(Math.sin(0));
console.log(Math.sin(60));
console.log(Math.cos(0));
console.log(Math.cos(60));

//? Şimdi, 0 ile 10 arasında rastgele bir sayı oluşturmak için random() yöntemini nasıl kullanabileceğimize bakalım:
console.log("*******************************");
let randomNum = Math.random(); //~ generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); //~ this gives: min 0 and max 10.99999

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); //~ en yüksek sayı 10.99999 olabileceği için floor ile sonucu aşağı yuvarlar ve 10 verir...
