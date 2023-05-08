const cipher = {
  encode: function (offset, message) {
    if (typeof offset !== 'number' || typeof message !== 'string') {
      throw new TypeError();
    }
    let encodedMessage = "";
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const encodedCharCode = ((charCode - 65 + offset) % 26) + 65;
        encodedMessage += String.fromCharCode(encodedCharCode);
      }
      else if (charCode >= 97 && charCode <= 122) {
        const encodedCharCode = ((charCode - 97 + offset) % 26) + 97;
        encodedMessage += String.fromCharCode(encodedCharCode);
      } else {
        encodedMessage += message[i];
      }
    }
    return encodedMessage;
  },
  decode: function (offset, message) {
    if (typeof offset !== 'number' || typeof message !== 'string') {
      throw new TypeError();
    }
    let decodedMessage = "";
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const decodedCharCode = ((charCode - 90 - offset) % 26) + 90;
        decodedMessage += String.fromCharCode(decodedCharCode);
      }
      else if (charCode >= 97 && charCode <= 122) {
        const decodedCharCode = ((charCode - 122 - offset) % 26) + 122;
        decodedMessage += String.fromCharCode(decodedCharCode);
      } else {
        decodedMessage += message[i];
      }
    }
    return decodedMessage;
  }
};

export default cipher;