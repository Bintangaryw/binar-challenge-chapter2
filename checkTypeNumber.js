function checkTypeNumber(givenNumber) {
  if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  } else if (givenNumber % 2 == 0) {
    return givenNumber + " adalah GENAP";
  } else {
    return givenNumber + " adalah GANJIL";
  }
}
console.log(checkTypeNumber(12));
