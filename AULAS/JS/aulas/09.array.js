/*let nomes = ["bruno", "danilo", "murilo", "manoel", "gomes"];

console.log(nomes);
console.log(nomes[4]);

nomes [3] = "kasinao";
console.log(nomes);
console.log(nomes.length);

let i = 0

while( i < nomes.length){
    console.log(nomes[1]);
    i++
}*/

let numeros = [10, 17, 13, 22, 5];
let i = 0;
let soma = 0;

console.log(numeros.length)
console.log(numeros[2])

while (i < numeros.length){
    soma += numeros[i];
    i++;
}

console.log(soma)