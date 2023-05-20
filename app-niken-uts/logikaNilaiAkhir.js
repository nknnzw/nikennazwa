function tampilkanNilai() {
  var nim = document.getElementById("nim").value;
  var nama = document.getElementById("nama").value;
  var mataKuliah = document.getElementById("mataKuliah").value;
  var nilaiAkhir = document.getElementById("nilaiAkhir").value;
  var nilaiHuruf;
  var indeksNilai;


  if (nilaiAkhir >= 85 && nilaiAkhir <= 100) {
    nilaiHuruf = "A";
    indeksNilai = "4.00";
  } else if (nilaiAkhir >= 79) {
    nilaiHuruf = "A-";
    indeksNilai = "3.67";
  } else if (nilaiAkhir >= 74) {
    nilaiHuruf = "B+";
    indeksNilai = "3.33";
  } else if (nilaiAkhir >= 69) {
    nilaiHuruf = "B";
    indeksNilai = "3.00";
  } else if (nilaiAkhir >= 64) {
    nilaiHuruf = "B-";
    indeksNilai = "2.67";
  } else if (nilaiAkhir >= 59) {
    nilaiHuruf = "C+";
    indeksNilai = "2.33";
  } else if (nilaiAkhir >= 54) {
    nilaiHuruf = "C";
    indeksNilai = "2.00";
  } else if (nilaiAkhir >= 41) {
    nilaiHuruf = "D";
    indeksNilai = "1.00";
  } else {
    nilaiHuruf = "E";
    indeksNilai = "0.00";
  }

  var hasil =
    "<table>" +
    "<tr><td>NIM</td><td>: " +
    nim +
    "</td></tr>" +
    "<tr><td>Nama</td><td>: " +
    nama +
    "</td></tr>" +
    "<tr><td>Mata Kuliah</td><td>: " +
    mataKuliah +
    "</td></tr>" +
    "<tr><td>Nilai Akhir</td><td>: " +
    nilaiAkhir +
    "</td></tr>" +
    "<tr><td>Nilai Huruf</td><td>: " +
    nilaiHuruf +
    "</td></tr>" +
    "<tr><td>Indeks Nilai</td><td>: " +
    indeksNilai +
    "</td></tr>" +
    "</table>";

  document.getElementById("hasil").innerHTML = hasil;
}

