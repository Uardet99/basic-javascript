// FUNCION NORMAL //
function sumar(numA, numB) {
  let resultado = numA + numB;
  return resultado;
}
console.log("Funcion normal -> " + sumar(5, 5)); // Devuelve 10
// FUNCION COMO VARIABLE //
x = function (fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
};
console.log("Funcion como variable -> " + x(77)); // Devuelve 25
// AMBITO DE LAS VARIABLES EN FUNCIONES //
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
console.log("Ambito de variables en funciones -> " + addSquares(5, 5)); // Devuelve 50
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
console.log("Ambito de variables en funciones -> " + outside(3)(4)); // Devuelve 7
// FUINCIONES ANONIMAS //
var num = [0, 1, 2];
var doubledNums = num.map(function (element) {
  return element * 2;
});
console.log("Funcion anonima -> " + doubledNums); // Devuelve [0, 2, 4]
// FUNCIONES FLECHA //
const z = (x, y) => x * y;
console.log("Funcion flecha -> " + z(5, 5)); // Devuelve 25
// FUNCIONES AUTO-INVOCADAS //
var result = (function () {
  var aName = "Barry";
  return aName;
})();
console.log("Funcion auto-invocadas -> " + result);
