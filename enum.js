// Enums in Typescript are commonly used when you want to represent a set of related 
//             values and choose one value from multiple options. Enums provide a convenient way
//             to define a set of named values and associate them with specific meanings."
//             "In typescript, when enums constants are not explicitly assigned numeric values,
//             they are automatically assigned incremental numeric values starting from 0..
//             The default numeric value for the first enum constant  is 0 and subsequent 
//             enum constant is 0, and subsequent enum contants receive values incremented by 1."
//  An Enum is a special "class" that represents a groups of constants (unchangeable variables)
//  Enum comes in two flavors string and numeric       
//   Enum is the set of value
//   Enum return index or define index or return value
//--------------------------------------------------------------------------------------------------------------//
//                     Example
// enum Color{
//   Blue,//0
//   Yellow,//1
//   Red,//2
//   Black,//3
// }
// let favoriteColor:Color = Color.Blue
// console.log(favoriteColor);//return index 0
// let colorName = Color[0]
// console.log(colorName);//return color blue
//String Enum
// enum Fruits{
//   Grapes= "grapes",
//   Apple = "apple",
// }
// console.log(Fruits.Grapes);//return grapes
//numeric enum 
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Grapes"] = 300] = "Grapes";
    Fruits[Fruits["Apple"] = 500] = "Apple";
})(Fruits || (Fruits = {}));
console.log(Fruits.Apple); //return 500
