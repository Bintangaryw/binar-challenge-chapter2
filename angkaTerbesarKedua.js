function getAngkaTerbesarKedua(array) {
  if (!Array.isArray(array)) {
    return "Data harus berupa array!";
  } else if (Array.isArray(array)) {
    let sortedArray = array.sort((a, b) => a - b);
    let lengthSortedArray = sortedArray.length;
    let angkaTerbesarKedua = sortedArray[lengthSortedArray - 2];
    const hasil = console.log("Angka terbesar kedua dari Array: ", array, "adalah:", angkaTerbesarKedua);
    return hasil;
  }
}
const dataAngka = [10, 30, 20, 40, 60, 50];

console.log(getAngkaTerbesarKedua(dataAngka));
