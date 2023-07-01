let diasemana = 2
let mensagem = ""

switch (diasemana){
    case 1:
        mensagem = "hoje e domingo";
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

console.log(mensagem)