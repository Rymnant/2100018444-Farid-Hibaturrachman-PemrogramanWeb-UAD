function button() {
  var pil;
  pil = parseInt(document.getElementById("option").value);
  if (pil == 1) {
    tambah();
  } else if (pil == 2) {
    kurang();
  } else if (pil == 3) {
    kali();
  } else {
    bagi();
  }
}

function tambah() {
  var i, j, tambah;
  i = parseFloat(document.getElementById("x").value);
  j = parseFloat(document.getElementById("y").value);
  tambah = i + j;
  alert("Hasil Penjumlahan = " + tambah);
}

function kurang() {
  var i, j, kurang;
  i = parseFloat(document.getElementById("x").value);
  j = parseFloat(document.getElementById("y").value);
  kurang = i - j;
  alert("Hasil Pengurangan = " + kurang);
}

function kali() {
  var i, j, kali;
  i = parseFloat(document.getElementById("x").value);
  j = parseFloat(document.getElementById("y").value);
  kali = i * j;
  alert("Hasil Perkalian = " + kali);
}

function bagi() {
  var i, j, bagi;
  i = parseFloat(document.getElementById("x").value);
  j = parseFloat(document.getElementById("y").value);
  bagi = i / j;
  alert("Hasil Pembagian = " + bagi);
}
