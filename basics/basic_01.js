// to print a message or any thing in javascript we use console.log()
console.log("hey, this is the first practice of code in javascript") 

const stud_Id = "12204949" // const stands for constant, when you want not to change the value
let stud_Email = "raghugarg8@gmail.com" // let keyword used to declear variables that are block scoped 
var stud_password = "1234567890" // var used to simply declear a variable
stud_city = "kanpur" // in javascript without using keyword, also declear a variable, it occupies the same memory as others, but not a good idea
let stud_state 
// if you declear a variable and not give any value, it rerurns :- (undefined)


//print the values
console.log(stud_Id);
console.log(stud_Email);  //in js, semicolons are optional
console.log(stud_password)
console.log(stud_city)
console.log(stud_state);
//but it is like time taking and boring to print values like this one by one 
// so we can do another method like 

console.table([stud_Id, stud_Email, stud_city, stud_password, stud_state]) // it will print the values in tabuler form with index


/*
in java script to declear a variable and constant 
for constant:- 1 way, use const keyword
for variable:- 2 ways, var and let keywords
but var(not suppose to be used now)  why??
because in early days of javascript, there was an issue that it did not know the concept of scope(block scope)
wth var keyword if any other use same variable in other file and give value, it will change the values in all those files in which that name is used as variable 
so, that's why we use let keyword, it overcomes the drawback of var keyword*/