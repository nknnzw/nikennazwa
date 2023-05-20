function tampilData() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const nilai = document.getElementById('nilai').value;
    const matkul = document.getElementById('matkul').value;
  
    // Menghitung indeks nilai berdasarkan ketentuan
    var indeksNilai = "";
    if (nilai >= 85 && nilai <= 100) {
      indeksNilai = "A (4.00)";
    } else if (nilai >= 79) {
      indeksNilai = "A- (3.67)";
    } else if (nilai >= 74) {
      indeksNilai = "B+ (3.33)";
    } else if (nilai >= 69) {
      indeksNilai = "B (3.00)";
    } else if (nilai >= 64) {
      indeksNilai = "B- (2.67)";
    } else if (nilai >= 59) {
      indeksNilai = "C+ (2.33)";
    } else if (nilai >= 54) {
      indeksNilai = "C (2.00)";
    } else if (nilai >= 41) {
      indeksNilai = "D (1.00)";
    } else {
      indeksNilai = "E (0.00)";
    }
  
    // Menampilkan hasil pada div dengan id "hasil"
    var tabelBoxDiv = document.getElementById("tabelBox");
    tabelBoxDiv.innerHTML += "<div class='tabelbox'>" +
      "<div class='tabelrow'>" +
      "<div class='tabelcell'>" +
      "<p>" + nim + "</p>" +
      "</div>" +
      "<div class='tabelcell'>" +
      "<p>" + nama + "</p>" +
      "</div>" +
      "<div class='tabelcell'>" +
      "<p>" + matkul + "</p>" +
      "</div>" +
      "<div class='tabelcell'>" +
      "<p>" + nilai + "</p>" +
      "</div>" +
      "<div class='tabelcell'>" +
      "<p>Nilai Huruf</p>" +
      "</div>" +
      "<div class='tabelcell'>" +
      "<p>" + nilai + "</p>" +
      "</div>" +
      "<div class='tabelcell'>" +
      "<p>" + indeksNilai + "</p>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
  
  function resetForm() {
    document.getElementById("nim").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("nilai").value = "";
    document.getElementById("matkul").selectedIndex = 0;
    var tabelBoxDiv = document.getElementById("tabelBox");
    tabelBoxDiv.innerHTML = "";
  }