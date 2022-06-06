var person = {
    firstName: "forhad hossain",
    lastName: "redoy",
}
person.name = function(){
    return this.firstName + " " + this.lastName;
  }
  console.log ("my name is" +" "+person.name())
