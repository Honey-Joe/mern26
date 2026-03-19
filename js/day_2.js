arr  = [1,2,3,"hello",5]

console.log(arr[3])

arr[2] = true 

console.log(arr.length)
arr.push("joe")
arr.unshift(false)
arr.pop()
arr.shift()
arr.splice()
console.log(arr)

//Object 

obj = {
    name : "Joe",
    age : 23,
    city : "Chennai"
}

// Dot Notation 

// Bracket Notation
console.log(obj)
console.log(obj.age) // Dot Notaion
console.log(obj["name"]) // Object Notation 

obj.name = "Honey"

obj["name"] = "Hari"

obj.qualification = "MCA"
obj["college"] = "CEG"
console.log(obj)

delete obj.name
delete obj["qualification"]
console.log(obj)