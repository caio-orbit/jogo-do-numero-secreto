let listaDeNumerosSorteados = [];
let limiteDeTentativas = 10;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};



function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do nº secreto');
    exibirTexto('p', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) { 
        exibirTexto('h1', 'Acertou!!!');
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você acertou o número secreto, com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O numero secreto é menor');
        }
        else {
            exibirTexto('p', 'O numero secreto é maior');
        }
    } 
    tentativas++;
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteDeTentativas + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosNaLista == limiteDeTentativas) {
        listaDeNumerosSorteados = [];
    };

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } 
    
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
};

function limparCampo() { 
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
