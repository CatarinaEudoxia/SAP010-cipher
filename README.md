# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Protótipo](#3-protótipo-inicial)
* [4. Instruções de uso](#4-instruções-de-uso)
* [5. Produto final e Objetivos alcançados](#6-produto-final-e-objetivos-alcançados)
* [6. Acesse o Loki Lock](#6-acesse-o-loki-lock-aqui)
* [7. Projeto desenvolvido por](#7-projeto-desenvolvido-por)

***

## 1. Prefácio

O projeto foi desenvolvido como parte do bootcamp da Laboratória.Tendo o objetivo de fazer a utilização de técnicas de codificação 
para criptografar e decriptografar textos, frases, mensagens e muito mais. Esté projeto em específico foi desenvolvido com a cifra de César, uma técnica antiga de cifragem, e muito simples, por sinal.
A Cifra de César é uma das técnicas de criptografia mais antigas e acredita-se que Júlio César utilizava desta técnica para realizar suas comunicações.

Constituída pelo deslocamento de letras, a cifra de César troca as letras originais pelo deslocamento desejado, podendo ele variar.
Assim que o deslocamento é escolhido, uma novo alfabeto será desenvolvido para que possa se realizar a subtituição do texto original, para o texto cifrado. 

Por exemplo se usarmos o deslocamento de 13 posições:

Alfabeto sem cifra: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

Alfabeto com cifra: N O P Q R S T U V W X Y Z A B C D E F G H I J K L M

A letra A será D

A palavra LOKI será YBXV

## 2. Resumo do projeto

O [Loki Lock](https://catarinaeudoxia.github.io/SAP010-cipher/) foi desenvolvido especialmente como parte do Bootcamp, e tem como objetivo utilizar o JavaScript para implementar a Cifra de César. Sendo necessário que o projeto desenvolvido permita a criptografia e descriptografia de textos, mensagens, cartas senhas e muito mais. 

O site foi inspirado em uma janela de conversação simples e de design básico, com cores fortes baseadas da paleta do jogo CyberPunk. 

Ao acessar o site no navegador, o usuário terá a escolha de prosseguir ou não. Caso deseje continuar,terá acesso a uma área onde poderá digitar o texto desejado e escolher o deslocamento das letras, e então criptografa-lo. Ou, no caso de um texto já cifrado, poderá descriptgrafa-lo.

Nele você pode:

— Criar senhas seguras para e-mail.

— Cifrar cartões de crédito.

— Mensagens secretas para alguma pessoa.

— Escrever cartas secretas.


## 3. Protótipo Inicial

O protótipo inicial foi projetado para ter três telas. A tela inical, tela de codificação e tela de decodificação. 

![prototipo-inical] (First-prot.png)

No entando para fazer com que experiência do usuário fosse melhor, mais rápida e de fácil manuseio, o projeto foi modificado para ter apenas duas telas. A tela inicial e a tela onde será possivel criptografar e descriptografar.  

![prototipo-final] (final-prot.png)

## 4. Instruções de uso
A área incial é onde o usuário poderá decidir se quer prosseguir ou não. Caso deseje é so seguir as instruções abaixo:

— Clicar no botão "Prosseguir"

O usuário será redirecionado para uma nova página, onde se encontra o codificador/decodificar. O usuário deve então:

— Selecionar o deslocamento desejado, podendo selecionar até o número 33;

— Selecionar o botão "Codificar", se deseja codificar ou clicar no "Decodificar", caso queira decodificar;

— Clicar na caixa que contém a mensagem "Escreva seu texto aqui", e digitar  texto desejado;

O texto será automáticamente cifrado/ decifrado, e estará pronto para ser lido ou utilizado.

OBS: Lembre-se de anotar o deslocamento, para não esquecer.

Dica extra: Para os amantes de uma boa brincadeira, o Loki Lock indica aproveitar dos deslocamentos para criar mensagens mais difíceis de serem descobertas. Após a primeira codificação, você pode copiar a mensagem e fazer uma nova criptografia da mesma, com outro deslocamento. Assim ficará mais difícil de ser descriptografada, fazendo com que a pessoa que receba a mensagem "sofra" tentando descobrir. 

OBS: Nunca se esqueça de anotar todas as mudanças de deslocamento. Caso contrário, você pode cair no própria brincadeira.

## 5. Produto final e Objetivos alcançados

![tela-inicial] (TelaInicial.png)
![tela-final] (TelaCodificação.png)

Critérios mínimos de aceitação do projeto:

* [✔] Possui uma interface que permite ao usuário criptografar e
  descriptografar.
* [✔] O projeto será entregue incluindo testes unitários dos métodos `cipher`
  (`encode` e `decode`).
* [✔] O projeto será entregue livre de _erros_ de `eslint` (_warnings_ são ok).
* [✔] O código do seu projeto será entregue no GitHub.
* [✔] A interface será "implantada" usando o GitHub Pages.
* [✔] O README contém uma definição de produto.

## 6. Ferramentas e mecanismos usados:
— HTML (linguagem de marcação)

— CSS (Mecanismo para adicionar estilos a uma página web)

— JavaScript (Linguagem de programação)

— VSCODE (Editor de texto)

— Figma (Criação de protótipo)

— Git bash (Realização de testes unitários)

## 7. Acesse o Loki Lock aqui:

 Acesse o [Loki Lock](https://catarinaeudoxia.github.io/SAP010-cipher/)
 
## 8. Projeto desenvolvido por:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/129068843?s=400&u=07f6693114af32c3fc33f1913fde52c78b9dfd85&v=4" width="100px;" alt="Foto do GitHub"/><br>
        <sub>
          <b>Catarina Eudoxia Ferreira</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
