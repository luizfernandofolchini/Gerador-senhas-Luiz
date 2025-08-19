const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha - 1
    }
    numeroSenha.textContent=tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha = tamanhoSenha + 1
    }
    numeroSenha.textContent=tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');

const letraMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ'
const letraMinuscula = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789';
const simbolo = '!@%$*¨'
geraSenha();

function geraSenha() {
    let senha = '';
    for (let i=0; 1<tamanhoSenha; i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.lenth;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}
