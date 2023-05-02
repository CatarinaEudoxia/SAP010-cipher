import cipher from './cipher.js';

console.log(cipher);

const buttonC = document.getElementById("msgCod");
const buttonD = document.getElementById("msgDecod");
const textarea1 = document.getElementById("textUm");
const textarea2 = document.getElementById("textDois");
const textarea3 = document.getElementById("textTres");
const textarea4 = document.getElementById("textQuatro");

buttonC.addEventListener('click', mensagemDigitada);
buttonD.addEventListener('click', mensagemEscrita);

function mensagemDigitada() {
  const desloc = Number(document.getElementById("deslocamento").value);
  const string = textarea1.value;
  const msgCriptografada = cipher.encode(desloc, string);
  const pasteResult = textarea2;
  const msgErro = 'Ops...você está esquecendo de algo! Certifique-se de colocar sua mensagem e deslocamento antes de clicar no botão.';

  window.scrollBy(0, window.innerHeight)
  if (desloc, string === null && desloc, string === undefined && desloc, string === 0) {
    pasteResult.classList.add('error');
    return pasteResult.innerHTML = msgErro;
  } else {
    pasteResult.classList.remove('error')
    pasteResult.classList.add('result')
    return pasteResult.innerHTML = msgCriptografada;
  }
}

function mensagemEscrita() {
  const deslocUm = Number(document.getElementById("deslocamentoUm").value);
  const stringUm = textarea3.value;
  const msgDescriptografada = cipher.decode(deslocUm, stringUm);
  const pasteResultUm = textarea4;
  const msgErroUm = 'Ops...você está esquecendo de algo! Certifique-se de colocar sua mensagem e deslocamento antes de clicar no botão.';

  window.scrollBy(0, window.innerHeight)
  if (deslocUm, stringUm === null && deslocUm, stringUm === undefined && deslocUm, stringUm === 0) {
    pasteResultUm.classList.add('error');
    return pasteResultUm.innerHTML = msgErroUm;
  } else {
    pasteResultUm.classList.remove('error')
    pasteResultUm.classList.add('result')
    return pasteResultUm.innerHTML = msgDescriptografada;
  }
}

