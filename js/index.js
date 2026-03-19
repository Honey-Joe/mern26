// console.log("Hello")

// a = 5

// console.log(a)

// a = 'hello'

// console.log(a)
{
    const a = 10
    // a=5
    console.log(a)
}

// console.log(a)

// Data Types - Primitive and Non Primitive 

num = 10
str = "hello"
bool = true
a  = null 
b = undefined
console.log(typeof(num))
console.log(typeof(str))
console.log(typeof(bool))
console.log(a)
console.log(typeof(b))

//Non Primitive 

arr = [1,"hello" , true , null , [12] , {
    name : "Jane"
}]
console.log(arr)

obj = {
    name : "John",
    age : 30,
    isStudent : true,
    arr : [1,2],
    obj : {name : "Jane"}
}

console.log(obj)

// Operators

// Arithmetic Operators
// + - * / % **
a = 10+20
b = "30"
c = 10*5
d = 10/2
e = 10%3
f = 2**3

console.log(a,b,c,d,e,f)

//Relational Operator
// > < >= <= == != === !==

if(a === b && a >= b){
    console.log("True")
}else{
    console.log("False")
}

//Logical Operators

// && || !

const ter = a >= b ? "Greater" : "Smaller"

console.log(ter)

function add(a,b){
    console.log(a+b)
}

add(10,20)

a = function(){
    console.log("Hello")
}

a()

const arrow  = ()=>{
    console.log("Hello")
}

arrow()
i = 5
while(i < 5){
    console.log(i)
    i++
}

j = 5
do {
    console.log(j)
    j++
} while (j<5);

for(i = 0 ; i < 5 ; i++){
    console.log(i)
}
