//Calcular a soma dos números pares de 1 a 100:


let soma = 0

for (let i = 0; i <= 100; i++) {
    if(i % 2 == 0){
        soma += i
    }
      
}

console.log(soma)
