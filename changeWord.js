function changeWord(selectedText, changedText, text) {
  // menggunakan regular expression dengan g flag untuk mengganti semua kemunculan kata yang dipilih
  const regularExpresion = new RegExp(selectedText, "g");

  // Mengganti kata yang dipilih dengan kata pengganti dalam teks
  const newText = text.replace(regularExpresion, changedText);
  return newText;
}

const kalimat = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat));
console.log(changeWord("Bromo", "Semeru", kalimat2));
