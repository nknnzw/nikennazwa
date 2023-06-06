let mahasiswa = [
    {nama : "ulya", nilai: 85},
    {nama : "tarisa", nilai: 83},
    {nama : "yuli", nilai : 75},
    {nama : "selfi", nilai: 90},
    {nama : "salsa",nilai: 70}
];
function tentukanNilai(nilai) {
    let grade;
    switch (true) {
        case nilai >= 90:
          grade = "A";
          break;
        case nilai >= 80:
          grade = "B";
          break;
        case nilai >= 70:
          grade = "C";
          break;
        case nilai >= 60:
          grade = "D";
          break;
        default:
          grade = "E";
      }
    
      return grade;
    }
    for (let i = 0; i < mahasiswa.length; i++) {
        let nama = mahasiswa[i].nama;
        let nilai = mahasiswa[i].nilai;
        let grade = tentukanNilai(nilai);
      
        console.log(`Mahasiswa: ${nama}`);
        console.log(`Nilai: ${nilai}`);
        console.log(`Grade: ${grade}`);
        console.log("-------------------------");
      }
