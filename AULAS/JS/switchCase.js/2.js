//Switch Case Crie um programa que pergunte ao usuário o número de um mês (1 a 12) e exiba o nome do mês por extenso.witch Case Crie um programa que pergunte ao usuário o número de um mês (1 a 12) e exiba o nome do mês por extenso.

let mes = 5
let nomeDoMes = ""

switch (mes) {
  case 1:
    nomeDoMes = "Janeiro";
    break;
  case 2:
    nomeDoMes = "Fevereiro";
    break;
  case 3:
    nomeDoMes = "Março";
    break;
  case 4:
    nomeDoMes = "Abril";
    break;
  case 5:
    nomeDoMes = "Maio";
    break;
  case 6:
    nomeDoMes = "Junho";
    break;
  case 7:
    nomeDoMes = "Julho";
    break;
  case 8:
    nomeDoMes = "Agosto";
    break;
  case 9:
    nomeDoMes = "Setembro";
    break;
  case 10:
    nomeDoMes = "Outubro";
    break;
  case 11:
    nomeDoMes = "Novembro";
    break;
  case 12:
    nomeDoMes = "Dezembro";
    break;
  default:
    nomeDoMes = "Mês inválido";
    break;
}

console.log(nomeDoMes);
