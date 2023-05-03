let dice1 = 0;
let dice2 = 0;
let arrayOfResults = [];

for (var i = 0; i < 36000; i++) {
    dice1 = getRandomInt(1, 7);
    dice2 = getRandomInt(1, 7);
    arrayOfResults.push(dice1 + dice2);
}

let resultado = [0,0,0,0,0,0,0,0,0,0,0,0];

for (var i = 0; i < arrayOfResults.length; i++) {
    resultado[arrayOfResults[i] - 1]++;
}

document.write(arrayOfResults);

for (var i = 0; i < 12; i++) {
    document.writeln(`<p>` + `El resultado ${i + 1} ha salido ${resultado[i]} veces` + `</p>`);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
