// OBJETO BASICO//
let user = { name: "Jhon", age: 30 };

// COMPROBAR INFORMACION //

console.log("age" in user); // Devuelve true
console.log("job" in user); // Devuelve false porque no existe

// OBJETO //
let usuario = { name: "Jhon", age: 30, isAdmin: true };

for (const key in usuario) {
  console.log(key + ": " + usuario[key]); // Devolvera la clave y sus datos correspondientes
}

// OBJETOS CON FUNCIONES //

function Apple(type) {
  this.type = type;
  this.color = "red";
  this.getInfo = function () {
    return "Tipo: " + this.type + " Color: " + this.color;
  };
}

let manzana = new Apple("Silvestre");

console.log(manzana.getInfo());

// OBJETOS LITERALES //

let car = {
  type: "berlina",
  color: "rojo",
  combustible: "diesel",
  motor: "1.9 TDI",
  anio: "2006",
  marca: "volkswagen golf",
  getInfo: function () {
    return (
      this.type +
      " " +
      this.color +
      " " +
      this.combustible +
      " " +
      this.motor +
      " " +
      this.anio +
      " " +
      this.marca
    );
  },
};

console.log(car.getInfo());

// SINGLETON CON UNA FUNCION //

var raqueta = new (function () {
  this.type = "ataque";
  this.color = "azul";
  this.marca = "head";
  this.getInfo = function () {
    return this.type + " " + this.color + " " + this.marca;
  };
});

console.log(raqueta.getInfo());

// OBJETO LINKAGE //

var homework = {
    topic: "JS"
};

var otherHomework = Object.create(homework);

console.log(otherHomework.topic);