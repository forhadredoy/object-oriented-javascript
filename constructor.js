function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather,myMother);
myFather.nationality="bangla";


myFather.name = function () {
    return this.firstName + " " + this.lastName;
  };
  console.log(myFather.name()+" "+myFather.nationality);