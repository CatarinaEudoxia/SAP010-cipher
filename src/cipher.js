const cipher = {
  encode: function (offset, message) {
    let encodedMessage = "";
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 32 && charCode <= 126) {
        const encodedCharCode = ((charCode - 32 + offset) % 95) + 32;
        encodedMessage += String.fromCharCode(encodedCharCode);
      } else {
        encodedMessage += message[i];
      }
    }
    return encodedMessage;
  },
  decode: function (offset, message) {
    let decodedMessage = "";
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 32 && charCode <= 126) {
        const decodedCharCode = ((charCode - 32 - offset + 95) % 95) + 32;
        decodedMessage += String.fromCharCode(decodedCharCode);
      } else {
        decodedMessage += message[i];
      }
    }
    return decodedMessage;
  }
};

export default cipher;
