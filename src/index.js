import cipher from './cipher.js';

console.log(cipher);

const buttonC =  document.getElementById("msgCod");
const buttonD = document.getElementById("msgDecod");
/*let textoUm = document.getElementById("textOne");
let textoDois = document.getElementById("TextTwo");
let textoTres= document.getElementById("textThree");
let textoQuatro = document.getElementById("TextFour");*/

buttonC.addEventListener('click', mensagemDigitada());

function mensagemDigitada() {
  document.getElementById("TextOne").innerHTML = document.getElementById("textTwo").value;
    console.log('O botão de codificar foi clicado!');
  };

  function criptografar() {

  }
  
  buttonD.addEventListener('click', function() {
    console.log('O botão de decodificar foi clicado!');
  });

  function mensagemEscrita() {
    document.getElementById("TextFour").innerHTML = document.getElementById("textThree").value;
  }

  function decriptografar() {

  };