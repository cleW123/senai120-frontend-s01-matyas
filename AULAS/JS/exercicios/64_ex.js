//Dado um array com nomes, use um loop while para criar uma string concatenando todos os nomes separados por vírgula.


let n = ["matyas", "kauan", "joao", "felipe"];
let i = 0;

let result = ""

while(i < n.length){
    result += n[i] + ", " 
    i++
   
}
console.log(result)