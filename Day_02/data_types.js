//* PRIMITVE DATA TYPES

//? primitive veri türleri değiştirilemez (immutable) veri türleridir.

let firstName = "Ahmet";
console.log(firstName); //* Ahmet
console.log(typeof firstName); //* string

firstName[0] = "M";
console.log(firstName); //* Ahmet

//! Stringler değiştirilemez (immutable) veri türleridir. Bu yüzden firstName[0] = "M" işlemi gerçekleşmez. firstName değişkeni hala "Ahmet" olarak kalır.
