const valorImput1 = document.getElementById("valor1"),
    valorImput2 = document.getElementById("valor2"),
    botaoCalcula = document.getElementById("btnSomar"),
    resultado = document.getElementById("resultado");

/*function somar() {
    let valor1 = Number(valorImput1.value),
        valor2 = Number(valorImput2.value);

    resultado.innerHTML = valor1 * valor2
}*/

botaoCalcula.addEventListener("click", () => {
    let valor1 = Number(valorImput1.value),
        valor2 = Number(valorImput2.value);

    resultado.innerHTML = valor1 * valor2;
})

