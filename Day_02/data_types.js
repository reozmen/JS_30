//^ 1. İlkel Veri Tipleri (Primitive Data Types)
//* PRIMITVE DATA TYPES

//? primitive veri türleri değiştirilemez (immutable) veri türleridir.

let firstName = "Ahmet";
console.log(firstName); //* Ahmet
console.log(typeof firstName); //* string

firstName[0] = "M";
console.log(firstName); //* Ahmet

//*𝗦𝘁𝗿𝗶𝗻𝗴𝗹𝗲𝗿 𝗱𝗲ğ𝗶ş𝘁𝗶𝗿𝗶𝗹𝗲𝗺𝗲𝘇 (𝗶𝗺𝗺𝘂𝘁𝗮𝗯𝗹𝗲) 𝘃𝗲𝗿𝗶 𝘁ü𝗿𝗹𝗲𝗿𝗶𝗱𝗶𝗿. 𝗕𝘂 𝘆ü𝘇𝗱𝗲𝗻 𝗳𝗶𝗿𝘀𝘁𝗡𝗮𝗺𝗲[𝟬] = "𝗠" 𝗶ş𝗹𝗲𝗺𝗶 𝗴𝗲𝗿ç𝗲𝗸𝗹𝗲ş𝗺𝗲𝘇. 𝗳𝗶𝗿𝘀𝘁𝗡𝗮𝗺𝗲 𝗱𝗲ğ𝗶ş𝗸𝗲𝗻𝗶 𝗵𝗮𝗹𝗮 "𝗔𝗵𝗺𝗲𝘁" 𝗼𝗹𝗮𝗿𝗮𝗸 𝗸𝗮𝗹ı𝗿.

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

//? === veri türünü de kontrol eder

let num1 = 10;
let num2 = "10";

console.log(num1 == num2); //* true
console.log(num1 === num2); //* false (veri türü farklı olduğu için)

//^ 2. İlkel Olmayan Veri Tipleri (Non-Primitive Data Types)

//* İlkel olmayan veri türleri değiştirilebilir (mutable) veri türleridir.
console.log("*************************************************");
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); //* [1, 2, 3, 4, 5]
console.log(typeof numbers); //* object

numbers[0] = 10;
console.log(numbers); //* [10, 2, 3, 4, 5]

//? Görüldüğü gibi non-primitive bir veri türü olan dizi değişkendir. İlkel olmayan veri türleri değere göre karşılaştırılamaz. İlkel olmayan iki veri türü aynı özelliklere ve değerlere sahip olsalar bile, kesinlikle eşit değildirler.

let numss = [1, 2, 3];
let numberss = [1, 2, 3];

console.log(numss == numberss); //! false

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

console.log(userOne == userTwo); //! false

//? Temel kural, ilkel olmayan veri türlerini karşılaştırmıyoruz. Array, function veya object leri karşılaştırmayın. İlkel olmayan değerlere, değer yerine referansa göre karşılaştırıldıkları için referans türleri denir. İki nesne, yalnızca aynı temel nesneye atıfta bulunuyorlarsa kesinlikle eşittir.

let numsx = [1, 2, 3];
let numbersx = numsx;

console.log(numsx == numbersx); //* true
