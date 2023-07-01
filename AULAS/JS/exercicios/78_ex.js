// Escreva um programa que verifique se um número fornecido pelo usuário é um número perfeito.

let numberSelect = 6;

let soma = 0;

for (let i = 1; i < numberSelect; i++) {
        if (numberSelect % i === 0) {
                soma += i;
        }
}
if (numberSelect === soma) {
        console.log(`${numberSelect} é um número prfeito`);
        console.log(numberSelect + " é um número prfeito");
} else {
        console.log(`${numberSelect} não é um número prfeito`);
}