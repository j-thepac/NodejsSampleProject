var a = [1, "two", "three", 4];
if (a[0] == 1)
    console.log("equal")
else
    console.log("not")

for (i = 0; i <= a.length - 1; i++) console.log(i)
a.forEach(i => console.log(i))

const map1 = new Map();

map1.set('a', 1);
console.log(map1.get("a"))


const lib = require("./library.js")
console.log(lib.add(4, 2), lib.d);