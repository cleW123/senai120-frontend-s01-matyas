const valorImput1 = document.getElementById("valor1"),
    valorImput2 = document.getElementById("valor2"),

    operacoes = document.getElementById("result"),

    buttonCalcular = document.getElementById("btnSomar"),

    resultado = document.getElementById("resultado");


buttonCalcular.addEventListener("click", () => {

    let valor1 = Number(valorImput1.value),
        valor2 = Number(valorImput2.value);

    resultado.innerHTML = operacoes.value

    switch (operacoes.value) {
        case "soma":
            resultado.value = valor1 + valor2
            break

        case "sub":
            resultado.value = valor1 - valor2
            break

        case "mult":
            resultado.value = valor1 * valor2
            break

        case "divi":
            resultado.value = valor1 / valor2
            break

        default:
            break
    }
})

/*function somar() {
    let valor1 = Number(valorImput1.value),
        valor2 = Number(valorImput2.value);
    resultado.innerHTML = valor1 * valor2
}*/



