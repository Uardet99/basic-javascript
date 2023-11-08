// CREACION DE CLASES //

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  getInfo() {
    return this.name + " " + this.level; 
  }
}

const heroA = new Hero("Superman", 10);
console.log(heroA.getInfo());