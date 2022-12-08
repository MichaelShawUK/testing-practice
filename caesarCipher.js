function isLetter(char) {
  const alphabetical = new RegExp('[a-zA-Z]');
  return alphabetical.test(char);
}

function shiftChar(char, key) {
  let ascii = char.charCodeAt(0) + key;
  if (ascii > 122) { 
    ascii = 97 + (ascii - 123)
  }
  if (char.charCodeAt(0) < 91 && ascii > 90) {
    ascii = 65 + (ascii - 91);
  }
  return String.fromCharCode(ascii);
}

export default function caesarCipher(text, key) {
  const chars = text.split('');
  const cipher = chars.map(char => {
    if (isLetter(char)) return shiftChar(char, key);
    else return char;
  })
  return cipher.join('');
}