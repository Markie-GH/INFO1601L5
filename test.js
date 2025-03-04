let person = {
    // key : value
    "name": "John",
    "age": 12
  };
  
  //we can print the values of a key in two ways
  console.log(person["age"]);//Using an index
  console.log(person.name);//referencing the key as a property
  
  person["weight"] = 70;
  
  person.marks = [67, 34, 55, 89];
  
  let firstMark = person.marks[0];
  
  //mixing array and objects
  let people = [
    person,
    {
      name: "Jane",
      age: 23,
      marks: [51, 78, 99, 76]
    }
  ];
  
  let johnClone = {};//empty object
  
  //copying objects
  Object.assign(johnClone, person);
  
  console.log(johnClone);
  
  
  console.log(people[0].marks[0]);//what is printed?