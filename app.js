let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto'

let paragrafo = document.querySelector('.texto__paragrafo');
paragrafo.innerHTML = 'escolha um número entre 1 e 10'


let numeroSecreto;

function gerarNumeroSecreto() {
    numeroSecreto = parseInt(Math.random() * 10 + 1);
    return console.log("Eis o número secreto é: " + numeroSecreto);
}
gerarNumeroSecreto();

let tentativas = 1;

function verificarChute() {

    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {

        let palavraTentativa = tentativas == 1? ' tentativa' : ' tentativas'  

        paragrafo.innerHTML = "Os números são iguais! Você acertou com " + tentativas + palavraTentativa;
        titulo.innerHTML = 'Acertou Mizerável!'

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {

            paragrafo.innerHTML = "O número secreto é menor";
        } else {
            paragrafo.innerHTML = "O número secreto é maior";
        }
        tentativas++;
        limparCampo();
    }
}

function botaoReiniciar() {
    gerarNumeroSecreto();
    tentativas = 1;
    limparCampo();
    titulo.innerHTML = 'Jogo do Número Secreto'
    paragrafo.innerHTML = 'escolha um número entre 1 e 10'
    document.getElementById('reiniciar').setAttribute('disabled',true)

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}




// function inserirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// inserirTextoNaTela('h1', 'Jogo do número misterioso');
// inserirTextoNaTela('p', "Escolha um número entre 1 e 10");
