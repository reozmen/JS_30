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

//? Exercise 13:
//^^ What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
//^^ '30 Days Of JavaScript' dizesindeki 15. dizindeki karakter nedir? charAt () yöntemini kullanın.

console.log(challenge.charAt(15)); //*S

//? Exercise 14:
//^^ What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
//^^ charCodeAt () kullanarak '30 Days Of JavaScript' dizesindeki J karakterinin karakter kodu nedir

console.log(challenge.indexOf("J")); //*11
console.log(challenge.charCodeAt(11)); //*74

//? Exercise 15:
//^^ Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
//^^ 30 Days Of JavaScript'teki a 'nın ilk oluşumunun konumunu belirlemek için indexOf'i kullanın

console.log(challenge.indexOf("a")); //*4

//? Exercise 16:
//^^ Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
//^^ 30 Days Of JavaScript'teki a 'nın son oluşumunun konumunu belirlemek için lastIndexOf'i kullanın.

console.log(challenge.lastIndexOf("a")); //*14

//? Exercise 17:
//^^ Use indexOf to find the position of the first occurrence of the word because in the following sentence:
//^^ 'You cannot end a sentence with because because because is a conjunction'

//^^ aşağıdaki cümlede because kelimesinin ilk oluşumunun konumunu bulmak için indexOf'i kullanın:

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because")); //*31

//? Exercise 18:
//^^ Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
//^^ 'You cannot end a sentence with because because because is a conjunction'

//^^ aşağıdaki cümlede because kelimesinin son oluşumunun konumunu bulmak için lastIndexOf'i kullanın:

console.log(sentence.lastIndexOf("because")); //*47

//? Exercise 19:
//^^ Use search to find the position of the first occurrence of the word because in the following sentence:
//^^ 'You cannot end a sentence with because because because is a conjunction'

//^^ aşağıdaki cümlede because kelimesinin ilk oluşumunun konumunu bulmak için arama yapın:

console.log(sentence.search("because")); //*31

//? Exercise 20:
//^^ Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
//^^ Bir dizenin başlangıcındaki ve sonundaki gereksiz boşlukları kaldırmak için trim () kullanın. Örn. '30 Gün JavaScript'.

let str = " 30 Days Of JavaScript ";
console.log(str.trim()); //*30 Days Of JavaScript

//? Exercise 21:
//^^ Use startsWith() method with the string 30 Days Of JavaScript and make the result true
//^^ 30 Days Of JavaScript dizesiyle startsWith () yöntemini kullanın ve sonucu true yapın

console.log(challenge.startsWith("30 Da")); //*true

//? Exercise 22:
//^^ Use endsWith() method with the string 30 Days Of JavaScript and make the result true
//^^ 30 Days Of JavaScript dizesiyle endsWith () yöntemini kullanın ve sonucu true yapın

console.log(challenge.endsWith("Of JavaScript")); //*true

//? Exercise 23:
//^^ Use match() method to find all the a’s in 30 Days Of JavaScript
//^^ 30 Days Of JavaScript'teki tüm a'ları bulmak için match () yöntemini kullanın

console.log(challenge.match(/a/g)); //*["a", "a", "a"]

//? Exercise 24:
//^^ Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
//^^ concat () ve '30 Gün' ve 'JavaScript' i birleştirerek tek bir dize haline getirin, '30 Gün JavaScript'

let str1 = "30 Days of";
let str2 = "JavaScript";
console.log(str1.concat(" ", str2)); //*30 Days of JavaScript

//? Exercise 25:
//^^ Use repeat() method to print 30 Days Of JavaScript 2 times
//^^ repeat () yöntemini kullanarak 30 Days Of JavaScript 2 kez yazdırın

console.log(challenge.repeat(2)); //*30 Days Of JavaScript30 Days Of JavaScript

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//?   LEVEL 2
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Exercise 1:
//^^ Using console.log() print out the following statement:
//^^ console.log () kullanarak aşağıdaki ifadeyi yazdırın:

//^^ The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
); //*The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

//? Exercise 2:
//^^ Using console.log() print out the following quote by Mother Teresa:
//^^ console.log () kullanarak Mother Teresa'nın aşağıdaki alıntısını yazdırın:

//^^ "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same with charity you give love, so don't just give money but reach out your hand instead."

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same with charity you give love, so don't just give money but reach out your hand instead."
);

//? Exercise 3:
//^^ Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
//^^ typeof '10' 10'a tam olarak eşitse kontrol edin. Eğer değilse tam olarak eşit yapın.

let num = "10";
let num1 = 10;
console.log(num === num1); //*false

console.log(typeof num1); //*number
console.log(typeof num); //*string
console.log(typeof parseInt(num)); //*number

//? Exercise 4:
//^^ Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
//^^ parseFloat ('9.8') 10'a eşitse kontrol edin, değilse tam olarak 10'a eşit yapın.

let num2 = "9.8";
let num3 = 10;
console.log(num2 === num3); //*false

console.log(typeof num2); //*string
console.log(typeof parseFloat(num2)); //*number
console.log(Math.ceil(num2)); //*10

//? Exercise 5:
//^^ Check if 'on' is found in both python and jargon
//^^ 'on' hem python hem de jargon'da bulunuyor mu kontrol edin

let str3 = "python";
let str4 = "jargon";
console.log(str3.includes("on")); //*true
console.log(str4.includes("on")); //*true

//? Exercise 6:
//^^ I hope this course is not full of jargon. Check if jargon is in the sentence.
//^^ Umarım bu kurs jargonla dolu değil. Jargon cümlede var mı kontrol edin.

let str5 = "I hope this course is not full of jargon";
console.log(str5.includes("jargon")); //*

//? Exercise 7:
//^^ Generate a random number between 0 and 100 inclusively.
//^^ 0 ile 100 arasında rastgele bir sayı üretin.

console.log(Math.ceil(Math.random() * 100)); //* 1-100 arası sayı üretir

//? Exercise 8:
//^^ Generate a random number between 50 and 100 inclusively.
//^^ 50 ile 100 arasında rastgele bir sayı üretin.

console.log(Math.ceil(Math.random() * 50) + 50); //* 50-100 arası sayı üretir

//? Exercise 9:
//^^ Generate a random number between 0 and 255 inclusively.
//^^ 0 ile 255 arasında rastgele bir sayı üretin.

console.log(Math.ceil(Math.random() * 255)); //* 0-255 arası sayı üretir
// console.log(Math.floor(Math.random() * 256));

//? Exercise 10:
//^^ Access the 'JavaScript' string characters using a random number.
//^^ Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.

let str6 = "JavaScript";
let random = Math.floor(Math.random() * str6.length);
console.log(str6[random]);

//? Exercise 11:
//^^ Use console.log() and escape characters to print the following pattern.
//^^ Aşağıdaki deseni yazdırmak için console.log () ve kaçış karakterlerini kullanın.

//^^ 1 1 1 1 1
//^^ 2 1 2 4 8
//^^ 3 1 3 9 27
//^^ 4 1 4 16 64
//^^ 5 1 5 25 125

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//? Exercise 12:
//^^ Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
//^^ Aşağıdaki cümleden 'because because because' ifadesini kesmek için substr kullanın

let str7 =
  "You cannot end a sentence with because because because is a conjunction";

console.log(str7.substr(31, 23)); //*because because because

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//?   LEVEL 3
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Exercise 1:
//^^ 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
//^^ 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Bu cümledeki aşk kelimesinin sayısını sayın.

let str8 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log(str8.match(/love/gi).length); //*3

//? Exercise 2:
//^^ Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//^^ Aşağıdaki cümledeki tüm because sayısını saymak için eşleşmeyi kullanın: 'You cannot end a sentence with because because because is a conjunction'

let str9 =
  "You cannot end a sentence with because because because is a conjunction";

console.log(str9.match(/because/gi).length); //*3

//? Exercise 3:
//^^ Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//^^ Aşağıdaki metni temizleyin ve en sık kullanılan kelimeyi bulun (ipucu, replace ve regular expressions kullanın).

let str10 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let str11 = str10.replace(/[^a-zA-Z ]/g, "");
console.log(str11);

//? Exercise 4:
//^^ Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
//^^ Aşağıdaki metinden sayıları çıkararak kişinin toplam yıllık gelirini hesaplayın. 'Aylık maaşından 5000 euro, yıllık bonus 10000 euro, aylık 15000 euro online kurs kazanıyor.'

let str12 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let str13 = str12.match(/\d+/g);
console.log(str13); //*["5000", "10000", "15000"]

salary = parseInt(str13[0]);
bonus = parseInt(str13[1]);
onlineCourses = parseInt(str13[2]);

console.log(salary * 12 + bonus + onlineCourses * 12); //*250000
