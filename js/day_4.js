function add(a, b) {
  return a + b();
}

const a = add(5, () => {
  return 5 + 10;
});

console.log(a)

// setinterval 

var set = setInterval(()=>{
    console.log("Hello")
}, 2000)

setTimeout(()=>{
    console.log("Print after 2 sec")
    clearInterval(set)
} , 7000)