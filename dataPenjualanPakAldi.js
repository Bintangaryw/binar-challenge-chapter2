const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];
const total = dataPenjualanPakAldi.length;

function getTotalPenjualan(data) {
  if (!Array.isArray(data)) {
    return "Data harus berupa array of object!";
  } else if (Array.isArray(data)) {
    let arrTotal = [];
    let totalPenjualan = 0;
    for (let i = 0; i <= total - 1; i++) {
      arrTotal.push(data[i].totalTerjual);
    }
    console.log(arrTotal);
    for (let b = 0; b < arrTotal.length; b++) {
      totalPenjualan += arrTotal[b];
    }
    return totalPenjualan;
  }
}

console.log(getTotalPenjualan(dataPenjualanPakAldi));
