import cipher from './cipher.js';

console.log(cipher);

const buttonC = document.getElementById("msgCod");
const buttonD = document.getElementById("msgDecod");
const textarea1 = document.getElementById("textUm");
const textarea2 = document.getElementById("textDois");
const textarea3 = document.getElementById("textTres");
const textarea4 = document.getElementById("textQuatro");


buttonC.addEventListener('click', function mensagemDigitada() {
  const texto = textarea1.value;
  const key = 3;
  const msgCriptografada = cifrarCesar(texto, key);
  textarea2.value = msgCriptografada;
  console.log('O botão de codificar foi clicado!');
});

buttonD.addEventListener('click', function mensagemEscrita() {
  const texto = textarea3.value;
  const key = 3;
  const msgDecririptografa = cifrarCesar(texto, key);
  textarea4.value = msgDecriptografada;
  console.log('O botão de decodificar foi clicado!');
});
