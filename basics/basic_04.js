// number conversion 
//basic operations are given below:- 

console.log(98 + 76); // addition
console.log(98 - 76); // substraction
console.log(9 * 6); // multiplication
console.log(2 ** 6); // power
console.log(98 / 6); // division
console.log(867 % 7); // modulo

// String addition 
let str_1  = "raghav"
let str_2 = "gupta"
let str_3 = str_1 + str_2
console.log(str_3);

// the confusion occurs when different datatypes operation perfroms becasue it reduce the code readability

console.log("1" + 2);
console.log(1 + "2"); // it is quite understandable 

console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
console.log("4" + 2 + "3"); //423
 // to understand this kind of complexing there is guideline defined by ECMA that is ToPrimitive

 console.log(true); //true
 console.log(+true); // 1 bcz true is boolean value no increment but convert as number
 console.log(+""); //0
// console.log(true+) will give error

//datatypes comparision
// basic camparision are given below:-

console.log(22 > 11);
console.log(12 >= 21);
console.log(232 == 111);
console.log(24 < 10);
console.log(2 != 1);
// output will either true or false

// problem occurs when different datatype comparision occurs

console.log("2" > 1); //true
console.log("202" >= 2); //true
console.log(421 != "421"); //false 
//these kind of camparision js converts automatically strings as number but prablem occures because sometimes it not gives predictable output
// so ensure datatypes should be same

console.log(null > 0); // false
console.log(null >= 0); //false
console.log(null == 0); // true because null converted as 0 due to value conversion problem

console.log(undefined > 0); //false
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false
console.log(undefined == 0); //false

