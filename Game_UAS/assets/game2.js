 // Array berisi data hewan dan gambarnya
 const animals = [
    { name: 'kura-kura', image: 'assets/pict/tutel.png '  },
    { name: 'lumba-lumba', image: 'assets/pict/dolpin.png' },
    { name: 'kuda laut', image: 'assets/pict/kuda laut.png' }
    // Tambahkan lebih banyak data hewan jika diperlukan
  ];

  // Pilih hewan secara acak dari array animals
  const randomIndex = Math.floor(Math.random() * animals.length);
  const selectedAnimal = animals[randomIndex];

  // Mendapatkan elemen board dan mengubah gambar yang ditampilkan
  const board = document.getElementById('board');
  board.innerHTML = `<img src="${selectedAnimal.image}" alt="Gambar Hewan">`;

  // Fungsi untuk memeriksa jawaban yang diinputkan
  function checkAnswer() {
    const answerInput = document.getElementById('answer');
    const userAnswer = answerInput.value.toLowerCase();

    if (userAnswer === selectedAnimal.name) {
      alert('Selamat, jawaban kamu benar!');
    } else {
      alert('Jawaban kamu salah. Coba lagi!');
    }

    // Reset input setelah memeriksa jawaban
    answerInput.value = '';
  }