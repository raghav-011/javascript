// Datatype conversion in javascript:- it is like a nightmare, this is the basic conversion, that is given below

let score = 79 // numeric value we know
console.log(score);
// somtimes when work on backend and get the data from frontend or form values dont know that what is the exact type of value it is so to know what kind if it use
console.log(typeof score);
console.log(typeof(score)); // as a method passing

// to convert a string in number 
//1).
let str_1 = "689"
console.log(typeof str_1); //string

let val_1 = Number(str_1) 
console.log(typeof val_1); // number

//2).
let str_2 = "657ab"
let val_2 = Number(str_2)
console.log(val_2); //NaN :- not a number and this is true because 657ab is not a number
console.log(typeof val_2);

//3). 
let str_3 = "raghu"
let val_3 = Number(str_3)
console.log(val_3); //NaN
console.log(typeof val_3);

// null into number
let value = null
console.log(typeof value);
let val_4 = Number(value)
console.log(typeof val_4);
console.log(val_4); // 0

// undefined into number
let undef = undefined
console.log(typeof undef);
let val_5 = Number(undef)
console.log(val_5); //NaN
console.log(typeof val_5);

// boolean value into number

let isBool = true
let val_6 = Number(isBool)
console.log(typeof val_6);
console.log(val_6); //1 and if bool value is false then print 0


//converting 0/1 into boolean value
let isLogged = 1  // also put any number except 0 it will be true
console.log(typeof isLogged);
let bool_1 = Boolean(isLogged)
console.log(bool_1); //true if we put 0 then value will false 
console.log(typeof bool_1);

// converting string to bool
let str_4 = ""
console.log(typeof str_4);
let bool_2 = Boolean(str_4)
console.log(bool_2); // empty value = false
console.log(typeof bool_2); 

let str_5 = "raghu"
let bool_3 = Boolean(str_5)
console.log(bool_3); // any string value except = true
console.log(typeof bool_3);

//converting number into string
let num = 6527
let str_6 = String(num)
console.log(typeof str_6);

// converting boolean into string
let isValue = true  //can put false also
let str_7 = String(isValue)
console.log(typeof str_7);
console.log(str_7);

//converting null into string
let n = null
console.log(typeof n);
let str_8 = String(n)
console.log(str_8); 
console.log(typeof str_8);

//converting undefined into string
let un = undefined
console.log(un);
let str_9 = String(un)
console.log(typeof str_9);
console.log(str_9);