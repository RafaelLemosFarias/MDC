function calcularMDC(a, b) {

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function obterEntradaDoUsuario() {
    const numero1 = parseInt(prompt("Digite o primeiro número: "));
    const numero2 = parseInt(prompt("Digite o segundo número: "));
    return [numero1, numero2];
}

function exibirResultadoMDC(mdc) {
    console.log(`O MDC dos números é: ${mdc}`);
}

function calcularEMostrarMDC() {
    const [numero1, numero2] = obterEntradaDoUsuario();
    
    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, insira números válidos.");
        return;
    }

    const mdc = calcularMDC(numero1, numero2);
    exibirResultadoMDC(mdc);
}

calcularEMostrarMDC();
