//Crie um array vazio e, usando um loop while, adicione os números pares de 1 a 20 no array.

let n = [];
let i = 1;


while(i <= 20){
    
    if(i % 2 == 0){
        n.push(i)
        console.log(i);
    }

    i++
}

console.log(n)
