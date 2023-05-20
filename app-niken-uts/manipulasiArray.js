var dataArray = []; // Array untuk menyimpan data

function submitForm() {
  // Mendapatkan nilai dari input
  var nama = document.getElementById("nama").value;
  var tanggal_lahir = document.getElementById("tanggal_lahir").value;
  var nomor_hp = document.getElementById("nomor_hp").value;
  var alamat = document.getElementById("alamat").value;

  // Membuat objek untuk menyimpan hasil input
  var data = {
    nama: nama,
    tanggal_lahir: tanggal_lahir,
    nomor_hp: nomor_hp,
    alamat: alamat,
  };

  // Menyimpan objek data ke dalam array
  dataArray.push(data);

  // Menampilkan pemberitahuan alert
  alert("Data berhasil disimpan:\n\n" + JSON.stringify(data));

  // Mengosongkan formulir
  document.getElementById("myForm").reset();
}

function tampilkanData() {
  var dataDiv = document.getElementById("dataDiv");
  dataDiv.innerHTML = ""; // Mengosongkan isi dataDiv

  // Membuat elemen <ol> untuk daftar data dengan angka
  var ol = document.createElement("ol");

  // Menambahkan setiap data dalam array ke dalam daftar
  for (var i = 0; i < dataArray.length; i++) {
    var li = document.createElement("li");
    li.textContent = JSON.stringify(dataArray[i]);

    // Membuat tombol "Hapus" untuk setiap data
    var hapusButton = document.createElement("button");
    hapusButton.textContent = "Hapus";
    hapusButton.setAttribute("data-index", i);
    hapusButton.setAttribute("class", "tombol"); // Menyimpan indeks data pada atribut data-index
    hapusButton.addEventListener("click", function () {
      var index = this.getAttribute("data-index");
      hapusData(index);
    });

    // Menambahkan tombol "Hapus" ke dalam elemen <li>
    li.appendChild(hapusButton);
    ol.appendChild(li);
  }

  // Menambahkan daftar data ke dalam dataDiv
  dataDiv.appendChild(ol);
}

function hapusData(index) {
  dataArray.splice(index, 1); // Menghapus data dari array berdasarkan indeks
  tampilkanData(); // Memperbarui tampilan data setelah penghapusan
}
