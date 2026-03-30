// Soal A1
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) { // FIX - event listener diganti yang sebelumnya "klik" menjadi "click"
    e.preventDefault();
    console.log('Navigasi ke: ' + e.target.innerText);
  });
});


// Soal A2
const judul = document.querySelector('h1');

judul.innerText = 'AI dan Masa Depan Teknologi Indonesia'; // ??? script jalan secara normal dan tidak ada error di console sebelum didebug

// Soal A3
const paragraphs = document.querySelectorAll('.main-article p');
let totalKata = 0;

paragraphs.forEach(function(p) {
  const kata = p.innerText.split(' ');
  totalKata += kata.length; // FIX - mengganti logika operator dari '=' menjadi '+='. Operator '=' terus menimpa nilai totalKata setiap loop diulang, sehingga diganti menjadi "+=" agar nilai totalKata terus ditambahkan pada setiap look.
});

console.log('Total kata: ' + totalKata);




// Soal B1
navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    navLinks.forEach(function(l) {
      l.classList.remove('active');
    });

    link.classList.add('active');
  });
});


// Soal B2
let semuaTeks = "";

paragraphs.forEach(function(p) {
  semuaTeks += p.innerText + " ";
});

const jumlahKata = semuaTeks.split(' ').length;

const estimasiMenit = Math.ceil(jumlahKata / 200);

const metaInfo = document.querySelector('.meta-info');

metaInfo.innerText += ' | Estimasi: ' + estimasiMenit + ' menit baca';