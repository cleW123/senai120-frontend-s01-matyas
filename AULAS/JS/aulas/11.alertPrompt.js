/*let nome = prompt("digite seu nome")
alert("ola " + nome + " seja bem vindo")

let n1 = Number(prompt("digite o primeiro numero"))
let n2 = Number(prompt("digite o segundo numero numero"))

alert(n1 + n2)*/

let capNome = document.querySelector("#nome")
let nome 

let i = 1;

while(i<= 3){
    nome = prompt("digite um nome ");
    capNome.innerHTML += "<br>" + nome 
    i++
}
    