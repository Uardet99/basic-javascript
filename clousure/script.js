var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
})();

console.log(add()); // Devuelve 1
console.log(add()); // Devuelve 2