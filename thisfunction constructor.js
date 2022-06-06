function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;

    this.name = function() {
      return this.firstName + " " + this.lastName;
    };
  }
  var hridoy= new Person("forhad hossain","redoy",23,"red")
  console.log(hridoy)
  console.log(hridoy.name())