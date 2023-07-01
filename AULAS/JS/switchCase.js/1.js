//Switch Case Crie um programa que pergunte ao usuário o número de um mês (1 a 12) e exiba o nome do mês por extenso.

let diasemana = 5;
let mensagem = "";


switch (diasemana){
    case 1:
        mensagem = "janeiro";
        break;

    case 2:
        mensagem = "hoje e segunda";
        break;

    case 3:
        mensagem = "hoje e terça";
        break;

    case 3:
        mensagem = "hoje e quarta";
        break;

    case 4:
        mensagem = "hoje e quinta";
        break;

    case 5:
        mensagem = "hoje e sexta";
        break;

    case 6:
        mensagem = "hoje e sabado";
        break;

    default:
        mensagem = "dia da semana invalido"
        break;
}
console.log(mensagem);
