function tampilData() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const nilai = document.getElementById('nilai').value;
    const matkul = document.getElementById('matkul').value;
    const btn = document.getElementById('btn1').value;
    const bnt2 = document.getElementById('btn2').value;
    const hasil = document.getElementById('hasil').value;

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
       var hasilDiv = document.getElementById("hasil");
       hasilDiv.innerHTML = "<p>NIM: " + nim + "</p>" +
                           "<p>Nama: " + nama + "</p>" +
                           "<p>Mata Kuliah: " + matkul + "</p>" +
                           "<p>Nilai Akhir: " + nilai + "</p>" +
                           "<p>Indeks Nilai: " + indeksNilai + "</p>";

                            function resetForm() {
                            document.getElementById("")
                        }
}
