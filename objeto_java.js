var dojo = {};                                 // crea un objeto vacío
dojo = {
  name: 'Coding Dojo',                         // la propiedad puede almacenar un string
  number_of_students: 25,                      // la propiedad puede almacenar un número
  instructors: ['Andrew', 'Michael', 'Jay'],   // la propiedad puede almacenar arrays
  location: {                                  // ¡la propiedad puede incluso almacenar otro objeto!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}                                              // accede a las propiedades del objeto con notación de punto (.)
console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["instructors"]);

dojo.snacks = ['Fig Bars', 'Bagels', 'Popcorn', 'Apples'];

console.log(dojo["snacks"]);  //agregar una nueva clave

dojo.number_of_students = 40;         // podemos reasignar cualquiera de las propiedades
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";

console.log(dojo);

console.log(dojo.location.state)

