function regraDe3(){
    let inputNumero1 = document.getElementById("regra3numero1");
    let numero1 = inputNumero1.value;
    let inputNumero2 = document.getElementById("regra3numero2");
    let numero2 = inputNumero2.value;
    let inputNumero3 = document.getElementById("regra3numero3");
    let numero3 = inputNumero3.value;
    let resposta = document.getElementById("regra3resposta");
    let multiplicacao = numero1 * numero2;
    let divisao = multiplicacao / numero3;
    resposta.value = divisao;
}