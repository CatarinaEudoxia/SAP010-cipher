import cipher from './cipher.js';

let offSetValue = 1;
let activeTab = "tabCripto";
let lastAction = "encode";

const message = document.querySelector('#textUm');
const result = document.querySelector('#textDois');
const msgCod = document.querySelector('#msgCod');
const msgDecod = document.querySelector('#msgDecod');
const deslocamento = document.querySelector('#deslocamento');

function applyAction() {
  const messageValue = message.value;
  if (lastAction === "encode") {
    const encrypted = cipher.encode(offSetValue, messageValue);
    result.value = encrypted;
    console.log(`Mensagem criptografada: ${result.value}`);
  } else {
    const decrypted = cipher.decode(offSetValue, messageValue);
    result.value = decrypted;
    console.log(`Mensagem descriptografada: ${result.value}`);
  }
}

message.addEventListener('input', applyAction);

msgCod.addEventListener('click', () => {
  lastAction = "encode";
  applyAction();
});

msgDecod.addEventListener('click', () => {
  lastAction = "decode";
  applyAction();
});

deslocamento.addEventListener('change', (event) => {
  const value = event.target.value;
  offSetValue = Number(value);
  applyAction();
});

const tabCripto = document.querySelector("#tabCripto");
const tabDecripto = document.querySelector("#tabDecripto");

function toggleTab(event) {
  tabCripto.classList.remove("active")
  tabDecripto.classList.remove("active")

  const actualtab = event.target
  actualtab.classList.add("active")

  const tabId = event.srcElement.id
  if (activeTab !== tabId) {
    activeTab = tabId;
    applyAction();
  }
}

tabCripto.addEventListener('click', () => {
  lastAction = "encode";
  toggleTab(event);
});

tabDecripto.addEventListener('click', () => {
  lastAction = "decode";
  toggleTab(event);
});
