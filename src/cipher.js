
// função para criptografar a mensagem
const cipher = {
  encode: function (desloc, string) {
    if (!desloc) {
      throw new TypeError();
    }

    let textCode = "";

    for (let i = 0; i < string.length; i++) {
      const cripto = string.charCodeAt(i);

      if (cripto >= 65 && cripto <= 90) {
        textCode += String.fromCharCode(((string - 65 + desloc) % 26) + 65);
      } else if (cripto >= 97 && cripto <= 122) {
        textCode += String.fromCharCode(((string - 97 + desloc) % 26) + 97);
      } else {
        textCode += string.charAt(i);
      }
    }
    return textCode;
  },

  decode: function (deslocUm, stringUm) {
    if (!deslocUm) {
      throw new TypeError();
    }

    let textDecode = "";

    for (let i = 0; i < stringUm.length; i++) {
      const descripto = stringUm.charCodeAt(i);

      if (descripto >= 65 && descripto <= 90) {
        textDecode += String.fromCharCode(((descripto + 65 - deslocUm) % 26) + 65);
      } else if (descripto >= 97 && descripto <= 122) {
        textDecode += String.fromCharCode(
          ((descripto - 122 - stringUm) % 26) + 122
        );
      } else {
        textDecode += stringUm.charAt(i);
      }
    }
    return textDecode;
  }
}

export default cipher;