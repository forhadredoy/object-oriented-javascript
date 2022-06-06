var object = {
    nam : "redoy",
    rool: 940926,
    date : new Date(),
}

console.log(JSON.stringify(object));
const person = {
    name: "John",
    age: function () {return 30;}
  };
  
  let myString = JSON.stringify(person);
  console.log(person);
  console.log(person.age.toString())