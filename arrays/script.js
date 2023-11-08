// BUSCAR ARRAYS //

const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];

alligator.includes("thick scales"); // Devuelve true
console.log(alligator.find(componentesArray => componentesArray.length < 12)); // Devuelve '4 foot tail'
console.log(alligator.find((componenteArray, indiceArray) => typeof(componenteArray) === "string" && indiceArray === 2)); // Devuelve '4 foot tail'
console.log(alligator.indexOf("rounded snout"));
console.log(alligator.findIndex(componentesArray => componentesArray == "rounded snout"));
console.log(alligator.filter(componenteArray => componenteArray === 80));