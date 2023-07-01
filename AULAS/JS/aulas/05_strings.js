let timeFutebol = 'palmeiras';
console.log(timeFutebol.length);//mostrara a quantidade de caracter dentro da string

let cidade = 'sao BeRnArDo Do CamPo'

console.log(cidade.toLocaleLowerCase());

let pais = 'angola';
console.log(pais.charAt(3));
console.log(pais.indexOf('a'));

let frase1 = 'olha se voce nao me ama';
console.log(frase1.slice(8, 0));
console.log(frase1.substring(0, 8));

let frase2 ='eu nasci a 10000 anos atras';
console.log(frase2.replace('anos', 'dias'));
console.log(frase2.replace('anos', 'dias'));

let cpf = '094-123-456-23';
 
cpf = cpf.replaceAll(',' , '');
cpf = cpf.replace('-', '');
console.log(cpf);

let frase3 = 'armei uma arapuca na beira da estrda '

frase3 = frase3.split(' ');
console.log(frase3);

let nome = ' bruno oliveira '
console.log(nome)

nome = nome.trim();

console.log(nome)