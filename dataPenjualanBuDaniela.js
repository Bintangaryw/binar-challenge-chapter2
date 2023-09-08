const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

// Fungsi untuk mengubah angka menjadi format Rupiah
function formatRupiah(angka) {
  var reverse = angka.toString().split("").reverse().join(""),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join(".").split("").reverse().join("");
  return "Rp " + ribuan;
}

function getInfoPenjualan(data) {
  if (!Array.isArray(data)) {
    return "Data tidak valid!";
  } else if (Array.isArray(data)) {
    // Menghitung total keuntungan kotor
    let arrayProduk = dataPenjualanNovel.length;
    let arrayKeuntungan = [];
    let totalKeuntunganKotor = 0;
    for (let i = 0; i <= arrayProduk - 1; i++) {
      let keuntunganPerSepatu = data[i].hargaJual * data[i].totalTerjual;
      arrayKeuntungan.push(keuntunganPerSepatu);
    }
    for (let b = 0; b < arrayKeuntungan.length; b++) {
      totalKeuntunganKotor += arrayKeuntungan[b];
    }

    // Menghitung total modal
    let arrayModal = [];
    let totalModal = 0;
    for (let i = 0; i <= arrayProduk - 1; i++) {
      let totalStok = data[i].totalTerjual + data[i].sisaStok;
      let modalPerSepatu = data[i].hargaBeli * totalStok;
      arrayModal.push(modalPerSepatu);
    }
    for (let b = 0; b < arrayModal.length; b++) {
      totalModal += arrayModal[b];
    }

    // Menghitung buku terlaris
    let produkTerlaris = null;
    let jumlahTerjualTerbanyak = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].totalTerjual > jumlahTerjualTerbanyak) {
        jumlahTerjualTerbanyak = data[i].totalTerjual;
        produkTerlaris = data[i].namaProduk;
      }
    }

    // Menghitung penulis terlaris
    let penulisTerlaris = null;
    let jumlahTerbanyak = 0;
    const penulisTerlarisMap = {};
    for (let i = 0; i < data.length; i++) {
      const penulis = data[i].penulis;
      const totalTerjual = data[i].totalTerjual;

      if (penulisTerlarisMap[penulis]) {
        penulisTerlarisMap[penulis] += totalTerjual;
      } else {
        penulisTerlarisMap[penulis] = totalTerjual;
      }

      if (penulisTerlarisMap[penulis] > jumlahTerbanyak) {
        jumlahTerbanyak = penulisTerlarisMap[penulis];
        penulisTerlaris = penulis;
      }
    }

    // Menghitung persentase keuntungan
    var keuntunganBersih = totalKeuntunganKotor - totalModal;
    var persentaseKeuntungan = (keuntunganBersih / totalModal) * 100;

    const hasil = console.log(
      " Total keuntungan kotor  : " + formatRupiah(totalKeuntunganKotor),
      "\n",
      "Total modal             : " + formatRupiah(totalModal),
      "\n",
      "Total keuntungan bersih : " + formatRupiah(keuntunganBersih),
      "\n",
      "Produk terlaris         : " + produkTerlaris,
      "\n",
      "Penulis terlaris        : " + penulisTerlaris,
      "\n",
      "Persentase keuntungan   : " +
        persentaseKeuntungan.toFixed(2) + // Menampilkan persentase dengan 2 angka desimal
        " % ( (Total keuntungan bersih / Total modal) x 100% )"
    );
    return hasil;
  }
}

console.log(getInfoPenjualan(dataPenjualanNovel));
