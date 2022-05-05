console.log("working");

// let name = [1,2,3,4,5,6,7];

//map1 preserves the order of insertions of key value pairs
//map1 also preserves the order of key i.e. it dosenot converts the keys to strings by default like what objects object does so, MAPS con store keys of any data types.

//how to create a map1

let map1 = new Map();

map1.set("name", "Ravi");
map1.set("age", 29);
map1.set(1, "one");
map1.set("phone", 9876543210);
map1.set(true, "ture");

console.log(map1.get("1"));
console.log(map1.get(1));
console.log(map1.get("name"));

console.log(map1.has("EMAIL"));

map1.delete(1);


// map1.clear()

console.log(map1);
console.log(map1.size);

for (let key of map1.keys()) {
    console.log(key);
}

for (let value of map1.values()) {
    console.log(value);
}

for (let entry of map1.entries()) {
    console.log(entry);
}

map1.forEach(function(value, key) {
    console.log(key, value);
})

// ......................................................................................................

//Sets has no keys and but only UNIQUE Values...
//Set can not give u key value pairs, but only value paires using .entries() method
let set1 = new Set();

set1.add("Apple");
set1.add("Banana");
set1.add("Oranges");
set1.add("Mangoes");
set1.add("Litchi");

console.log(set1);

console.log(set1.values());
console.log(set1.keys());
console.log(set1.entries());
console.log(set1.has("Kiwi"));

set1.delete("Banana");

console.log(set1.has("Banana"));

//set1.clear();
console.log(set1);

for (let key of set1.keys()) {
    console.log(key);
}

for (let value of set1.values()) {
    console.log(value);
}

for (let entry of set1.entries()) {
    let key = entry;
    // console.log(key1[1])
    console.log(key);
}

set1.forEach(function(value, key) {
    console.log(key, value);
})