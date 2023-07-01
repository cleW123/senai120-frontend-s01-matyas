//Crie um programa que pergunte ao usuário o número de um dia da semana (1 a 7) e exiba se é um dia útil ou um dia de fim de semana

let codDia = 6
let diaSemana = ""


if (codDia == 6 || codDia == 7) {
    diaSemana = "Final de semana, "
}
else {
    diaSemana = "Dia de Util, "
}

switch (codDia) {
    case 1:
        diaSemana += "segunda-feira"
        break;

    case 2:
        diaSemana += "terça-feira"
        break;

    case 3:
        diaSemana += "quarta-feira"
        break;

    case 4:
        diaSemana += "quinta-feira"
        break;

    case 5:
        diaSemana += "sexta-feira"
        break;

    case 6:
        diaSemana += "sabado"
        
        break;

    case 7:
        diaSemana += "domingo"
        break;


    default:
        diaSemana = "error"
        break;
}

console.log(diaSemana)