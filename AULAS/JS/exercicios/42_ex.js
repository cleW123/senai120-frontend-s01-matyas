//Crie um programa que pergunte ao usuário o número de um dia da semana (1 a 7) e exiba se é um dia útil ou um dia de fim de semana.

let = prompt("digite um dia da semana em numero do 1 ao 7");

let diaSemana = "dia util";
let mensagem = "segunda-feira";

switch (diaSemana){
    case "segunda-feira":
    case "terça-feira":
    case "quarta-feira":
    case "quinta-feira":
    case "sexta-feira":
        console.log("dia util")

        break;


    default:
        mensagem = "dia invalido"
}