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

//~ length

let jss = "JavaScript";
console.log(jss.length); // 10
let namess = "Asabeneh";
console.log(namess.length); // 8

//~ Accessing characters in a string by index
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
