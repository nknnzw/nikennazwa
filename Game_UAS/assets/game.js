var selectedImage = "";
const tampilanJawaban = document.querySelector('.tampilanJawaban');
const boxJawaban = document.querySelector('.resultJawaban');

var animalImages = document.querySelectorAll("#animals div");
for (var i = 0; i < animalImages.length; i++) {
    animalImages[i].addEventListener("click", function () {
        selectedImage = this.className;
    });
}

function cekGambar() {
    if (selectedImage == "kuda") {
        tampilanJawaban.innerHTML = `Jawaban Anda Benar Yaitu Kuda`;
        window.location.href = "benarSalahh1.html"; 
    } else {
        tampilanJawaban.innerHTML = `Jawaban Anda Salah Yaitu ${selectedImage} <br> Silahkan coba lagi`;
    }
    boxJawaban.classList.toggle("aktif");
}

document.querySelector('.close').addEventListener("click",function(){
    boxJawaban.classList.toggle("aktif");
});

