function calcularConta() {

    var resultado = null;
    // ParseFloat pega um float ao invés de um int, permitindo calculos com números decimais
    var primeiroNumero = parseFloat(document.getElementById('primeiro-numero').value);
    var sinal = document.getElementById('operacao');
    sinal = sinal.options[sinal.selectedIndex].text;
    var segundoNumero = parseFloat(document.getElementById('segundo-numero').value);


    switch (sinal) {
        case '+':
            resultado = primeiroNumero + segundoNumero;
            break;
        case '-':
            resultado = primeiroNumero - segundoNumero;
            break;
        case "/":
            if (segundoNumero) {
                resultado = primeiroNumero / segundoNumero;
            } else {
                alert("Não se pode dividir por zero")
            }
            break;
        case "*":
            resultado = primeiroNumero * segundoNumero;
            break;
        default:
            alert("Operação Inválida")
            break;
        }
        
    document.getElementById('resultado').innerHTML = resultado;
}