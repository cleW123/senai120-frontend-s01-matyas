let senhaCorreta = "12345";
let senhaDigitada;

do {
  senhaDigitada = prompt("Digite sua senha:");
} while (senhaDigitada !== senhaCorreta);

console.log("Acesso permitido!");