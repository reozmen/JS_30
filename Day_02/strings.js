//^--------------------------------------------//
//^^ STRINGS  //
//^--------------------------------------------//

//? Strings , single tırnak , double tırnak , back-tick tırnak  arasında yazılan metinlerdir . Bir string bildirmek için, bir değişken adına, atama operatörüne, tek tırnak, çift tırnak veya ters tırnak altında bir değere ihtiyacımız var. Bazı dize örnekleri görelim:

console.log("*************STRINGS*************");
let space = " "; //~ an empty space string
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

//^ String Concatenation (String Birleştirme)
//? İki veya daha fazla string i birbirine bağlamaya concatenate denir.

let fullName = firstName + space + lastName; //~ concatenation, merging two string together.
console.log(fullName);

//? farklı veri türlerini birleştirme;
let age = 25;

let fullNames = firstName + space + lastName;
let personInfoOne = fullNames + ". I am " + age + ". I live in " + country; //~ ES5 string ekleme yöntemi ES6 ile gelen template literals ile daha kolay hale geldi.

console.log(personInfoOne);

//^ Uzun Stringler

//? Bir string, tek bir karakter veya paragraf veya bir sayfa olabilir. String uzunluğu çok büyükse, bir satıra sığmaz. String in bir sonraki satırda devam edeceğini belirtmek için her satırın sonundaki ters bölü karakterini (\) kullanabiliriz.
//? (\) ters bölü karakteri, kullanmazsak, JavaScript bir hata verir. Bir sonrakin satırda yazının devam edeceğini JS algılayamaz..

const paragraph =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";

console.log(paragraph);

document.getElementsByTagName("body")[0].innerHTML = paragraph;

//? Stringlerdeki özel karakterler, kaçış karakterleri
//? \n: new line
//? \t: Tab, means 3 spaces
//? \\: Back slash
//? \': Single quote (')
//? \": Double quote (")

console.log("***************KAÇIŞ KARAKTERLERİ***************");
console.log(
  "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
); //~ line break - \n dan sonraki yazı alt satıra geçer.
console.log("Days\tTopics\tExercises"); //~ tab - \t 3 boşluk bırakır.
console.log("Day 1\t3\t5");
console.log("Day 1   3   5");
console.log("Day 2\t3\t5");
console.log("Day 3\t3\t5");
console.log("Day 4\t3\t5");
console.log("This is a backslash  symbol (\\)"); //~ To write a backslash \ kendinden sonraki karakterin hatasız yazılmasını sağlar...
console.log('In every programming language it starts with "Hello, World!"');
//* console.log('In every programming language it starts with \'Hello, World!\'');
console.log("In every programming language it starts with 'Hello, World!'");
//* console.log("In every programming language it starts with \"Hello, World!\"");
console.log("The saying 'Seeing is Believing' isn't correct in 2020");

//^  Template Literals (Template Strings)
console.log("***************TEMPLATE LİTERALS***************");
//? Bir şablon dizesi oluşturmak için back tick kullanırız. Verileri bir şablon dizisinin içine ifadeler olarak enjekte edebiliriz. Verileri enjekte etmek için, ifadeyi $ işaretiyle başlayan bir süslü parantez ({}) içine alıyoruz. Aşağıdaki sözdizimine bakın.

console.log(`The sum of 2 and 3 is 5`); //~ data nın statik yazımı
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); //~ data nın dinamik yazımı

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //~ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);
console.log(`${a} is greater than ${b}: ${a > b}`);

//^---------------------------------------//
//^^ STRING METHODS //
//^---------------------------------------//

//^ length

let jss = "JavaScript";
console.log(jss.length); // 10
let namess = "Asabeneh";
console.log(namess.length); // 8

//^ Accessing characters in a string by index
//? Bir string in karakterlerine erişmek için, köşeli parantez içinde karakterin indeksini kullanırız. İndeks 0 dan başlar. İndeks 0, ilk karaktere, 1 ikinci karaktere, 2 üçüncü karaktere vb. Erişir.

let string = "JavaScript";
let firstLetter = string[0];

console.log(firstLetter); //* J

let secondLetter = string[1]; //* a
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter); //* t

let lastIndex = string.length - 1;

console.log(lastIndex); //* 9
console.log(string[lastIndex]); //* t

//^ toUpperCase() - toLowerCase()

let stringOne = "JavaScript";
console.log(stringOne.toUpperCase()); //* JAVASCRIPT

let stringTwo = "JavaScript";
console.log(stringTwo.toLowerCase()); //* javascript

//^ substr() : için başlangıç ​​dizini ve karakter sayısı olmak üzere iki bağımsız değişken gerekir.. substr deprecated oldu. yerine slice kullanılmalı.

let stringThree = "JavaScript";
console.log(stringThree.substr(4, 6)); //* Script

let stringFour = "JavaScript";
console.log(stringFour.substr(4, 4)); //* Scri

//^ substring() : Başlangıç ​​dizini ve durdurma dizini olmak üzere iki bağımsız değişken alır, ancak durdurma dizinindeki karakteri içermez.

let stringFive = "JavaScript";
console.log(stringFive.substring(0, 4)); //* Java

let stringSix = "JavaScript";
console.log(stringSix.substring(4)); //* Script

let stringEight = "JavaScript";
console.log(stringEight.substring(4, -1)); //* Java ... - index kabul etmez ve 0 dan pozitif olan index e kadar alır.

let stringNine = "JavaScript";
console.log(stringNine.substring(-8, 11)); //* Java ..... - index kabul etmez ve 0 dan pozitif olan index e kadar alır.

//^ slice() : Başlangıç ​​dizini ve durdurma dizini olmak üzere iki bağımsız değişken alır, ancak durdurma dizinindeki karakteri içerir.
console.log("***************SLİCE***************");

let stringSeven = "JavaScript";
console.log(stringSeven.slice(0, 4)); //* Java
console.log(stringSeven);
console.log(stringSeven.slice(4, 10)); //* Script
console.log(stringSeven.slice(4)); //* Script
console.log(stringSeven.slice(0, -2)); //* JavaScri

//^ split() : split yöntemi, belirtilen bir yerde bir dize böler.

let stringTen = "30 Days Of JavaScript";

console.log(stringTen.split()); //* Changes to an array -> ["30 Days Of JavaScript"]
console.log(stringTen.split(" ")); //* Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); //* split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //*  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//^^ trim() : Bir dizenin başındaki veya sonundaki sondaki boşluğu kaldırır.
let stringEleven = "   30 Days Of JavaScript   ";

console.log(stringEleven);
console.log(stringEleven.trim(" "));

//^^ include() : Bir alt dize bağımsız değişkeni alır ve dizede alt dize bağımsız değişkeninin olup olmadığını kontrol eder. include() bir boole değeri döndürür. Bir dizede bir alt dize varsa, true, aksi halde false döndürür.
let string12 = "30 Days Of JavaScript";

console.log(string12.includes("Days")); //* true
console.log(string12.includes("days")); //* false - it is case sensitive!
console.log(string12.includes("Script")); //* true
console.log(string12.includes("script")); //* false
console.log(string12.includes("java")); //* false
console.log(string12.includes("Java")); //* true

//^^ replace() : parametre olarak eski alt dizeyi ve yeni bir alt dizeyi alır.
//^^ string.replace(oldsubstring, newsubstring)

let string13 = "30 Days Of JavaScript";
console.log(string13.replace("JavaScript", "Python")); //* 30 Days Of Python

let country1 = "Finland";
console.log(country1.replace("Fin", "Noman")); //* Nomanland

//^^ charAt() : Dizini alır ve o dizindeki değeri döndürür

let string14 = "30 Days Of JavaScript";
console.log(string14.charAt(0)); //* 3

let lastIndex14 = string.length - 1;
console.log(string14.charAt(lastIndex)); //* t

//^ charCodeAt() : İndeksi alır ve o indeksteki değerin char kodunu (ASCII numarası) döndürür.

let string15 = "30 Days Of JavaScript";
console.log(string15.charCodeAt(3)); //* D ASCII number is 68

let lastIndex15 = string15.length - 1;
console.log(string15.charCodeAt(lastIndex15)); //* t ASCII is 116

//^ indexOf() : Verilen değeri bulduğu ilk konumunu döndürür, yoksa -1 döndürür

let string16 = "30 Days Of JavaScript";

console.log(string16.indexOf("D")); //* 3
console.log(string16.indexOf("Days")); //* 3
console.log(string16.indexOf("days")); //* -1
console.log(string16.indexOf("a")); //* 4
console.log(string16.indexOf("JavaScript")); //* 11
console.log(string16.indexOf("Script")); //*15
console.log(string16.indexOf("script")); //* -1

//^ lastIndexOf() : Verilen değeri string in sonundan başına doğru yönde bulduğu ilk konumunu döndürür, yoksa -1 döndürür

//^ concat() : birçok alt diziyi alır ve onları birleştirir.

let string17 = "30";
console.log(string17.concat("Days", "Of", "JavaScript")); //* 30DaysOfJavaScript

let country17 = "Fin";
console.log(country17.concat("land")); //* Finland

//^^ StartsWith() : stringin verilen değerle başlayıp başlamadığını kontrol eder. Bir boole (doğru veya yanlış) döndürür.

let string18 = "Love is the best to in this world";

console.log(string18.startsWith("Love")); //* true
console.log(string18.startsWith("love")); //* false
console.log(string18.startsWith("world")); //* false

//^^ endWith() : stringin verilen değerle bitip bitmediğini kontrol eder. Bir boole (doğru veya yanlış) döndürür.

let string19 = "Love is the most powerful feeling in the world";

console.log(string19.endsWith("world")); //* true
console.log(string19.endsWith("love")); //* false
console.log(string19.endsWith("in the world")); //* true

//^ search() : bağımsız değişken olarak bir string alır ve ilk eşleşmenin dizinini döndürür. bulamazsa -1 döndürür..

let string20 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string20.search("love")); //* 2
console.log(string20.search("javascript")); //* -1 ... it is case sensitive
console.log(string20.search("JavaScript")); //* 7

//^ repeat() : stringi belirtilen sayıda tekrarlar.

let string21 = "Love is the best thing in this world";
console.log(string21.repeat(10)); //*
