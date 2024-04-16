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
                resultado = "Não se pode dividir por zero";
            }
            break;
        case "*":
            resultado = primeiroNumero * segundoNumero;
            break;
        default:
            resultado = "Operação Inválida";
            break;
        }
    
    // Caso o navegador permita a inserção de letras no campo number (ex.: Firefox)
    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
       resultado = "Não insira letras"
    }

    document.getElementById('resultado').innerHTML = resultado;
}