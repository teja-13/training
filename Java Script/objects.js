//literal way

let data = {
  name: "teja",
  role: "developer",
  age: 20,
  rollno: 524,
  skills: [
    "System Design",
    "Micro Services",
    "Monolithic Architecture",
    "Event driven",
    "DB Design",
  ],
  address: {
    doorno: "1-20",
    city: "Guntur",
    pincode: 522508,
  },
};

console.log(data);

//new keyword

let data2 = new Object({
  name: "teja",
  role: "developer",
  age: 20,
  rollno: 524,
  skills: [
    "System Design",
    "Micro Services",
    "Monolithic Architecture",
    "Event driven",
    "DB Design",
  ],
  address: {
    doorno: "1-20",
    city: "Guntur",
    pincode: 522508,
  },
});

console.log(data2);

console.log(data.skills[3]);

data.age = 21;
console.log(data.address.city);

data.skills.map((z) => {
  console.log(z);
});

delete data.role;
console.log(data);

console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));

Object.seal(data2);
//seal prevents adding and deleting data to object
//freeze prevents all 3 and allows only read

data.email = "teja@gmail.com";
data.phno = 7896541230;
console.log(data);

