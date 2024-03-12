// stack and heap memory concept
// Memory :- 2 types, stack and heap
//1). Stack:- uses in primitive datatype, you will get copy of the data
//2). Heap:- uses in non primitive datatype, get reference of original data

let val_1 = "raghav"
let another = val_1
console.log(another); //same value
another = "this is another input"
console.log(val_1); //raghav
console.log(another); //new value put in it
// but the value did not change in val_1 why?? while we assign another = val_1
// because change occures in copy not in original data


//heap memory
let user_1 = {
    email : "raghu@gmail.com",  // creating an object and putting values
    id : "1234"
}
console.log(user_1);

let user_2 = user_1

//now in non primitive datatypes, user_2 will get the values from the reference of user_1 not its copy 
user_1.email = "ram@yahoo.com"
console.log(user_2.email); // value is ram@yahoo.com
console.log(user_1.email); // in user_1 values also changed because user_2 using the reference of the original content not from the copy
