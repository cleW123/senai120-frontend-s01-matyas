//Crie um programa que pergunte ao usuário o código de um produto (1 a 5) e exiba o nome e o preço desse produto.

let cod = 3   //codigo produto
let produtos = ""



switch (cod) {
    case 1:
       produtos  =  " esse tenis custa 250$";
        break;

    case 2:
        produtos = " essa blusa custa 90$"
        break; 

    case 3:
        produtos = " essa jaqueta custa 550"
        break;

    case 4:
        produtos = " esse terno custa 195$"
        break;

    case 5:
        produtos = "essa juliet custa 2,50$" 
        break;

        default:
            produtos = "error";
            break;
}

console.log(produtos);
