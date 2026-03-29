// console.log("Log 1 ");
// setTimeout(() => {
//     console.log("Log 2")
// }, 2000);
// console.log("Log 3")

console.log(fetch("https://dummyjson.com/users"))

fetch("https://dummyjson.com/users").then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data.users[0])
}).catch((err)=>{
    console.log(err)
})
