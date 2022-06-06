function Person (first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  var hridoy = new Person ( "forhad hossain","Redoy",24,"red");
  
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };
  console.dir (hridoy);
  console.dir (hridoy.name());