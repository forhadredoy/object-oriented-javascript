const person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(value) {
      this.language = value.toUpperCase();
    }
  };
  
  // Set a property using set:
  person.lang= "english";
  console.log(person.language);
  
  // Display data from t
